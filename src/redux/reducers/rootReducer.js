import { A, B, C } from "../constant/constant";
import initilaState from "../data/initialState";

let rootReducer=(preState = initilaState,action)=>{

    let newState = preState;
      switch(action.type){
        case A:
          newState = {
            ...preState,
            fname:"Shivani"
          }
          break;
        case B:
          newState = {
            ...preState,
            fname:"Shivani2"
          }
          break;
        case C:
          newState = {
            ...preState,
            fname:"Shivani3"
          }
          break;
          default:
            newState = preState;
      }
    return newState ;
    }

    export default rootReducer;