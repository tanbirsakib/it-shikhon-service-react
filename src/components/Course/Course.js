import React from "react";

const Course = (props) => {
    // destructuring props values
  const { name, img, students, period, instructor, price } = props.course;
  return (
    <div className="shadow-lg rounded">
      <img src={img} alt="" />
      <div className="p-2">
        <h1 className="text-xl text-center text-blue-600 font-bold">{name}</h1>
        <h2 className="text-center text-gray-500 italic">
          Instructor : {instructor}
        </h2>
        <p className="text-red-500">
          <i className="far fa-money-bill-alt"></i> {price}tk
        </p>
        <div className="mx-auto w-64 m-4">
        <button className="p-2 bg-blue-400 rounded text-white text-4 m-1 font-bold w-64 mx-auto hover:bg-white border-blue-400 hover:text-blue-400 hover:border-blue-500 border-2">
          Enroll Course
        </button>
      </div>
        <div className="bg-gray-100 flex justify-between text-blue-600">
          <p>
            {students} students <i className="fas fa-user-graduate"></i>
          </p>
          <p>Duration : {period}</p>
        </div>
      </div>
     
    </div>
  );
};

export default Course;
