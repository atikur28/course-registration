import PropTypes from 'prop-types';
const Course = ({course, selectCourse}) => {
    const {course_name, image, course_details, price, credit} = course;
    return (
        <div className='bg-[white] p-5 space-y-4 rounded-lg drop-shadow-md'>
            <div className='flex justify-center'>
                <img className='w-full' src={image} alt="" />
            </div>
            <h2 className='text-lg font-bold'>{course_name}</h2>
            <p className='text-[#1C1B1B99] text-sm'>{course_details}</p>
            <div className='text-[#1C1B1B99] text-base flex justify-between'>
                <p>Price: {price} $</p>
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