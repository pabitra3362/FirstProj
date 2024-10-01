import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { MdDeleteForever } from "react-icons/md";
import axios from 'axios';

function Cart() {

  const [carts,setCarts]=useState([])
  const email=useSelector(state=>state.auth.email)


  useEffect(()=>{
    axios.post("http://localhost:3000/showCarts",{email})
    .then(response=>response.data)
    .then(data=>setCarts(data))
  },[])


  const handleCounterChange = (item, change) => {
    const newCount = Math.max(item.count + change, 1)
    let arr = carts.map((mapItem) => {
      if (mapItem._id === item._id) {
        return { ...mapItem, count: newCount }
      } else {
        return mapItem
      }
      
      
    })
    setCarts(arr)
    
    axios.post('http://localhost:3000/changeCart',arr)
    .then(response=>response.data)
    .then(data=>console.log(data))
  }
  

  const handleDelete = (item) => {
    setCarts(carts.filter(cartItem => cartItem._id !== item._id))
    axios.post("http://localhost:3000/deleteCart",item)
    .then(response=>response.data)
    .then(data=>console.log(data))
  }

  


  const totalPay=() => {
    let total=0
    carts.map(item=>{
      total+=(item.price)*(item.count)
    })
    return total
  }
  




  return (
    <div className='container min-h-[83vh]'>
      <div className='flex justify-center items-center flex-wrap gap-4'>

        {carts.length == 0 ? <div className='text-3xl p-4 rounded-xl border-2 border-white text-white h-48 flex items-center w-fit absolute top-56 '> There is no item to display</div> : carts.map((item) => {
          return <div key={item._id} className="card p-2 w-64 border-2 border-white mx-auto">
            <div className="img w-60 h-48 overflow-hidden border-2 border-white">
              <img className='w-60 h-48 ' loading='lazy' src={item.image} alt="gaming image" />
            </div>
            <div className="title">
              <h3 className='text-xl text-white'>{item.title}</h3>
            </div>
            <div className="text text-white">
              <p>{item.text}</p>
            </div>
            <div className="price">
              <p className='text-lg mt-2 text-white'>Price : {item.price}</p>
            </div>
            <div className="line bg-white w-full h-1 my-3"></div>
            <div className="cart mt-2 flex justify-between items-center">

              <div className="buttons flex items-center gap-3 text-white">
                <button className=' border border-white text-white px-4 py-2 gap-2 rounded-lg text-lg font-bold hover:bg-violet-400' onClick={() => handleCounterChange(item, -1)} disabled={item.count === 1}>-</button>
                {item.count}
                <button className=' border border-white text-white px-4 py-2 gap-2 rounded-lg text-lg font-bold hover:bg-violet-400' onClick={() => handleCounterChange(item, 1)}>+</button>
              </div>
              <div className="remove">
                <button onClick={() => handleDelete(item)} className=' text-white text-3xl px-4 py-1 border border-white hover:bg-violet-400 rounded-lg'><MdDeleteForever /></button>
              </div>

            </div>
          </div>
        })}

      </div>
      {carts.length!=0 && <div className='text-3xl border-2 border-white p-4 rounded-lg text-center text-white w-[50vw] mx-auto mt-10'>Total to pay : {totalPay()}</div>}
    </div>
  )
}

export default Cart
