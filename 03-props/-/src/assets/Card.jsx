import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
    <div className="card">
      <div className="card-name"><h1>{props.user}</h1></div>
      <div className="card-details">{props.profession}</div>
    </div>
  )
}

export default Card
