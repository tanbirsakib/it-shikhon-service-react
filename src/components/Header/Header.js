import React from 'react';
import { AcademicCapIcon} from '@heroicons/react/solid'
import { Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-between p-6 bg-gradient-to-r from-blue-300 via-blue-600 to-blue-800">
        <div className ="flex">
        <AcademicCapIcon className="h-12 text-2xl font-bold text-white"></AcademicCapIcon>
        <h2 className="text-2xl font-bold text-white">IT Shikhon</h2>
        </div>
        <div >
            <Link className="m-2 text-2xl font-bold text-white" to="/home">Home</Link>
            <Link className="m-2 text-2xl font-bold text-white" to ="/services">Services</Link>
            <Link className="m-2 text-2xl font-bold text-white" to ="/about">About</Link>
            <Link className="m-2 text-2xl font-bold text-white" to ="/developer">Developer</Link>
        </div>
        </div>
    );
};

export default Header;