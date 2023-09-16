import PropTypes from 'prop-types';
const CourseInfo = ({cart, remainingHour, totalHour}) => {
    return (
        <div className="w-fit lg:w-1/4 bg-white h-fit p-5 rounded-lg ml-9 md:ml-60 lg:-ml-1">
            <h2 className='text-xl font-semibold text-[#2F80ED] border-b-2 pb-3'>Credit Hour Remaining: {remainingHour} hr</h2>
            <h2 className='text-xl font-bold my-4'>Course Name</h2>
            {
                cart.map( (item, idx) => (
                    <p className='mb-1' key={item.id}>{++idx}. {item.course_name}</p>
                ) )
            }
            <h2 className="text-lg font-medium text-[#1C1B1BCC] border-t-2 pt-3">Total Credit Hour : {totalHour}</h2>
        </div>
    );
};

CourseInfo.propTypes = {
    cart: PropTypes.array,
    remainingHour: PropTypes.number,
    totalHour: PropTypes.number
}

export default CourseInfo;