import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "../App.css"

export const Success = () => {
  const [count,setCount]=useState(10)
  const navigate=useNavigate()

  useEffect(()=>{

    const timeId=setInterval(()=>{
    setCount(preCount=>{
      if(preCount === 1){
        clearInterval(timeId)
        navigate("/")
      }
      return preCount -1;
    })
    },1000)
    return ()=>clearInterval(timeId);

  },[navigate])
  return (
    <div>
       <section className='notFound'>
        <div className="container">
          <h3>Your Reservation Completed.Enjoy Your Food</h3>
          <h3>Redirecting to Home in{count} seconds....</h3>
          <Link to ={"/"}>Back to Home<HiOutlineArrowNarrowRight/></Link>
        </div>

       </section>
      
    </div>
  )
}
