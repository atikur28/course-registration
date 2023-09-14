import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({selectCourse}) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./course.json')
          .then( res => res.json() )
          .then( data => setCourses(data) );
    }, [])
    return (
        <div className="w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                courses.map( (course, idx) => <Course key={idx} course={course} selectCourse={selectCourse} ></Course> )
            }
        </div>
    );
};

Courses.propTypes = {
    selectCourse: PropTypes.func,
}


export default Courses;