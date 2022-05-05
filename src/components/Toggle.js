import React, {useContext} from 'react';
import NavContext from '../context/NavContext';
import { NAV__TOGGLE } from '../types/ToggleTypes';

const Toggle = () => {
 const {state, dispatch} = useContext(NavContext); 

    return (
        <div className={state ? "toggle-close" : "toggle-open" } onClick={ () => dispatch({type:NAV__TOGGLE})}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default Toggle;