import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import type { ModalDetailType } from '../../types/types';

import useInvitation from '../../hooks/useInvitation';
import useQrCode from '../../hooks/useQrCode';


const ModalDetail: React.FC<ModalDetailType> = ({show, handleClose, invitationId}) => {

    const invitation = useInvitation(invitationId);
    const qrCode = useQrCode(invitationId);
    
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