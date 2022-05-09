import { CITY, DETAILS } from "../types/DestinationsTypes";

const DestinationsReducer = (state, action) => {
    const { type, payload} = action; 
    if(type === DETAILS)
    {
       const destination = state.destinations.find( des => des.id === parseInt(payload)); 
       return {
           ...state, 
           details:destination
       }
    }else if(type === CITY){
        const filteredCities = state.cities.filter(city => parseInt(city.destinationId) === parseInt(payload)); 
        return {
            ...state, 
            filteredCities:filteredCities
        }

    }else {
        return state;
    }
    
}


export default DestinationsReducer;