import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { logIn, logOut } from '../../features/auth/authSlice'
import {useSelector,useDispatch} from 'react-redux'

function Header() {

  const authStatus=useSelector((state)=>state.auth.status)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleLogout=() => {
    dispatch(logOut())
    navigate('/')

  }
  


  return (
    <div>

      <nav className='flex justify-between items-center h-16 '>
        <div>
          <img className='w-14 h-14 rounded-full ml-6' src="https://img.freepik.com/premium-photo/8k-gaming-wallpaper-background_1020200-12484.jpg?w=1380" alt="logo" />
        </div>
        <ul className='flex justify-center gap-5 items-center'>
          <li><NavLink to='/' className={(e) => e.isActive ? "border-b-[3px] border-green-500 text-white font-bold" : "text-white"}>Home</NavLink></li>
          <li><NavLink to='/product' className={(e) => e.isActive ? "border-b-[3px] border-green-500 text-white font-bold" : "text-white"}>Product</NavLink></li>
          <li><NavLink to='/about' className={(e) => e.isActive ? "border-b-[3px] border-green-500 text-white font-bold" : "text-white"}>About</NavLink></li>
          <li><NavLink to='/contact' className={(e) => e.isActive ? "border-b-[3px] border-green-500 text-white font-bold" : "text-white"}>Contact Us</NavLink></li>
          <li><NavLink to='/cart' className={(e) => e.isActive ? "border-b-[3px] border-green-500 text-white font-bold" : "text-white"}>Cart</NavLink></li>
        </ul>
        {authStatus ? <div className='buttons flex justify-center items-center mr-4 gap-4'>
          <button onClick={handleLogout} className='px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-slate-400 '>LogOut</button>
        </div> : <div className='buttons flex justify-center items-center mr-4 gap-4'>
          <NavLink to='/login'><button className='px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-slate-400 '>LogIn</button></NavLink>
          <NavLink to='/register'><button className='px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-slate-400 '>SignUp</button></NavLink>
        </div>
        }
        
      </nav>
    </div>
  )
}

export default Header
