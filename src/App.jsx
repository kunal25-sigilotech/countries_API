import React from 'react'
import Countries from './components/Countries'
import Header from './components/Header'
import SearchCountries from './components/SearchCountries'
import CountryProvider from './context/CountryContext'

export default function App() {
 return<CountryProvider>
  <div className='grid grid-rows-[min-content_1fr] gap-y-8 shadow-md'>
  <header className='bg-gray-200 py-4 px-12 '>
    <Header/>
  </header>
  <main className='px-12'>
    <SearchCountries/>
    <Countries/>
  </main>
 </div>
 </CountryProvider>
}
