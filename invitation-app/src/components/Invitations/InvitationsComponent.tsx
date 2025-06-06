import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import type { Invitations, UserContextType } from "../../types/types";
import ModalDetail from "../Modal/ModalDetail";

const InvitationsComponent = () => {

  const { token } = useContext(AuthContext) as UserContextType;

  const [invitations, setInvitations] = useState<Invitations[]>([]);
  const [invitationId, setInvitationId] = useState('');

  const [curretPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(6);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  
  const handleShow = (id: string) => {
    console.log(invitationId);
    
    setInvitationId(id);
    setShow(true)
  };

  useEffect(() => {
    const getAllInvitations = async () => {

      const response = await fetch(`${import.meta.env.VITE_API_URL}/invitation`, {
        headers :{
          authorization: token
        }
      });

      const json = await response.json();

      if (!response.ok) throw new Error(json.message);

      setInvitations(json.data)
    }

    getAllInvitations();
  }, [token]);
  
  const indexLastInvitations = curretPage * itemPerPage;
  const indexFirstInvitations = indexLastInvitations - itemPerPage;
  const actualInvitations = invitations?.slice(indexFirstInvitations, indexLastInvitations);

  const pagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }

  const pageNumbers: number[] = [];
  for(let i=1; i <= Math.ceil(invitations.length / itemPerPage); i++){
    pageNumbers.push(i);
  }
  
  return invitations.length ? (
    <>
        <header className="container">
          <h2>Invitaciones</h2>
        </header>
        <main className="container">
          <div className="text-center">
            <p>{`Pagina ${curretPage} de ${pageNumbers.length}`}</p>
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
                      <i className="bi bi-trash3"></i>
                    </td>
                  </tr>
                ))
              }
            </tbody>
            <tfoot id="tfoot-invitations">
              <tr>
                <td colSpan={5}>
                  <nav aria-label="...">
                    <ul className="pagination d-flex justify-content-center align-items-center" id="pagination">
                          {
                            pageNumbers && pageNumbers?.map((num) => (
                              <li className="page-item" aria-current="page" key={num}>
                                  <a className="page-link" role="button"  onClick={() => pagination(num)} >{num}</a>
                              </li>
                            ))
                          }
                    </ul>
                  </nav>
                </td>
              </tr>
            </tfoot>
          </table>   
        </main>
        <ModalDetail show={show} handleClose={handleClose} invitationId={invitationId} />
    </>
  ) : (
    <header className="container">
          <h2>Invitaciones</h2>
          <p>No hay entradas para mostrar</p>
    </header>
  )
}

export default InvitationsComponent