import { NAV__TOGGLE } from "../types/ToggleTypes";


const NavReducer = (state, action) => {
    console.log("test reducer");
    if(action.type === NAV__TOGGLE)
    {
        return !state;  
    }else{
        return  state ; 
    }
}


export default NavReducer; 