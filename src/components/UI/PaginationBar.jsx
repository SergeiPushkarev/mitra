import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination'
import { usePagination } from '../../hooks/usePagination'

const PaginationBar = ({activePage, totalPages,setActivePage}) => {
  const [showedPage, setShowedPage] = useState(activePage)
  const showedActivePage = (page) => {
    setShowedPage(page)
    setActivePage(page)
  }

  const pagesAr = usePagination(showedPage,totalPages)
  return (
    <Pagination className='align-self-center' >
      {
        pagesAr.map(pageNumber => 
          {if(pageNumber === "PREV") return (<Pagination.Prev key={pageNumber} disabled={showedPage===1} onClick={()=>setShowedPage(showedPage-1)}/>);
          if(pageNumber === "ELLIPSISLEFT") return (<Pagination.Ellipsis key={pageNumber} onClick={()=>setShowedPage(showedPage-3)}/>);
          if(pageNumber === "ELLIPSISRIGHT") return (<Pagination.Ellipsis key={pageNumber} onClick={()=>setShowedPage(showedPage+3)}/>);
          if(pageNumber === "NEXT") return (<Pagination.Next key={pageNumber} disabled={showedPage>=totalPages-3} onClick={()=>setShowedPage(showedPage+1)}/>)
          return <Pagination.Item key={pageNumber} active={pageNumber===activePage} onClick={()=>showedActivePage(pageNumber)}>{pageNumber}</Pagination.Item>})
      }
    </Pagination>
  )
}

export default PaginationBar