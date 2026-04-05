import CocktailCard from './CocktailCard'
import Wrapper from '../assets/wrappers/CocktailList'

const CocktailList = ({ drinks }) => {
  if (!drinks || drinks.length === 0) {
    return (
      <Wrapper>
        <div className='empty-state'>
          <h3>No cocktails found</h3>
          <p>Try searching for a different cocktail</p>
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      {drinks.map((drink) => (
        <CocktailCard key={drink.idDrink} drink={drink} />
      ))}
    </Wrapper>
  )
}

export default CocktailList
