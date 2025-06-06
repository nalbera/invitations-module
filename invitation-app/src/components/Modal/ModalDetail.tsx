import { useState, useEffect, useContext } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import type { Invitations, ModalDetailType, UserContextType } from '../../types/types';
import { AuthContext } from '../../context/AuthContext';


const ModalDetail: React.FC<ModalDetailType> = ({show, handleClose, invitationId}) => {

    const [invitation, setInvitation] = useState<Invitations>();
    const [qrCode, setQrCode] = useState<string>('');
    
    const { token } = useContext(AuthContext) as UserContextType;

    useEffect(() => {
        const getInvitation = async (invitationId: string) => {
            try {
                                
                const response = await fetch(`${import.meta.env.VITE_API_URL}/invitation/detail/${invitationId}`, {
                    headers: {
                        authorization: token
                    }
                });
                
                const qrResponse = await fetch(`${import.meta.env.VITE_API_URL}/invitation/qr-invitation/${invitationId}`, {
                    headers: {
                        authorization: token
                    }
                });

                const qr = await qrResponse.json();

                setQrCode(qr.qr);

                const json = await response.json();
    
                if(!response.ok) throw new Error(json.message);

                setInvitation(json.data);
                
            } catch (error) {
                console.log(error);
            }
        }

        getInvitation(invitationId);

    },[invitationId, token]);
    
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className='text-dark'>Detalle Invitación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    invitation && invitation._id.length ? (
                        <div className='d-flex justify-content-between'>
                            <article className='d-flex align-items-center'>
                                <div>
                                    <i className='bi bi-person-fill'></i> {invitation.fullName} <br/>
                                    <i className='bi bi-calendar3'></i> {new Date(invitation.entryDate).toLocaleDateString()} <br/>
                                    <i className='bi bi-clock'></i> {invitation.entryTime}<br/>
                                    <i className='bi bi-calendar2-x'></i> {new Date(invitation.expirationDate).toLocaleDateString()}
                                </div>
                            </article>
                            <article>
                                <img src={qrCode} alt="qr" />
                            </article>
                        </div>
                    ) : null
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
      </Modal>
    )
}

export default ModalDetail