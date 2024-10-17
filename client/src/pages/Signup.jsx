import React,{useEffect} from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors,isSubmitting,isSubmitted },
      } = useForm()

      const navigate=useNavigate()

      const onSubmit = (data) => {
        axios.post("https://sticky-sky-handspring.glitch.me/register",data)
        .then((response)=>response.data)
        .then(data=>{
          if(data.message=="User already exist"){
            alert("Account already exist with this email")
          }else if(data.message=="registration successfull"){
            alert("Registration Successfull")
            navigate('/login');
          }
        })
      }

  return (
    <div className="container min-h-[83vh] flex justify-center items-center">
      <div className="form p-3  w-fit mx-auto border-2 border-white ">
        <h2 className='text-3xl text-white font-bold my-5 text-center lg:text-5xl'>Registration</h2>
        <hr className='text-white bg-white my-2 border-2'/>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register("name")} placeholder='Enter your full name' className='w-[70vw] lg:w-[50vw]' />
            <Input {...register("email")} placeholder='Enter your email' className='w-[70vw] lg:w-[50vw]' type='email' />
            <Input {...register("password")} placeholder='Enter your password' className='w-[70vw] lg:w-[50vw]' type='password' />
            <Button className='border-2 border-white w-[70vw] duration-500 lg:w-[50vw]' name='SignUp' disable={isSubmitting ?  "true" : "false"}/>
          </form>
        </div>
    </div>
  )
}

export default Signup
