import React from 'react'
import {data} from "../restApi.json"
import "../App.css"

export const Team = () => {
  return (
    <div>
        <section className="team">
            <div className="container">
                <div className="heading-section">
                    <h1>OUR TEAM</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, architecto dolore maiores est dolorum ipsam sint ab voluptatibus laborum ad! Dignissimos quae eveniet sed? Quod et sed numquam ab odio!</p>
                </div>
                <div className="team_container">
                    {
                       data[0].team.map((element)=>{
                        return(
                            <div className='card' key={element.id}>
                                
                                <h3>{element.name}</h3>
                                <p>{element.designation}</p>
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
