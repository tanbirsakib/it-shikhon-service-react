import React from "react";
import img from "../../images/homeside.png";
import { SearchIcon } from "@heroicons/react/solid";
import Course from "../Course/Course";
import useService from "../../hooks/useService";
const Home = () => {
  const [courses] = useService();
  const threeCourses = courses.slice(0, 4);

  return (
    <div className="home-container">
      <div className="w-3/6 mx-auto mt-4">
        <input
          className="border-2 w-2/3 rounded p-2"
          placeholder="Search Your Favourite course"
          type="text"
        />
        <button className="border-2 rounded p-2 ml-4 hover:bg-blue-500 hover:text-white">
          <SearchIcon className="w-6 inline"></SearchIcon> Search
        </button>
      </div>
      <div className="mt-2 flex justify-evenly items-center ">
        <h1 className="text-4xl text-blue-500 ml-6 font-bold">
          We Povide Quality Lessons, <br />
          <span className="text-3xl text-blue-400 ml-6 font-bold">
            Enrolled 1200+ students last month..
          </span>
        </h1>
        <img className="w-64" src={img} alt="" />
      </div>
      <h1 className="text-center text-4xl text-red-400 ml-6 font-bold m-2 italic">
        Featured Courses
      </h1>
      <div className="courses grid grid-cols-3 gap-4 w-11/12 mx-auto">
        {threeCourses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Home;
