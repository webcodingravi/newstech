import React from 'react';
import { useGlobalContext } from './Context';


function Search() {
  const {query, searchPost} = useGlobalContext();
  return (
   
    <>
      <h1>Tech News On The Go</h1>
      
        <div className="search">
        <from onSubmit={(e)=> e.preventDefault()}>
        <input type="text" placeholder="Search Here.." value={query} onChange={(e) => searchPost(e.target.value)} />
        </from>
        </div>
      
    </>
  )
}

export default Search;
