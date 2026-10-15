import React from 'react'
import {data} from "../restApi.json"
import '../App.css'

export const Qualities = () => {
  return (
    <div>
        <section className='qualities' id='qualities'>
            <div className="container">
                {
                    data[0].ourQualities.map((element)=>(
                        <div className="card" key={element.id}>
                            {/* <img src={element.image} alt={element.title}></img> */}
                            <p className="title">{element.title}</p>
                            <p className="description">{element.description}</p>
                        </div>
                    )
                       
                    ) 
                }

            </div>
        </section>
    </div>
  )
}
