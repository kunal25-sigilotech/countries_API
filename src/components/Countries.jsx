import React, { useEffect, useState } from 'react'
import { useCountries } from '../context/CountryContext';


function Countries(){
const {isLoading,countries,setFilteredCountries,filteredCountries} = useCountries();

 

return (
  <div>
    {isLoading || countries.length===0? <p>Loading countries...</p>:<ul>
      {filteredCountries.map((el,i)=><li key={i}>
        <p>{el.name.common}</p>
        <figure>
            <img src={el.flags.png} alt={el.name.common} />
        </figure>
        <p>Population: {el.population}</p>
        <p>Region: {el.region}</p>
        <p>Capital: {el.capital}</p>
      </li>)}
      </ul>}
  </div>
)
}

export default Countries;