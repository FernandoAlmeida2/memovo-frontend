import { LogRegScreen } from "../../assets/styles/LoginSignUpScreen";
import { StyledLink } from "../../assets/styles/StyledLink";
import Form from "../../components/Form/Form";

export default function Signup() {
  return (
    <LogRegScreen>
      <h1>Create account</h1>
      <Form type="Signup" />
      <StyledLink to="/">Sign in</StyledLink>
    </LogRegScreen>
  );
}
