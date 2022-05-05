import { CLOSE__MODEL, OPEN__MODEL } from "../types/ModelTypes";

const ModelReducer = (state, action) => {
    switch(action.type){
        case OPEN__MODEL: {
          return {
            modelStatus:true, 
            current:action.payload
          }
        }
  
        case CLOSE__MODEL: {
          return {
            modelStatus:false, 
            current:""
          }
        }
        default : 
        return state ; 
      }
}


export default ModelReducer; 