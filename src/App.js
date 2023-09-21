import React from 'react';
import Search from './Component/Search';  
import Paginations from './Component/Paginations'; 
import Stores from './Component/Stores'; 
import './App.css';



function App() {
  
  return (
    <>
    <div className="main-div">
       <Search />
       <Paginations/>
       <Stores/>


    </div>
     
    </>
  )
}

export default App;
