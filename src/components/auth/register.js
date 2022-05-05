


import React, { useContext,useState} from 'react';
import ModelContext from '../../context/ModelContext';

import { OPEN__MODEL } from '../../types/ModelTypes';

const Register = (props) => {

    const {dispatch} = useContext(ModelContext); 
    const [state, setState] = useState({
        surname:"", 
        email:"",
        password:""
    }); 

    const inputHandle = (e) => {
      const { name , value} = e.target; 
       setState({
           ...state,
           [name]:value
       }); 
    }

    const formSubmit =(e) =>  {
        e.preventDefault(); 
        console.log(state); 
    }

    return (
            <form action="" onSubmit={formSubmit}>
                <div className="model__heading">
                    <h3>create a  new account</h3>
                </div>
                <div className="group">
                    <input 
                        type="text" 
                        name="surname" 
                        value={state.surname}
                        onChange={inputHandle}
                        placeholder='Enter your surname'
                        className='group__control'   />
                </div>
                <div className="group">
                    <input 
                        type="email" 
                        name="email" 
                        value={state.email}
                        onChange={inputHandle}
                        placeholder='Enter your email'
                        className='group__control'   />
                </div>
                <div className="group">
                    <input 
                        type="password" 
                        name="password" 
                        value={state.password}
                        onChange={inputHandle}
                        placeholder='Enter your password' 
                        className='group__control' />
                </div>
                <div className="group flex space-between y-center ">
                    <input type="submit" value="Register"   className='btn-black'/>
                    <span onClick={() => dispatch({type:OPEN__MODEL, payload:"loginModel"})}>Already have an account ?</span>
                </div>
            </form>
    )
}



export default Register;