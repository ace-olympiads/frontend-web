import axios from "axios";
import http from "http"; // Import the 'http' module
import { useAuth } from './context/AuthContext';

const baseURL = `${process.env.BACKEND_URL || process.env.NEXT_PUBLIC_API_URL}`;
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: { "Content-Type": "application/json" },
  httpAgent: new http.Agent({ keepAlive: true }), // Use the 'http' Agent for HTTP requests
});

// Add a request interceptor to include auth token
axiosInstance.interceptors.request.use(
  async (config) => {
    // Get token from localStorage
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Function to make authenticated fetch requests
export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  // Get the access token from localStorage
  const accessToken = localStorage.getItem('accessToken');
  
  if (!accessToken) {
    throw new Error('No access token available');
  }
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`,
    ...options.headers,
  };
  
  const response = await fetch(url, {
    ...options,
    headers,
  });
  
  // Handle token expiration
  if (response.status === 401) {
    // Redirect to login
    window.location.href = '/login';
    return;
  }
  
  return response;
}

// Hook for using the API with authentication in components
export function useApi() {
  const { accessToken, logout } = useAuth();
  
  const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
    if (!accessToken) {
      throw new Error('No access token available');
    }
    
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
      ...options.headers,
    };
    
    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });
      
      // Handle token expiration
      if (response.status === 401) {
        logout();
        throw new Error('Session expired. Please login again.');
      }
      
      return response;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  };
  
  return { fetchWithAuth };
}

// Error handling utility
export function handleAuthError(error: any): string {
  // Common authentication errors
  const errorMessages: Record<string, string> = {
    'invalid_credentials': 'Invalid email or password',
    'user_exists': 'User with this email already exists',
    'token_expired': 'Your session has expired. Please login again.',
    'invalid_token': 'Authentication failed. Please login again.',
    'network_error': 'Network error. Please check your connection.',
  };
  
  // Extract error message or code from the error object
  let errorMessage = 'An unknown error occurred';
  
  if (typeof error === 'string') {
    errorMessage = error;
  } else if (error.message) {
    errorMessage = error.message;
  } else if (error.error) {
    errorMessage = errorMessages[error.error] || error.error;
  }
  
  return errorMessage;
}

export default axiosInstance;
