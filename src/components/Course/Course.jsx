import PropTypes from 'prop-types';
import { FiDollarSign } from 'react-icons/fi';
import { LuBookOpen } from 'react-icons/lu';

const Course = ({course, selectCourse}) => {
    const {course_name, image, course_details, price, credit} = course;
    return (
        <div className='bg-[white] w-96 p-5 space-y-4 rounded-lg drop-shadow-md'>
            <div className='flex justify-center'>
                <img className='w-full' src={image} alt="" />
            </div>
            <h2 className='text-lg font-bold'>{course_name}</h2>
            <p className='text-[#1C1B1B99] text-sm'>{course_details}</p>
            <div className='text-[#1C1B1B99] text-base flex justify-between'>
                <button className='text-2xl'><FiDollarSign></FiDollarSign></button>
                <p className='mr-10'>Price: {price} $</p>
                <button className='text-2xl ml-9'><LuBookOpen></LuBookOpen></button>
                <p>Credit: {credit}hr</p>
            </div>
            <div className='flex justify-center drop-shadow-md'>
                <button onClick={ () => selectCourse(course) } className='bg-[#2F80ED] text-white px-16 py-2 rounded-xl text-lg'>Select</button>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    selectCourse: PropTypes.func,
}

export default Course;