import React from 'react';
import { useGlobalContext } from './Context';

function Paginations() {
  const {page, nbPages, getPrevPage, getNextPage} = useGlobalContext();
  return (
    <>
    <div className="pagination_btn">
     <button onClick={()=>getPrevPage()}>Prev</button>
     <p>{page + 1} of {nbPages}</p>
      <button onClick={() => getNextPage()}>Next</button>

    </div>
    </>
  )
}

export default Paginations;
