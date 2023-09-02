import AuthForm from "../components/AuthForm";
import BackButton from "../components/BackButton";

const Auth: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "90vh",
        justifyContent: "center",
      }}
    >
      <AuthForm />
    </div>
  );
};

export default Auth;
