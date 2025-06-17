import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import type { ModalSessionExpiredType } from '../../types/types';

const ModalSessionExpired: React.FC<ModalSessionExpiredType> = ({show, handleClose}) => {

    return (
        
         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className='text-dark'>Información del Sistema</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                El tiempo de sesión ah expirado.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Aceptar
                </Button>
            </Modal.Footer>
      </Modal>
    )
}

export default ModalSessionExpired;