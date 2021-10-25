import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1 className="text-center text-blue-800 font-bold text-3xl mt-4">About It Shikhon</h1>
            <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 mx-auto">
  <div className="flex justify-center md:justify-end -mt-16">
    <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" alt="" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
  </div>
  <div>
    <h2 className="text-gray-800 text-3xl font-semibold">CEO & Founder, <small>IT Shikhon</small></h2>
    <p className="mt-2 text-gray-600">At IT Shikhon ,we try to provide valuable resources at reasonable price</p>
  </div>
  <div className="flex justify-end mt-4">
      <Link className="text-xl font-medium text-indigo-500" to="/home">Tanbir Sakib</Link>
    {/* <a href="/teach" className="text-xl font-medium text-indigo-500">John Doe</a> */}
  </div>
</div>
        </div>
    );
};

export default About;