import React from 'react';
import { LocationMarkerIcon } from "@heroicons/react/solid";

const Footer = () => {
    return (
        <div className="bg-blue-600 p-2 mt-4">
            <img src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt="" />
            <p className="text-2xl text-white"><LocationMarkerIcon className="h-6 inline"></LocationMarkerIcon>Chawkbazar, Chittagong</p>
            <div>
                
            </div>

            <footer className="text-center text-white">&copy; All rights reserved by IT Shikhon</footer>
        </div>
    );
};

export default Footer;