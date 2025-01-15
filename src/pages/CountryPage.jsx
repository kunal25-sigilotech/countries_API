import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL_SINGLE } from "../utils/variable";

function CountryPage() {
  const { name } = useParams();
  const [country,setCountry] = useState(null);
  const [borederCountries,setBorderCountries] = useState([]);
  

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


if(!country) return <div className="flex items-center justify-center h-dvh">Loading....</div>
  return <section className="" >
    <div className="grid grid-cols-2 gap-y-4 h-dvh w-full max-w-7xl mx-auto px-8 py-6 pb-12">
    <Link to="/" role="button" className="flex items-center gap-2 col-start-1 col-end-2 shadow-lg px-10 py-2 bg-gray-100 rounded-xl self-start justify-self-start">
    <span>&larr;</span> 
    <span>Back</span>
    </Link>
    <figure className="col-start-1 col-end-2 ">
    <img src={country.flags.png} alt={country.name.common} className="object-cover h-full max-h-[80%] w-full max-w-[80%]"/>
    </figure>
    <div className="col-start-2 col-end-3 grid grid-cols-2 grid-rows-[repeat(3,min-content)] gap-y-8">
      <h1 className="text-2xl font-semibold col-span-full">{country.name.common}</h1>
      <div >
      <p><span className="font-semibold" >Population:</span> {country.population}</p>
      <p><span className="font-semibold">Region:</span> {country.region}</p>
      <p><span className="font-semibold">Sub-Region:</span> {country.subregion}</p>
      <p><span className="font-semibold">Capital:</span> {country.capital}</p>
      <p><span className="font-semibold">Top-level-domain:</span> {country.tld[0]}</p>
      </div>
     </div>
      <p className="col-span-full">{}</p>
     </div>
    </section>;
}


export default CountryPage;
