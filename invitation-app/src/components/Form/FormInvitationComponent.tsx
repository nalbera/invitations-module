import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import type { Invitations, UserContextType } from "../../types/types";
import createInvitationService from "../../services/createInvitationService.service";

import ModalInvitation from "../Modal/ModalInvitation";


const FormInvitationComponent = () => {
    
    const { token } = useContext(AuthContext) as UserContextType;
    
    const [fullName, setFullName] = useState('');
    const [entryDate, setEntryDate] = useState('');
    const [entryTime, setEntryTime] = useState('');
    const [expirationDate, setExpirationDate] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const [invitation, setInvitaton] = useState<Invitations>();

    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const handleClose = () =>{
        setShow(false);
        navigate('/');
    };

    const handleShow = async () => {        
        setShow(true);
    }

    useEffect(() => {
        if (invitation && invitation?._id) {
            setShow(true);
        }
    }, [invitation]);


    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            
            setLoading(true);
           
            const json = await createInvitationService(fullName, entryDate, entryTime, expirationDate, token);

            setInvitaton(json);
          
                
        } catch (error) {
            if(error instanceof Error) {
                setError(error.message);
            }
        }finally {
            setLoading(false);
            handleShow();
        }
        
    }
    

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h3 className="mb-3">Nueva Invitación</h3>
                        <div className="bg-white shadow rounded">
                            <div className="row">
                                <div className="col-md-7 pe-0">
                                    <div className="form-left h-100 py-5 px-5">
                                        <form onSubmit={handleSubmit} className="row g-4">
                                            <div className="col-12">
                                                <label>Nombre y Apellido<span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text">
                                                        <i className="bi bi-person-circle"></i>
                                                    </div>
                                                    <input type="text" name="fullName" className="form-control" placeholder="Nombre y Apellido" autoComplete="off" onChange={(e) => setFullName(e.target.value)} />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label>Fecha de Ingreso<span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text">
                                                        <i className="bi bi-calendar-check"></i>
                                                    </div>
                                                    <input type="date" name="entryDate" className="form-control"  autoComplete="off" onChange={(e) => setEntryDate(e.target.value)} />
                                                </div>
                                            </div>
                                            
                                            <div className="col-12">
                                                <label>Hora<span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text">
                                                        <i className="bi bi-clock"></i>
                                                    </div>
                                                    <input type="time" name="entryTime" className="form-control"  autoComplete="off" onChange={(e) => setEntryTime(e.target.value)}  />
                                                </div>
                                            </div>
                                            
                                            <div className="col-12">
                                                <label>Fecha Caducidad<span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text">
                                                        <i className="bi bi-calendar-check"></i>
                                                    </div>
                                                    <input type="date" name="expirationDate" className="form-control"  autoComplete="off" onChange={(e) => setExpirationDate(e.target.value)} />
                                                </div>
                                            </div>
                                            { error ? <p className="font-monospace red-500">{ error }</p> : null }
                                            {
                                                !loading ?
                                                    <div className="col-12">
                                                        <button type="submit" className="btn btn-primary px-4 float-end mt-4">Aceptar</button>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalInvitation
                show={show}
                handleClose={handleClose}
                invitationId={invitation?._id ?? ''}
                fullName={invitation?.fullName ?? ''}
                entryDate={invitation?.entryDate ?? undefined}
                entryTime={invitation?.entryTime ?? ''}
                expirationDate={invitation?.expirationDate ?? undefined}
            />
        </div>
  )
}

export default FormInvitationComponent;