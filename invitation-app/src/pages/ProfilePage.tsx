import ProfileComponent from "../components/Profile/ProfileComponent";
import FormLoginComponent from "../components/Form/FormLoginComponent";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import type { UserContextType } from "../types/types";

const ProfilePage: React.FC = () => {

  const { token } = useContext(AuthContext) as UserContextType;

  return token ? (
    <ProfileComponent />
  ) : (
    <FormLoginComponent />
  )
}

export default ProfilePage;