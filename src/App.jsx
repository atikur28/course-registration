import { useState } from 'react'
import './App.css'
import CourseInfo from './components/CourseInfo/CourseInfo'
import Courses from './components/Courses/Courses'
import Swal from 'sweetalert2'

function App() {
  const [cart, setCart] = useState([]);
  const [remainingHour, setRemainingHour] = useState(20);
  const [totalHour, setTotalHour] = useState(0);

  const selectCourse = course => {
    const isExist = cart.find( item => item.id == course.id );
    let hour = course.credit;
    if(isExist){
      return Swal.fire('This Course is already selected');
    }
    else{
      cart.forEach( item => {
        hour = hour + item.credit;
      } );
      const remainingHour = 20 - hour;
      if( hour > 20 ){
        return Swal.fire('You can not choice Courses more than 20 Hour');
      }
      else{
        setTotalHour(hour);
        setRemainingHour(remainingHour);
        setCart([...cart, course]);
      }
    }
  };

  return (
    <>
      <h1 className='text-4xl font-bold text-center my-10'>Course Registration</h1>
      <div className='flex flex-col lg:flex-row gap-7 justify-center mb-16'>
        <div className='flex justify-center'>
          <Courses selectCourse={selectCourse}></Courses>
        </div>
        <CourseInfo cart={cart} remainingHour={remainingHour} totalHour={totalHour} ></CourseInfo>
      </div>
    </>
  )
}

export default App
