import React, { useState} from 'react';

const Header = ({heading, paragraphe, children}) => {
    const [video] = useState("/assets/videos/header.mp4"); 
    const [poster] = useState("/assets/images/screen.png"); 
    const [logo] = useState("/assets/images/logo.png"); 
   
    return(
        <div className="header">
            <div className="container pr">
                <div className="header__logo">
                    <img src={logo} alt="Logo" />
                </div>
            </div>
            <div className="header__video">
                <video src={video} autoPlay loop muted poster={poster}></video>
            </div>
            <div className="header__contents">
                <div className="container">
                    <div className="header__contents__text">
                        <div className="header__contents__text__child">
                            <div className="header__contents__text__child__h1">
                                    { heading }
                            </div>
                            <div className="header__contents__text__child__p">
                                { paragraphe}
                            </div>
                            <div className="header__contents__text__child__link">
                                { children }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Header;