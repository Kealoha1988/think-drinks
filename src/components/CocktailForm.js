import React from 'react'
import {useState} from 'react'
import AllCockails from './AllCockails'

export default function CocktailForm() {

const [state, setstate] = useState({
  name: "",
  cocktails: []
})

  const handleChange = (e) => {
    setstate({name: e.target.value})
    console.log(state.name)
  }

    const getAllDrinks = () => {
      fetch(`https://thecocktaildb.com/api/json/v2/9973533/search.php?s=${state.name}`)
      .then(resp => resp.json())
      .then(data => setstate({cocktails: data.drinks}))
      }

   

  return (
    <div>
      <input type="text" onChange={handleChange} id="box"></input>
      <button onClick={getAllDrinks}>get it</button> 
      <AllCockails name={state.name} cocktails={state.cocktails}/>
    </div>
  )
}
