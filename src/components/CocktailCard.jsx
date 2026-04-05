import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CocktailCard'

const CocktailCard = ({ drink }) => {
  const { idDrink, strDrink, strDrinkThumb, strCategory, strAlcoholic, strGlass } = drink

  return (
    <Wrapper>
      <img src={strDrinkThumb} alt={strDrink} />
      <div className='footer'>
        <h4>{strDrink}</h4>
        <div className='info'>
          <span>{strCategory}</span>
          <span>{strAlcoholic}</span>
          <span>{strGlass}</span>
        </div>
        <Link to={`/cocktail/${idDrink}`} className='btn'>
          View Recipe
        </Link>
      </div>
    </Wrapper>
  )
}

export default CocktailCard
