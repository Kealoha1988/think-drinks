import React from 'react'

export default function SingleCocktail(props) {



  return (
    <div className="single">
      <h3>{props.name}</h3>
      <img className="images" src={props.picture} />
      {/* <iframe src={props.video} /> */}
      <p><b>Instructions:</b>{props.instructions}</p>
      <p><b>Spirit:</b>{props.spirit}</p>
      <p><b>Ingredients:</b>{props.ingredient1}, {props.ingredient2}, {props.ingredient3}</p>
      </div>
  )
}
