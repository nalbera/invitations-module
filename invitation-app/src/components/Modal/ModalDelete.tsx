import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import type { ModalDetailType } from '../../types/types';
import deleteInvitationService from '../../services/deleteInvitationService.service';
import { Spinner } from 'react-bootstrap';

const ModalDelete: React.FC<ModalDetailType> = ({show, handleClose, invitationId, token}) => {
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleDelete = async () => {
        try {

            setLoading(true);
            await deleteInvitationService(invitationId, token ?? '');
            setLoading(false);
            handleClose();
            window.location.reload();
        } catch (error) {
            if(error instanceof Error) {
                setError(error.message);
            }
        }
    }
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className='text-dark'>Eliminar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    !error ? (
                        <>
                            <p>Se va a elemiminar una invitación</p>
                            <p><strong>¿Está seguro?</strong></p>
                        </>
                    ) : (
                        <p>{ error }</p>
                    )
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                {
                    !loading ? 
                        <Button variant="primary" onClick={() => handleDelete()}>
                            Eliminar
                        </Button>
                    :
                    <Button variant="primary" disabled>
                        <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        />
                        Eliminando...
                    </Button>
                }
            </Modal.Footer>
      </Modal>
    )
}

export default ModalDelete;