import {useContext} from 'react';
import ModelContext from '../context/ModelContext';
import { CLOSE__MODEL } from '../types/ModelTypes';

const Model = ({children, current}) => {
    const { state, dispatch } = useContext(ModelContext); 

    const close = (e) => {
        if(e.target.getAttribute("class") === "model")
        {
           dispatch({type:CLOSE__MODEL}); 
        }
    }
    return  state.modelStatus && state.current === current ? (
        <div className="model" onClick={close}>
            <div className="model__body">
                {children}
            </div> 
        </div>
    ): ( "")
}


export default Model;