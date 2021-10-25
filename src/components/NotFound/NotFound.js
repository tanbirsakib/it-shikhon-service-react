import React from 'react';
import img from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <h1 className="text-center text-2xl font-bold text-red-600 p-2">404 .The page you are searcing is not found</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;