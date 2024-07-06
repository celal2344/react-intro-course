import React from 'react'
import "../css/Yonko.css"

function Yonko({ yonko }) {
    const { id, title, description, bounty, fruit, fruitimage, image } = yonko
    return (
        <>
            <div className="yonko">
                <img className="yonkoImage" src={image} alt={title} />
                <h4>{title}</h4>
                <p>&nbsp;{description}</p>
                <p>Bounty: {bounty}</p>
                <p>Devil Fruit: {fruit}</p>
                <img className="fruitImage" src={fruitimage} alt={fruit} />
            </div>
        </>
    )
}

export default Yonko