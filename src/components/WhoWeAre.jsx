import React from 'react'
import {data} from "../restApi.json"
import "../App.css"
export const WhoWeAre = () => {
  return (
    <div>
       <section className="who_are_we">
        <div className="container">
            <div className="text-banner">
                {
                    data[0].who_we_are.slice(0,2).map((element)=>{
                        return(
                            <div className='card' key={element.id}>
                                <h1 className='heading'>{element.number}</h1>
                                <p>{element.title}</p>
                            </div>
                        )
                    })
                }

            </div>
            <div className='image-banner'>
                <img src='platter.jpg'></img>

            </div>
             <div className="text-banner">
                {
                    data[0].who_we_are.slice(2).map((element)=>{
                        return(
                            <div className='card' key={element.id}>
                                <h1 className='heading'>{element.number}</h1>
                                <p>{element.title}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
       </section>
    </div>
  )
}
