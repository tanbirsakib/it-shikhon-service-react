import React from "react";
import useService from "../../hooks/useService";
import Course from "../Course/Course";
import serviceImg from "../../images/service.png";

const Services = () => {
  //getting data from custom hook
  const [courses] = useService();
  return (
    <div>
      <div className="m-4 flex items-center justify-around">
        <h1 className="text-4xl font-bold ml-2 text-red-500">
          We Provide <br /> Quality Courses.
        </h1>
        <img className="w-2/3 h-2/5" src={serviceImg} alt="" />
      </div>
      <h1 className="text-center text-3xl font-bold text-red-400 p-2 italic">
        All availabale Courses
      </h1>
      <div className="courses grid grid-cols-3 gap-4 w-11/12 mx-auto">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Services;
