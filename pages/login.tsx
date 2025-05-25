import Head from 'next/head';
import Link from 'next/link';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <Head>
        <title>Login - Ace Olympiads</title>
      </Head>
      
      <h1 className="text-3xl font-bold text-center mb-8">Login to Your Account</h1>
      <LoginForm />
      
      <p className="text-center mt-6">
        Don&apos;t have an account? <Link href="/register" className="text-blue-600 hover:underline">Register</Link>
      </p>
    </div>
  );
};

export default Login;
