import { useContext } from "react";
import userAvatar from "../../assets/user-avatar.webp";
import { AuthContext } from "../../context/AuthContext";
import type { UserContextType } from "../../types/types";

const ProfileComponent: React.FC = () => {
  
  const {userLogged} = useContext(AuthContext) as UserContextType;

  const {firstName, lastName, email} = userLogged;

  return (
    <div className="d-flex justify-content-center  vh-100">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-7">
            <div className="card">
              <div className="d-flex flex-column align-items-center">
                <img
                  className="rounded img-fluid"
                  src={userAvatar}
                  alt="user-avatar"
                  width={"150px"}
                  height={"150px"}
                />
                <p>Loguedo como</p>
              </div>
              <div className="card-body">
                <i className="bi bi-person" /> {firstName} {lastName}
                <br /><br />
                <i className="bi bi-envelope-at" /> {email}
                <br />
              </div>
            </div>
          </div>
          <div className="col-md-8">
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
