import React from 'react'
import SingleCocktail from './SingleCocktail'
import {useEffect} from 'react'


export default function AllCockails(props) {




const mapThis = () => {
if (!!props.cocktails){
 return props.cocktails.map((drink, i) => <SingleCocktail key={i} name={drink.strDrink} picture={drink.strDrinkThumb} video={drink.strVideo} instructions={drink.strInstructions} spirit={drink.strIngredient1} ingredient1={drink.strIngredient2} ingredient2={drink.strIngredient3} ingredient3={drink.strIngredient4} ingredient4={drink.strIngredient5} ingredient5={drink.strIngredient6} glass={drink.strGlass}/>)
}else{<h2>cool stuff</h2>}
} 


const what = () => console.log(props.cocktails)



// const drinks = () => state.cocktails.map((drink, i) => <SingleCocktail key={i} name={drink.strDrink} spirit={drink.strIngredient1} ingredient1={drink.strIngredient2} ingredient2={drink.strIngredient3} ingredient3={drink.strIngredient4} ingredient4={drink.strIngredient5} ingredient5={drink.strIngredient6} />)

  return (
    <div>
      {mapThis()} 
    </div>

  )
}
