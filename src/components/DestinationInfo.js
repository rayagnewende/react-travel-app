import React from 'react';

const DestinationInfo = ({details}) => {
    return(
        <div className="destinationInfo">
            <div className="container">
                <h2 className="heading">
                    Overview
                </h2>
                <div className="row">
                    <div className="col-8">
                        <div className="destinationInfo__p">{details.details}</div>
                    </div>
                </div>
                <h2>Good to Know</h2>
                <div className="row">
                    <div className="col-8">
                        <div className="destinationInfo__details">
                            <div className="destinationInfo__details__head">
                                 Language
                            </div>
                            <div className="destinationInfo__details__text">
                                 {details.language}
                            </div>
                        </div>
                        
                        <div className="destinationInfo__details">
                            <div className="destinationInfo__details__head">
                                 Currency
                            </div>
                            <div className="destinationInfo__details__text">
                                 {details.currency}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default DestinationInfo;