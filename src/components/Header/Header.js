import React from 'react';
import { Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-between p-6 bg-gradient-to-r from-blue-300 via-blue-600 to-blue-800">
        <div className ="flex">
        <i className="fas fa-laptop-house h-12 text-2xl font-bold text-white mr-1"></i>
        <h2 className="text-2xl font-bold text-white">IT Shikhon</h2>
        </div>
        <div className="text-2xl font-bold text-white ">
            <Link className="m-2" to="/home">Home</Link>
            <Link className="m-2" to ="/services">Services</Link>
            <Link className="m-2" to ="/about">About</Link>
            <Link className="m-2" to ="/teach">Teach</Link>
        </div>
        </div>
    );
};

export default Header;