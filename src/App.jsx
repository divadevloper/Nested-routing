
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import SideNav from './SideNave'

function App() {

  return (
    <>

    <Navbar/>
    <div>
    <div className='overall'>
      <SideNav/>

      <div className='outlet'>
      <Outlet/>
      
      </div>
    </div>
    </div>
    
    

    </>
  )
}

export default App
