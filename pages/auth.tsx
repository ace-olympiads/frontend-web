import AuthForm from "../components/AuthForm";
import BackButton from "../components/BackButton";

const Auth: React.FC = () => {
  return (
    <div>
      <BackButton />

      <h1>Authentication</h1>
      <AuthForm />
    </div>
  );
};

export default Auth;
