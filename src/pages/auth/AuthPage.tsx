import { AuthForm } from "../../features/auth/AuthForm";
import "./authPageStyles.scss";

export default function AuthPage() {
  return (
    <div className="authPage">
      <AuthForm />
    </div>
  );
}
