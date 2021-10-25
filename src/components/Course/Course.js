import React from 'react';

const Course = (props) => {
    const {name,img,students,period,instructor, price} = props.course;
    return (
        <div className="shadow-lg rounded">
            <img src={img} alt="" />
           <div className="p-2">
           <h1 className="text-xl text-center text-blue-600 font-bold">{name}</h1>
           <h2 className="text-center text-gray-500 italic">Instructor : {instructor}</h2>
           <p ><i className="far fa-money-bill-alt"></i> {price}tk</p>
           <hr />
           <div className="bg-gray-100 flex justify-between">
           <p>{students} students</p>
            <p>Duration : {period}</p>
           </div>
           </div>
            </div>
        
    );
};

export default Course;