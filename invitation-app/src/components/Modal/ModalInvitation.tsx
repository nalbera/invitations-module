import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import type { InvitationModal } from '../../types/types';
import useQrCode from '../../hooks/useQrCode';



const ModalInvitation: React.FC<InvitationModal> = ({invitationId, fullName, entryDate, entryTime, expirationDate, show, handleClose}) => {


    const qrCode = useQrCode(invitationId ?? '');
    
  return (

    <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className='text-dark'>Detalle Invitación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex justify-content-between'>
                    <article className='d-flex align-items-center'>
                        <div>
                            <i className='bi bi-person-fill'></i> {fullName} <br/>
                            <i className='bi bi-calendar3'></i> {entryDate ? new Date(entryDate).toLocaleDateString() : ''} <br/>
                            <i className='bi bi-clock'></i> {entryTime}<br/>
                            <i className='bi bi-calendar2-x'></i> {expirationDate ? new Date(expirationDate).toLocaleDateString() : ''}
                        </div>
                    </article>
                    <article>
                        <img src={qrCode} alt="qr" />
                    </article>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
      </Modal>
  )
}



export default ModalInvitation