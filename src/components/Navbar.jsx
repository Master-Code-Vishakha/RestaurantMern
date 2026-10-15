import React from 'react'
import { Link } from 'react-scroll'
import { GiHamburger } from "react-icons/gi";
import { data } from '../restApi.json'
import '../App.css'

export const Navbar = () => {
    const [show, setShow] = React.useState(false)
  return (
    <nav>
          <div className='logo'>Restro</div>
          <div className={show ? "navLinks showmenu":"navLinks"}>
            <div className="links">
                {data[0].navbarLinks.map((element)=>{
                    return(
                        <Link
                        to={element.link}
                        key={element.id}
                        >
                            {element.title}
                        </Link>
                    )
                })}
            </div>
           <button className="menuBtn">Our Menu</button>
          </div>
          <div className="hamburger" onClick={()=>setShow(!show)}>
            <GiHamburger/>
          </div>
    </nav>
  )
}
