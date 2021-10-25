import React from 'react';
import useService from "../../hooks/useService";
import Course from "../Course/Course";

const Services = () => {
    const [courses] = useService();
    return (
      <div>
          <h1 className="text-center text-3xl font-bold text-red-400 p-2 italic">All availabale Courses</h1>
            <div className="courses grid grid-cols-3 gap-4 w-11/12 mx-auto">
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
        </div>
      </div>
    );
};

export default Services;