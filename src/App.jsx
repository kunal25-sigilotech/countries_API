import React from 'react'
import Countries from './components/Countries'
import Header from './components/Header'
import SearchCountries from './components/SearchCountries'
import CountryProvider from './context/CountryContext'

export default function App() {
 return<CountryProvider>
  <div>
  <header>
    <Header/>
  </header>
  <main>
    <SearchCountries/>
    <Countries/>
  </main>
 </div>
 </CountryProvider>
}
