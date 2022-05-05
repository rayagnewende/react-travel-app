import React, { useState, useContext} from 'react';
import Login from '../components/auth/Login';
import Register from '../components/auth/register';
import Header from '../components/Header';
import Model from '../components/Model';
import ModelContext from '../context/ModelContext';
import { OPEN__MODEL } from '../types/ModelTypes';
import { Helmet } from 'react-helmet-async';
import Destinations from '../components/Destinations';

const Home = () => {
    const {dispatch } = useContext(ModelContext); 
    const [heading]= useState("Nous voyagons ensemnble!"); 
    const [paragraphe]= useState("Nous voyagerons ensemble dans la sérénite, dans le calme, et nous comptons en profiter"); 
    const [registerModel] = useState("registerModel"); 
    const [loginModel] = useState("loginModel"); 

    return(
        <div className="home">
            <Helmet>
                <title>Application de voyage</title>
                <meta  description="il s'agit de voyager en choisissant les pays les plus beau"/>
            </Helmet>
            <Header heading={heading} paragraphe={paragraphe} >
                <button className='btn-default' onClick={() => dispatch({type:OPEN__MODEL,payload:registerModel})}>Commencez ici </button>
            </Header>
            <Model current={registerModel}>
                <Register />
            </Model>
            <Model current={loginModel}>
                <Login />
            </Model>
            <Destinations />
        </div>
    )
}
export default Home;