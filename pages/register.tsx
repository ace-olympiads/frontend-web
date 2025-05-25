import Head from 'next/head';
import Link from 'next/link';
import RegisterForm from '../components/auth/RegisterForm';

const Register = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <Head>
        <title>Register - Ace Olympiads</title>
      </Head>
      
      <h1 className="text-3xl font-bold text-center mb-8">Create an Account</h1>
      <RegisterForm />
      
      <p className="text-center mt-6">
        Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
      </p>
    </div>
  );
};

export default Register;
