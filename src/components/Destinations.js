import React, { useContext, useState} from 'react';
import DestinationsContext from '../context/DestinationsContext';

const Destinations = () => {
    const {destinationsData, dispatch} = useContext(DestinationsContext); 
  
    const [state] = useState({
        heading:"Découvrez les plus grands et magnifiques pays à vister à travers notre compagnie de transpert internationel.", 
        paragraphe:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, vel rem expedita atque quae veniam alias earum  optio itaque natus dolor voluptates facilis enim placeatveritatis excepturi molestiae officiis. Exercitationem.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, vel rem expedita atque quae veniam alias earum  optio itaque natus dolor voluptates facilis enim placeatveritatis excepturi molestiae officiis. Exercitationem."
    })
    return(
        <div className="destinations">
            <div className="container">             
                <div className="row">
                    <div className="col-6 p-15">
                        <h3 className='destinations__heading'>{state.heading}</h3>
                    </div>
                    <div className="col-6 p-15">
                        <p className='destinations__paragraphe'> 
                           {state.paragraphe}
                        </p>
                    </div>
                </div>
               
            </div>
        </div>
    );
}


export default Destinations;