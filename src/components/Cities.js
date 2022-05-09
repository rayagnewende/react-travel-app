import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Cities = ({cities, name}) => {
    return(
        <div className="cities">
            <div className="container">
                   <div className="cities__container">
                       <h2 className="heading">
                           Cities in {name}
                       </h2>
                       <div className="row mr-minus-15 ml-minus-15 ">
                            { cities.length > 0 ? cities.map( city => (
                                <div className="col-3 p-15">
                                    <div className="cities__body">
                                        <div className="cities__body__image">
                                            <LazyLoadImage src={city.image} alt={city.image}/>
                                        </div>
                                    </div>
                                </div>
                            )): <div></div>
                           }
                       </div>
                   </div>
            </div>
        </div>
    );
}


export default Cities;