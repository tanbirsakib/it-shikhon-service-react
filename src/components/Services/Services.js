import React from 'react';
import useService from "../../hooks/useService";
import Course from "../Course/Course";

const Services = () => {
    const [courses] = useService();
    return (
        <div className="courses grid grid-cols-3 gap-4 w-11/12 mx-auto">
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
        </div>
    );
};

export default Services;