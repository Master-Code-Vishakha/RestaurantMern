import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "../App.css"
export const Notfound = () => {
  return (
    <div>
      <section className='notFound'>
          <div className="container">
             <p>PAGE NOT FOUND</p>
             <p>we cant seem to find you the page you are looking for</p>
             <Link to={"/"} className="back-home">
             Back to Home {" "}
             <span>
              <HiOutlineArrowNarrowRight/>
             </span>
             </Link>
          </div>
      </section>
    </div>
  )
}
