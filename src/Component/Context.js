import React,{createContext, useContext, useReducer, useEffect} from 'react';
import Reducer from '../Component/Reducer'; 

const API = "http://hn.algolia.com/api/v1/search?";

const initialState = {
   isLoading : true,
   query: "css",
   nbPages: 0,
   page: 0,
   hits: [],

}
const AppContext = createContext();

function Context({children}) {


  const[state, dispach] = useReducer(Reducer, initialState);
    const fetchApiData = async(url) => {
   
       try {
          const res = await fetch(url);
          const data = await res.json();
          dispach({
            type:"GET_STORIES",
            payload: {
              hits: data.hits,
              nbPages : data.nbPages,
            },
          })
          // isLoading = false;

       }catch(error) {
        console.log(error);
       }
    };

       //to remove the post

       const removePost = (post_ID) => {
        dispach({
          type: "REMOVE_POST",
          payload: post_ID
        });
      }

      //Search 

      const searchPost = (searchQuery) => {
        dispach({
          type: "SEARCH_QUERY",
          payload: searchQuery,
        })
      }


      //Pagination

      const getNextPage = () => {
        dispach({
          type:"NEXT_PAGE"
        })
      }

      const getPrevPage = () => {
        dispach({
          type:"PREV_PAGE"
        })
      }
  
    useEffect(() => {
         fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    },[state.query,state.page]);

 

  return (
    <>
     <AppContext.Provider value={{...state, removePost, searchPost, getNextPage, getPrevPage}}>
         {children}
    </AppContext.Provider> 
 
    </>

    

  )

 

}

const useGlobalContext = () => {
  return (
    useContext(AppContext)
    )
}

export default Context;
export {AppContext, useGlobalContext};


