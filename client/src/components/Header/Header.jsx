import React, { useEffect,useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { logIn, logOut } from '../../features/auth/authSlice'
import {useSelector,useDispatch} from 'react-redux'
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {

  const authStatus=useSelector((state)=>state.auth.status)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  let count=0
  const handleLogout=() => {
    dispatch(logOut())
    navigate('/')

  }
  
  
  const handleClick=()=>{
    count++
    if(count%2==0){
      document.getElementById('containermb').style.display='none';
    }else{
      document.getElementById('containermb').style.display='block';
    }
    
  }
  useEffect(()=>{
    document.getElementById('containermb').style.display='none';
  },[])
  


  return (
    <div>

      <nav className='hidden md:flex md:justify-between md:items-center md:h-16 lg:flex lg:justify-between lg:items-center lg:h-16'>
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



        {/* nav for mobile */}
      <nav  className='flex justify-between items-center h-16 md:hidden lg:hidden'>
        <div className='left'>
        <img className='w-14 h-14 rounded-full ml-6' src="https://img.freepik.com/premium-photo/8k-gaming-wallpaper-background_1020200-12484.jpg?w=1380" alt="logo" />
        </div>
        <div className="right">
          <button onClick={handleClick} className='text-white text-3xl mr-6'><RxHamburgerMenu /></button>
        </div>
      </nav>
      <div id='containermb' className="container h-fit py-8 fixed top-16 left-10 rounded-xl z-10 w-[80%] bg-black text-white md:hidden lg:hidden">
      <ul className='grid justify-center gap-2 items-center'>
          <li><NavLink to='/' className={(e) => e.isActive ? "border-b-[3px] border-green-500 text-white font-bold" : "text-white"}>Home</NavLink></li>
          <li><NavLink to='/product' className={(e) => e.isActive ? "border-b-[3px] border-green-500 text-white font-bold" : "text-white"}>Product</NavLink></li>
          <li><NavLink to='/about' className={(e) => e.isActive ? "border-b-[3px] border-green-500 text-white font-bold" : "text-white"}>About</NavLink></li>
          <li><NavLink to='/contact' className={(e) => e.isActive ? "border-b-[3px] border-green-500 text-white font-bold" : "text-white"}>Contact Us</NavLink></li>
          <li><NavLink to='/cart' className={(e) => e.isActive ? "border-b-[3px] border-green-500 text-white font-bold" : "text-white"}>Cart</NavLink></li>
        </ul>
        {authStatus ? <div className='buttons flex justify-center items-center mr-4 gap-4'>
          <button onClick={handleLogout} className='px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-slate-400 '>LogOut</button>
        </div> : <div className='buttons grid justify-center items-center mr-4 gap-4'>
          <NavLink to='/login'><button className='px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-slate-400 '>LogIn</button></NavLink>
          <NavLink to='/register'><button className='px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-slate-400 '>SignUp</button></NavLink>
        </div>
        }
      </div>
    </div>
  )
}

export default Header
