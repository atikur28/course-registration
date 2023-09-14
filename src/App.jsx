import { useState } from 'react'
import './App.css'
import CourseInfo from './components/CourseInfo/CourseInfo'
import Courses from './components/Courses/Courses'

function App() {
  const [cart, setCart] = useState([]);
  const selectCourse = course => {
    const newCart = [...cart, course];
    setCart(newCart);
  };

  return (
    <>
      <h1 className='text-4xl font-bold text-center my-10'>Course Registration</h1>
      <div className='container flex flex-wrap lg:flex-row gap-7 mx-auto'>
        <Courses selectCourse={selectCourse}></Courses>
        <CourseInfo cart={cart} ></CourseInfo>
      </div>
    </>
  )
}

export default App
