import PropTypes from 'prop-types';
const CourseInfo = ({cart}) => {
    // console.log(cart);
    return (
        <div className="w-1/4 bg-white h-fit p-5 rounded-lg">
            <h2 className='text-xl font-semibold text-[#2F80ED] border-b-2 pb-3'>Credit Hour Remaining: {} hr</h2>
            <h2 className='text-xl font-bold my-4'>Course Name</h2>
            {
                cart.map( item => (
                    <li className='mb-1' key={item.id}>{item.course_name}</li>
                ) )
            }
            <h2 className="text-lg font-medium text-[#1C1B1BCC] border-t-2 pt-3">Total Credit Hour : {}</h2>
        </div>
    );
};

CourseInfo.propTypes = {
    cart: PropTypes.array,
}

export default CourseInfo;