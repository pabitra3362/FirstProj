import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { useForm } from "react-hook-form"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logIn,logOut } from '../features/auth/authSlice'

function Login() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting,isSubmitted },
  } = useForm()

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const onSubmit = (data) => {
    axios.post("http://localhost:3000/auth",data)
    .then((response)=>response.data)
    .then(data=>{
      if(data.message==="login success"){
        navigate('/')
        dispatch(logIn(data.email))
        
      }else if(data.message==='Invalid Password'){
        alert('Invalid Password')
      }else{
        alert('Invalid User')
      }
    })
  }

  return (
    <div className="container min-h-[83vh] flex justify-center items-center">
      <div className="form p-3  w-[80vw] mx-auto border-2 border-white  md:w-fit">
        <h2 className='text-5xl text-white font-bold my-5 text-center'>LogIn</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register("email")} placeholder='Enter your email' className='w-[70vw] md:w-[60vw]' type='email' />
            <Input {...register("password")} placeholder='Enter your password' className='w-[70vw] md:w-[60vw]' type='password' />
            <Button className='border-2 border-white w-[70vw] duration-500 md:w-[60vw]' name='LogIn' disable={isSubmitting ?  "true" : "false"}/>
          </form>
        </div>
        {/* {isSubmitted && alert('registered successfully')} */}
    </div>
  )
}

export default Login
