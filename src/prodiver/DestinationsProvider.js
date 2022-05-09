import React, {useReducer} from 'react';
import DestinationsContext from '../context/DestinationsContext';
import DestinationsReducer from '../reducers/DestinationsReducer';
import {destinations} from "../data/destinations"; 
import { Cities } from "../data/cities"; 

const DestinationsProvider = ({children}) => {
    const [destinationsData, dispatch] = useReducer(DestinationsReducer, {
        destinations, 
        details:{}, 
        cities:Cities, 
        filteredCities:[]
    })
    return (
        <DestinationsContext.Provider value={{destinationsData, dispatch}}>
            { children}
        </DestinationsContext.Provider>
    );
}



export default DestinationsProvider;