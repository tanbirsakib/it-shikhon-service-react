import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";

const Footer = () => {
  return (
    <div className="bg-blue-600 p-2 mt-4">
      <div className="flex justify-around items-center">
        <div className="flex">
          <i className="fas fa-laptop-house h-12 text-2xl font-bold text-white mr-1"></i>
          <h2 className="text-2xl font-bold text-white">IT Shikhon</h2>
        </div>
        <div>
          <img
            src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png"
            alt=""
          />
          <p className="text-2xl text-white">
            <LocationMarkerIcon className="h-6 inline"></LocationMarkerIcon>
            Chawkbazar, Chittagong
          </p>
        </div>
        <div className="flex flex-col text-6xl text-white cursor-pointer">
          <i className="fab fa-facebook "></i>
          <i className="fab fa-instagram m-2"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
      <footer className="text-center text-white">
        &copy; All rights reserved by IT Shikhon
      </footer>
    </div>
  );
};

export default Footer;
