import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Paged from "../Paged/Paged";
import type { UserContextType } from "../../types/types";
import ModalDetail from "../Modal/ModalDetail";
import ModalDelete from "../Modal/ModalDelete";
import useInvitations from "../../hooks/useInvitations";


const InvitationsComponent = () => {

  const { token } = useContext(AuthContext) as UserContextType;

  const [invitationId, setInvitationId] = useState('');

  const [curretPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(6);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);

  const handleShow = (id: string) => {
    setInvitationId(id);
    setShow(true)
  };
  
  const handleTrash = (id: string) => {
    setInvitationId(id);
    setShowDelete(true);
  }

  const invitations = useInvitations(token);

  const indexLastInvitations = curretPage * itemPerPage;
  const indexFirstInvitations = indexLastInvitations - itemPerPage;
  const actualInvitations = invitations?.slice(indexFirstInvitations, indexLastInvitations);

  const pagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }

  return invitations.length ? (
    <>
        <header className="container">
          <h2>Invitaciones</h2>
        </header>
        <main className="container">
          <div className="text-center">
            <p>{`Pagina ${curretPage}`}</p>
          </div>
          <table className="table" id="table-invitations">
            <thead id="thead-invitations">
              <tr>
                <th>Nombre</th>
                <th>Fecha</th>
                <td colSpan={3}></td>
              </tr>
            </thead>
            <tbody id="tbody-invitations">
              {
                actualInvitations && actualInvitations?.map((row, index) => (
                  <tr key={index}>
                    <td>{row.fullName}</td>
                    <td>{new Date(row.entryDate).toLocaleDateString()}</td>
                    <td>
                      <i className="bi bi bi-eye-fill" onClick={() => handleShow(row._id)} role="button"></i>
                    </td>
                    <td>
                      <i className="bi bi-trash3" onClick={() => handleTrash(row._id)} role="button" ></i>
                    </td>
                  </tr>
                ))
              }
            </tbody>
            <tfoot id="tfoot-invitations">
              <tr>
                <td colSpan={5}>
                  <nav aria-label="...">
                    <Paged itemPerPage={itemPerPage} invitations={invitations} pagination={pagination}/>
                  </nav>
                </td>
              </tr>
            </tfoot>
          </table>
          <div>
            <Link to={'/invitation'}>
              <button type="button" className="btn btn-primary btn-sm">Nueva Invitación</button>
            </Link>
          </div> 
        </main>
        <ModalDetail show={show} handleClose={handleClose} invitationId={invitationId} />
        <ModalDelete show={showDelete} handleClose={handleCloseDelete} invitationId={invitationId} token={token} />
    </>
  ) : (
    <header className="container">
          <h2>Invitaciones</h2>
          <p>No hay entradas para mostrar</p>
          <Link to={'/invitation'}>
              <button type="button" className="btn btn-primary btn-sm">Nueva Invitación</button>
          </Link>
    </header>
  )
}

export default InvitationsComponent