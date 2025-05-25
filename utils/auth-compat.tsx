import { useAuth } from '../context/AuthContext';

/**
 * Compatibility layer to help migrate from next-auth's useSession to our custom useAuth
 * This provides a similar interface to next-auth's useSession to make migration easier
 */
export function useSessionCompat() {
  const { user, isLoading, accessToken } = useAuth();
  
  // Mimic next-auth's useSession return format
  return {
    data: user ? {
      user: {
        ...user,
        name: user.username, // For compatibility with components expecting name
        image: user.image || null
      },
      expires: new Date(Date.now() + 60 * 60 * 1000).toISOString(), // 1 hour from now
      accessToken
    } : null,
    status: isLoading ? 'loading' : user ? 'authenticated' : 'unauthenticated'
  };
}

/**
 * Compatibility function to mimic next-auth's signOut
 */
export function signOutCompat() {
  const { logout } = useAuth();
  return logout();
}

/**
 * Compatibility function to mimic next-auth's getSession
 * Note: This is a client-side only implementation
 */
export async function getSessionCompat() {
  // In client-side code, we can use localStorage
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('user');
    const accessToken = localStorage.getItem('accessToken');
    
    if (user && accessToken) {
      return {
        user: JSON.parse(user),
        expires: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
        accessToken
      };
    }
  }
  
  return null;
}
