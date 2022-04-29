import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = (props) => {

    return (
        <div className="scroll-bottom">
            {props.left && 
            <NavLink to={props.left} className="left hover">
                <span>&#10092;</span>
            </NavLink>
            }
            {props.rigth && 
            <NavLink to={props.rigth} className="right hover">
                <span>&#10093;</span>
            </NavLink>
            }
        </div>
    );
};

export default Button;