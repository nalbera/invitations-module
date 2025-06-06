import { useState, useContext } from "react"
import { AuthContext } from "../../context/AuthContext";

import userLoginService from "../../services/userLoginService.service";
import type { UserContextType } from "../../types/types";
import InvitationsComponent from "../Invitations/InvitationsComponent";

const FormLoginComponent: React.FC = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [loading, setLoading] = useState(false);

    const {token, setToken} = useContext(AuthContext) as UserContextType;

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(false);
        setError('');

        try {

            setLoading(true);

            const resp = await userLoginService(userName, password);
            
            setToken(resp);
            setUserName('');
            setPassword('');
            setLoading(false);

        } catch (error) {
            if(error instanceof Error){
                setError(error.message)
                setLoading(false);
            }
        }
    } 
    
    return !token?.length ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h3 className="mb-3">Inicie sesión</h3>
                        <div className="bg-white shadow rounded">
                            <div className="row">
                                <div className="col-md-7 pe-0">
                                    <div className="form-left h-100 py-5 px-5">
                                        <form onSubmit={handleSubmit} className="row g-4">
                                            <div className="col-12">
                                                <label>Usuario<span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                                        </svg>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="Nombre de usuario" value={userName} onChange={(e) => setUserName(e.target.value)} autoComplete="off" />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label>Contraseña<span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                                            <path fillRule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"/>
                                                        </svg>
                                                    </div>
                                                    <input type="password" className="form-control" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off" />
                                                </div>
                                            </div>
                                            { error ? <p className="font-monospace red-500">{ error }</p> : null }
                                            {
                                                !loading ?
                                                    <div className="col-12">
                                                        <button type="submit" className="btn btn-primary px-4 float-end mt-4">Ingresar</button>
                                                    </div>
                                                :
                                                <div className="text-center">
                                                    <div className="spinner-border" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div>
                                                </div>
                                            }
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-5 ps-0 d-none d-md-block">
                                    <div className="form-right h-100 bg-primary text-white text-center d-flex align-items-center justify-content-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" className="bi bi-person-fill-lock" viewBox="0 0 16 16">
                                            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5v-1a2 2 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693Q8.844 9.002 8 9c-5 0-6 3-6 4m7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <InvitationsComponent />
    )
}

export default FormLoginComponent