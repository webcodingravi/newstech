import React from 'react';

function Reducer(state, action) {
  switch(action.type) {
    case "SET_LOADING" :
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES" :
      return {
         ...state,
         isLoading: false,
         hits : action.payload.hits,
         nbPages: action.payload.nbPages,

      };
      
      case "REMOVE_POST":
        return {
          ...state,
          hits : state.hits.filter((curElem) => curElem.objectID !== action.payload)
         
        };

        case "SEARCH_QUERY":
          return {
            ...state,
            query: action.payload
          }
        
          case "NEXT_PAGE":
            let pageNumInc = state.page + 1;
            if(pageNumInc >= state.nbPages) {
              pageNumInc = 0;
            }
            return {
               ...state,
               page: pageNumInc,
            }

            case "PREV_PAGE":
              let pageNaum = state.page;
              if(pageNaum <= 0) {
                pageNaum = 0;
              }else {
                pageNaum = pageNaum - 1;
              }
              return {
                 ...state,
                 page: pageNaum,
              }
  }


  return state;
  
}

export default Reducer;
