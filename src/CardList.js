import React from 'react'
import Card from './Card'
import Error from './Error'

const CardList = ({robots}) => {
    if(robots.length===0){
        return (
            <div>
                <Error />
            </div>
        )
    }

    return (
        <div>
            {
                robots.map((robot) => {
                    return (<Card 
                        id={robot.id} 
                        name={robot.name} 
                        email={robot.email} 
                        key={robot.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList