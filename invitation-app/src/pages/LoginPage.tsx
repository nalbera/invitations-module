import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import FormLoginComponent from "../components/Form/FormLoginComponent";
import type { UserContextType } from "../types/types";
import InvitationsComponent from "../components/Invitations/InvitationsComponent";

const LoginPage: React.FC = () => {

  const { token } = useContext(AuthContext) as UserContextType;

  return (
    !token ? (
      <FormLoginComponent />
    ) : (
      <InvitationsComponent />
    )
  )
}

export default LoginPage;