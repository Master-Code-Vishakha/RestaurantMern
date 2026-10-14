import React from 'react'
import{data} from "../restApi.json"
import '../App.css'

export const Menu = () => {
  return (
    <div>
        <section className="menu" id="menu">
            <div className="container">
                <h2 className="heading">Our Menu</h2>
                <p className="description">Discover our delicious selection of dishes</p>
            </div>
            <div className="dishes-container">
                {
                    data[0].dishes.map((element)=>{
                        return(
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.name}></img>
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    </div>
  )
}
