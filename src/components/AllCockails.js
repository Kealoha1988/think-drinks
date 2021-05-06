import React from 'react'
import {useState} from 'react'

export default function AllCockails() {

const [state, setstate] = useState({cocktails: "none"})



const getAllDrinks = () => {
fetch("https://thecocktaildb.com/api/json/v2/9973533/search.php?s=margarita")
.then(resp => resp.json())
.then(data => setstate({cocktails: data.drinks}))
}

  return (
    <div>
      <button onClick={getAllDrinks}>fetch me</button>
      <p>{state.cocktails[0].strDrink}</p>
    </div>
  )
}
