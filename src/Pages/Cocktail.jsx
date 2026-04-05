import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const cocktailDetailsUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const fetchCocktailDetails = async (id) => {
  const response = await axios.get(`${cocktailDetailsUrl}${id}`)
  const drink = response.data.drinks ? response.data.drinks[0] : null
  
  if (!drink) {
    throw new Error('Cocktail not found')
  }
  
  return drink
}

const Cocktail = () => {
  const { id } = useParams()
  const { data: drink, isLoading, error } = useQuery({
    queryKey: ['cocktail', id],
    queryFn: () => fetchCocktailDetails(id),
    enabled: !!id,
  })

  if (isLoading) {
    return (
      <div className='page-content'>
        <div className='content-wrapper'>
          <p>Loading cocktail details...</p>
        </div>
      </div>
    )
  }

  if (error || !drink) {
    return (
      <div className='page-content'>
        <div className='content-wrapper'>
          <h2>Cocktail not found</h2>
          <p>Sorry, we couldn't find this cocktail recipe.</p>
          <Link to='/' className='btn'>
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const ingredients = []
  for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}`]
    const measure = drink[`strMeasure${i}`]
    if (ingredient) {
      ingredients.push({
        ingredient,
        measure: measure || '',
      })
    }
  }

  return (
    <div className='page-content'>
      <div className='content-wrapper cocktail-details'>
        <Link to='/' className='btn btn-back'>
          ← Back
        </Link>
        
        <div className='cocktail-header'>
          <img src={drink.strDrinkThumb} alt={drink.strDrink} />
          <div className='cocktail-info'>
            <h1>{drink.strDrink}</h1>
            <div className='details-tags'>
              <span className='tag'>{drink.strCategory}</span>
              <span className='tag'>{drink.strAlcoholic}</span>
              <span className='tag'>{drink.strGlass}</span>
            </div>
          </div>
        </div>

        <div className='cocktail-content'>
          <div className='ingredients-section'>
            <h3>Ingredients</h3>
            <ul className='ingredients-list'>
              {ingredients.map((item, idx) => (
                <li key={idx}>
                  <span className='measure'>{item.measure}</span>
                  {item.ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className='instructions-section'>
            <h3>Instructions</h3>
            <p className='instructions'>{drink.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cocktail