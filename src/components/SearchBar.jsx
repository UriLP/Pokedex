import React, { useState } from 'react'

import { searchPokemon } from '../services/pokeapi'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [pokemon, setPokemon] = useState()

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const onClick = async () => {
    const data = await searchPokemon(search)
    setPokemon(data)
    console.log(data)
  }

  return (
    <div>
      <div>
        <input
          placeholder='Search Pokemon...'
          onChange={onChange}
        />
      </div>
      <div>
        <button onClick={onClick}>Buscar</button>
      </div>
      {pokemon &&
        <div>
          {pokemon.name}
          {pokemon.weight}
        </div>}
    </div>
  )
}

export default SearchBar
