import { createContext, useContext, useEffect, useState } from "react";

const CountryContext = createContext();

export default function CountryProvider({children}){
    const [countries,setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filteredCountries,setFilteredCountries] = useState(null);
    
    useEffect(()=>{
        async function getCountries(){
        setIsLoading(true);
        const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital");
        const data = await res.json();
        setCountries(data);
        setFilteredCountries(data);
        setIsLoading(false);
        }
        getCountries();
        },[])

        
        
    return (
        <CountryContext.Provider value={{countries,isLoading,filteredCountries,setFilteredCountries}}>
            {children}
        </CountryContext.Provider>
    )
}

export function useCountries(){
    const context = useContext(CountryContext);
    if(!context){
        throw new Error("useCountries must be used within a CountryProvider")
    }
    return context;
 }
