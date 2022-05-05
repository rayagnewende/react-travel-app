import React, { useContext,useState} from 'react';
import { OPEN__MODEL } from '../../types/ModelTypes';
import ModelContext from "../../context/ModelContext"; 

const Login = (props) => {

    const {dispatch} = useContext(ModelContext); 
    const [state, setState] = useState({
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
                    <h3>Login</h3>
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
                    <input type="submit" value="Login"   className='btn-black'/>
                    <span onClick={() => dispatch({type:OPEN__MODEL,payload:"registerModel"})}>Create a new account</span>
                </div>
        </form>
    )
}

export default Login;