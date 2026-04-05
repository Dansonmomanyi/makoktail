import { useState } from 'react'
import axios from 'axios'
import Wrapper from '../assets/wrappers/SearchForm'

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      const firstLetter = searchTerm.trim().charAt(0).toLowerCase()
      const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'
      
      axios.get(`${cocktailSearchUrl}?f=${firstLetter}`)
        .then(response => onSearch(response.data.drinks || []))
        .catch(error => {
          console.error('Search error:', error)
          onSearch([])
        })
      
      setSearchTerm('')
    }
  }

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='search'
          className='form-input'
          placeholder='Search by first letter...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='submit' className='btn'>
          Search
        </button>
      </form>
    </Wrapper>
  )
}

export default SearchForm
