import React, { useEffect, useMemo, useState } from 'react'
import { useCountries } from '../context/CountryContext';

export default function SearchCountries() {
const {setFilteredCountries,countries} = useCountries();
const [query,setQuery] = useState("");

const memoizedCountries = useMemo(()=>{return countries},[])

useEffect(()=>{
    if(!query) {
        setFilteredCountries(memoizedCountries);
        return
    };
    const timer = setTimeout(()=>{
        filterCountries(query)
  },300)

  return () => clearTimeout(timer);  
},[query,memoizedCountries])

function filterCountries(query){
    const curFiltertedCountries = memoizedCountries.filter(country => country.name.common.toLowerCase().includes(query.toLowerCase()))
    setFilteredCountries(curFiltertedCountries);
    }
  
return (
    <div>
      <input type="text" value={query} onChange={e=>setQuery(e.target.value)} />
      <select>
        <option></option>
      </select>
     
    </div>
  )
}
