import type { PagedType } from "../../types/types"

const Paged: React.FC<PagedType> = ({itemPerPage, invitations, pagination}) => {

    const pageNumbers: number[] = [];
      
    for(let i=1; i <= Math.ceil(invitations.length / itemPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination d-flex justify-content-center align-items-center" id="pagination">
            {
                pageNumbers && pageNumbers?.map((num) => (
                    <li className="page-item" aria-current="page" key={num}>
                        <a className="page-link" role="button"  onClick={() => pagination(num)} >{num}</a>
                    </li>
                ))
            }
        </ul>
    )
}

export default Paged