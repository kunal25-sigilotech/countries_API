import React from 'react';
import { useCountries } from '../context/CountryContext';


function Countries(){
const {isLoading,filteredByName,error} = useCountries();

if(error) return (<div>
  <p>{error}</p>
</div>);

if(isLoading) return <div>
  <p>Loading countries...</p>
</div>

 return (
  <div className='px-12 w-full max-w-7xl mx-auto'>
    <ul>
     {filteredByName.map((el,i)=><li key={i}>
        <p>{el.name.common}</p>
        <figure>
            <img src={el.flags.png} alt={el.name.common} />
        </figure>
        <p>Population: {el.population}</p>
        <p>Region: {el.region}</p>
        <p>Capital: {el.capital}</p>
      </li>)}
      </ul>
  </div>
)
}

export default Countries;