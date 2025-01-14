import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useCountries } from '../context/CountryContext';

export default function SearchCountries() {
const {dispatch,countries} = useCountries();
const [query,setQuery] = useState("");

const memoizedCountries = useMemo(()=>{ return countries},[countries])

const filterCountries = useCallback((query)=>{
  const modifiedQuery = query.trim().toLowerCase();
  
  let curFiltertedCountries = null;
   curFiltertedCountries=memoizedCountries.filter(country => country.name.common.toLowerCase().includes(modifiedQuery))
  
   dispatch({type:"SET_FILTERED_BY_NAME",payload:curFiltertedCountries});
  },[dispatch,memoizedCountries])

  useEffect(()=>{
  if(!query) {
    dispatch({type:"SET_FILTERED_BY_NAME", payload:memoizedCountries})
  } 
    const timer = setTimeout(()=>{
        filterCountries(query)
  },300)

  return () => clearTimeout(timer);  
},[query,filterCountries,dispatch,memoizedCountries,
])


function settingCountries(val){

  const filteredArr = val === "All"? countries : countries.filter(country=>country.region===val);
  dispatch({type:"SET_FILTERED_BY_NAME", payload:filteredArr});
}
  
return (
    <div>
      <input type="text" value={query} onChange={e=>
       setQuery(e.target.value)} />
      <select onChange={e=> settingCountries(e.target.value)}>
        <option value="All">All Countries</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
     
    </div>
  )
}
