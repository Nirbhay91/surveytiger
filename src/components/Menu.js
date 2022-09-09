
import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <div className="my-3">
            <Link to="/create">
                <button className="btn btn-danger m-1">Create Survery</button><br/>
            </Link>
            <Link to="/publish">
                <button className="btn btn-danger m-1">Take Survery</button>
            </Link>
            
            
        </div>
    );
};

export default Menu;