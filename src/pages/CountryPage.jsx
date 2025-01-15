import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL_SINGLE } from "../utils/variable";

function CountryPage() {
  const { name } = useParams();
  const [country,setCountry] = useState(null);
 
  useEffect(()=>{
    async function getCountry() {
      try {
        const res = await fetch(`${API_URL_SINGLE}${name}`)
        const data = await res.json();
       setCountry(data[0]);
        
      } catch (error) {
        
      }    }
    getCountry();
  },[name])

  

  

if(!country) return <div>Loading....</div>
  return <section className="" >
    <div className="grid grid-cols-2 gap-y-4 h-dvh w-full max-w-7xl mx-auto px-8 py-6 pb-12">
    <Link to="/" role="button" className="flex items-center gap-2 col-start-1 col-end-2 shadow-lg px-10 py-2 bg-gray-100 rounded-xl self-start justify-self-start">
    <span>&larr;</span> 
    <span>Back</span>
    </Link>
    <figure className="col-start-1 col-end-2 ">
    <img src={country.flags.png} alt={country.name.common} className="object-cover h-full max-h-[80%] w-full max-w-[80%]"/>
    </figure>
    <div className="col-start-2 col-end-3">
      <h1>{country.name.common}</h1>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Sub-Region: {country.subregion}</p>
      <p>Capital: {country.capital}</p>
      <p>Top-level-domain: {country.tld[0]}</p>
     </div>
     </div>
    </section>;
}


export default CountryPage;
