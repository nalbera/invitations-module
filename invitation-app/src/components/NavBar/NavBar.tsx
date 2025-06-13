import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import type { UserContextType } from "../../types/types";


const NavBar: React.FC = () => {

  const { logout, token } = useContext(AuthContext) as UserContextType;

  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-md">
        <div className="container-fluid">
            <Link to={'/'} className="navbar-brand">
              <i className="bi bi-buildings" style={{ width: "40px", height: "40px" }}></i>
              <span className="text-warning">Invitations</span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            {
              token ? (
                    <div className="collapse navbar-collapse " id="menu">
                      <ul className="navbar-nav me-auto">
                        <li className="nav-item"><a href="#" className="nav-link active">Perfil</a></li>
                        <li className="nav-item"><a className="nav-link active" role="button" onClick={() => logout()}>Salir</a></li>
                      </ul>
                    </div>
              ) : null
            }
        </div>
    </nav>
  )
}

export default NavBar