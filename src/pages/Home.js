import React, { useState} from 'react';
import Header from '../components/Header';


const Home = () => {
    const [heading, setHeading]= useState("We are travellling togheter!"); 
    const [paragraphe, setParagraphe]= useState("We are travellling togheter last time.lrome lorem lorem lorem lorme"); 
    
    return(
        <div className="home">
            <Header heading={heading} paragraphe={paragraphe} >
                <button className='btn-default'>get Started </button>
            </Header>
        </div>
    )
}
export default Home;