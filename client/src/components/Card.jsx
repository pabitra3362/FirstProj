import React,{useState,useEffect} from 'react'
import { BsCartCheckFill } from "react-icons/bs";
import axios from 'axios'
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Card() {

  const [products, setProducts] = useState([])
  const isLogin=useSelector(state=>state.auth.status)
  const email=useSelector(state=>state.auth.email)
  const [message, setMessage] = useState("")

    useEffect(()=>{
      axios.post("http://localhost:3000/api/products")
      .then(response=>response.data)
      .then(data=>setProducts(data))
    },[])
    
    const handleCart=async(item) => {
      if (!isLogin) {
        alert("Please log in first");
        return;
    }

    try {
        
        const response = await axios.post("http://localhost:3000/addToCart", { ...item, email });
        const data=await response.data
        if(data){
          setMessage(data.message)
        }
        
    } catch (error) {
        console.error("Error adding item to cart:", error);
        alert("Failed to add item to cart. Please try again.");
    }
      toast(message)
      
    }


    
    
    
    

  return (
    <div className='grid grid-cols-4 gap-y-5 justify-evenly items-center'>
      {products.length!=0 && products.map((item)=>{
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
        <div className="cart mt-2">
    
            <button onClick={()=>handleCart(item)} className='flex  justify-center items-center border border-white text-white w-full py-2 gap-2 rounded-lg text-lg font-bold hover:bg-violet-400'>Cart <BsCartCheckFill /></button>
            
        </div>
      </div>
      })}
      <ToastContainer position="top-center"/>
    </div>
  )
}

export default Card
