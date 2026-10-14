import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "../App.css"
export const About = () => {
  return (
    <div>
        <section className="about"id="about">
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">About Us</h1>
                        <p>The Only things we are serious about id food.</p>
                    </div>
                    <p className="mid">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </p>
                    <Link to ={"/"}>Explore Menu(" ")
                    <span>
                        <HiOutlineArrowNarrowRight/>
                    </span>
                    </Link>
                </div>
                <div className="banner">
                    <img src="/about.jpg"></img>

                </div>
            </div>

        </section>
    </div>
  )
}
