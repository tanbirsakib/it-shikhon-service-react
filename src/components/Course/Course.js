import React from 'react';

const Course = (props) => {
    const {name,img,students,period} = props.course;
    return (
        <div className="border-2 border-gray-200 rounded">
            <img src={img} alt="" />
           <div className="p-2">
           <h1 >{name}</h1>
            <p>{students} students</p>
            <p>Duration : {period}</p>
           </div>
            </div>
        
    );
};

export default Course;