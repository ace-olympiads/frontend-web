import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider,
  signOut,
  getIdToken
} from 'firebase/auth';
import { auth } from './config';

// Email/Password Registration
export const registerWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const idToken = await getIdToken(userCredential.user);
    return { user: userCredential.user, idToken };
  } catch (error) {
    console.error('Firebase registration error:', error);
    throw error;
  }
};

// Email/Password Login
export const loginWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const idToken = await getIdToken(userCredential.user);
    return { user: userCredential.user, idToken };
  } catch (error) {
    console.error('Firebase login error:', error);
    throw error;
  }
};

// Google Authentication
export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const idToken = await getIdToken(userCredential.user);
    return { user: userCredential.user, idToken };
  } catch (error) {
    console.error('Google sign-in error:', error);
    throw error;
  }
};

// Logout
export const logoutFirebase = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

// Get current user's ID token
export const getCurrentUserIdToken = async () => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error('No user is signed in');
  }
  
  try {
    return await getIdToken(user);
  } catch (error) {
    console.error('Error getting ID token:', error);
    throw error;
  }
};
