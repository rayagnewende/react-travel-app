import React, {useContext, useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Cities from '../components/Cities';
import DestinationInfo from '../components/DestinationInfo';
import Header from '../components/Header';
import DestinationsContext from '../context/DestinationsContext';
import { CITY, DETAILS } from '../types/DestinationsTypes';

 
const Details = () => {
    const {destinationsData, dispatch} = useContext(DestinationsContext); 
    const {id} = useParams(); 
    const { details} = destinationsData; 
    const {filteredCities} = destinationsData; 

    useEffect( () => {
   
        dispatch({type:DETAILS,payload:id}); 
        dispatch({type:CITY,payload:id}); 
    }, [id]); 

    return (
       <>
            <Helmet>
                <title>la page Détail</title>
           </Helmet>
            <Header heading={details.name} image={details.bigImage}/>
            <DestinationInfo  details={details}/>
            <Cities cities={filteredCities} name={details.name} />
       </>
    );
}



export default Details;