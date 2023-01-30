import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import '../styles/Pages.scss';
interface PageProps {
  totalPages: number,
  currentPage: number, 
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
}

const Pages = ({totalPages, currentPage, setCurrentPage}: PageProps) => {

  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);

  const onPageClick = (e:any) => {
    e.preventDefault()
    const pageNumber = parseInt(e.target.innerText)
    setCurrentPage(pageNumber)
  }

  return (
    <Pagination>
      <PaginationItem className={'paginationChangePage'}>
        <PaginationLink
          className={'previous'}
          onClick={() => {currentPage === 1 ? setCurrentPage(1) : setCurrentPage(currentPage - 1)}}
          previous/>
      </PaginationItem>
      {pageNumbers.map((number, index) => (
        <PaginationItem
          key={index}
          className={'paginationItemStyle'}
          active={currentPage === (number)}>
          <PaginationLink onClick={onPageClick} className={'paginationLinkStyle'}>
            {number}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem className={'paginationChangePage'}>
        <PaginationLink
          className={'next'}
          onClick={() => {currentPage === totalPages ? setCurrentPage(totalPages) : setCurrentPage(currentPage + 1)}}
          next/>
      </PaginationItem>
    </Pagination> 
  )

}

export default Pages