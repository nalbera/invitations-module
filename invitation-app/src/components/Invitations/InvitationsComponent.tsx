import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import type { Invitations, UserContextType } from "../../types/types";

const InvitationsComponent = () => {

  const { token } = useContext(AuthContext) as UserContextType;

  const [invitations, setInvitations] = useState<Invitations[]>([]);

  const [curretPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(6);
  const [totalPage, setTotalPage] = useState(0);

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
                    <td><i className="bi bi-qr-code-scan"></i></td>
                    <td><i className="bi bi bi-eye-fill"></i></td>
                    <td><i className="bi bi-trash3"></i></td>
                  </tr>
                ))
              }
            </tbody>
            <tfoot id="tfoot-invitations">
              <tr>
                <td colSpan={5}>
                  <nav aria-label="...">
                    <ul className="pagination" id="pagination">
                      <li className="page-item">
                        <a className="page-link disabled" href="#" tabIndex="-1" aria-disabled="true" role="button" id="previusButton">Anterior</a>
                      </li>
                      {/* <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item active" aria-current="page">
                        <a className="page-link" href="#">2</a>
                      </li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li> */}
                      {
                        pageNumbers && pageNumbers?.map((num) => (
                           <li className="page-item active" aria-current="page" key={num}>
                              <a className="page-link"  onClick={() => pagination(num)}>{num}</a>
                           </li>
                        ))
                      }
                      <li className="page-item">
                        <a className="page-link" role="button" id="nextButton">Siguiente</a>
                      </li>
                    </ul>
                  </nav>
                </td>
              </tr>
            </tfoot>
          </table>   
        </main>
    </>
  ) : (
    <header className="container">
          <h2>Invitaciones</h2>
          <p>No hay entradas para mostrar</p>
    </header>
  )
}

export default InvitationsComponent