import './App.css'
import Courses from './components/Courses/Courses'

function App() {

  return (
    <>
      <h1 className='text-4xl font-bold text-center my-10'>Course Registration</h1>
      <div className='container flex flex-wrap lg:flex-row gap-10 mx-auto'>
        <Courses></Courses>
      </div>
    </>
  )
}

export default App
