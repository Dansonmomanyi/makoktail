import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktailList'

const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'

const fetchCocktails = async (query) => {
  const response = await axios.get(`${cocktailSearchUrl}?f=${query}`)
  return response.data.drinks || []
}

const Landing = () => {
  const { data: drinks = [], isLoading, error } = useQuery({
    queryKey: ['cocktails', 'a'],
    queryFn: () => fetchCocktails('a'),
  })
  const [searchedDrinks, setSearchedDrinks] = useState([])

  useEffect(() => {
    setSearchedDrinks(drinks)
  }, [drinks])

  const handleSearch = (searchResults) => {
    setSearchedDrinks(searchResults)
  }

  if (isLoading) return <div className='page-content'><p>Loading cocktails...</p></div>
  
  if (error) return <div className='page-content'><p>Error loading cocktails: {error.message}</p></div>

  return (
    <div className='page-content'>
      <div className='content-wrapper'>
        <SearchForm onSearch={handleSearch} />
        <CocktailList drinks={searchedDrinks && searchedDrinks.length > 0 ? searchedDrinks : drinks} />
      </div>
    </div>
  )
}

export default Landing