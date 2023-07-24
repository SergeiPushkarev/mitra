import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import { usePagination } from '../../hooks/usePagination'

const PaginationBar = ({activePage, totalPages, setActivePage}) => {
  let showedActivePage = activePage
  const pagesAr = usePagination(showedActivePage,totalPages)
  return (
    <Pagination>
      {
        pagesAr.map(pageNumber => 
          {if(pageNumber === "PREV") return (<Pagination.Prev key={pageNumber} disabled={showedActivePage===1}/>);
          if(pageNumber === "ELLIPSISLEFT" || pageNumber === "ELLIPSISRIGHT") return (<Pagination.Ellipsis key={pageNumber}/>);
          if(pageNumber === "NEXT") return (<Pagination.Next key={pageNumber} disabled={showedActivePage===totalPages}/>)
          return <Pagination.Item key={pageNumber} active={pageNumber===activePage}>{pageNumber}</Pagination.Item>})
      }
    </Pagination>
  )
}

export default PaginationBar