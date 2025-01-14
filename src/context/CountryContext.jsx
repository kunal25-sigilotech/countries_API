import { createContext, useContext, useEffect, useReducer } from "react";

const CountryContext = createContext();


const initalState = {
    countries:[],
    filteredByName:[],
    isLoading:false,
    error:"",
}

function reducer(state,action){
    switch(action.type){
        case "SET_COUNTRIES": 
        return{...state, countries:action.payload  }
        
        case "SET_FILTERED_BY_NAME":
            return{...state, filteredByName:action.payload  }
        
        case "START_LOADING":
                return {...state, isLoading:true}

        case "END_LOADING":
                return{...state, isLoading:false}

        case "SET_ERROR":
            return{...state, error:action.payload}        


        default: 
        throw new Error("Unkwon action type")
    }
}

export default function CountryProvider({children}){
    const [{countries,isLoading,filteredByName,error},dispatch] = useReducer(reducer,initalState);


    
    useEffect(()=>{
        async function getCountries(){
    try{
       dispatch({type:"START_LOADING"});
        const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital");
        const data = await res.json();
        dispatch({type:"SET_COUNTRIES", payload:data})
        dispatch({type:"SET_FILTERED_BY_NAME", payload:data})
        dispatch({type:"END_LOADING"})
        }catch(err){
        console.error(err.message);
        dispatch({type:"SET_ERROR", payload:err.message})
    }
   }
    getCountries();
        },[])

        
        
    return (
        <CountryContext.Provider value={{countries,isLoading,filteredByName,error,dispatch}}>
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
