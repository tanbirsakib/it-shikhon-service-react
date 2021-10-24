import { useEffect, useState } from "react";
const useService = () => {
    const [courses, setCourses] = useState([]);
     useEffect(() => {
    fetch('./fakeCourses.json')
    .then(res => res.json())
    .then(data=> setCourses(data));
}, [])
return [courses,setCourses]
}

export default useService;