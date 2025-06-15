import { useContext } from "react"
import FormInvitationComponent from "../components/Form/FormInvitationComponent"
import { AuthContext } from "../context/AuthContext"
import type { UserContextType } from "../types/types"
import FormLoginComponent from "../components/Form/FormLoginComponent"



const InvitationPage: React.FC = () => {

  const {token} = useContext(AuthContext) as UserContextType;

  return token ? (
    <FormInvitationComponent />
  ) : (
    <FormLoginComponent />
  )
}

export default InvitationPage