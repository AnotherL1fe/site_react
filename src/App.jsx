//import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Header from './components/header/index.jsx'

import Search from './components/Search/index.jsx'

import Body from './components/body/index.jsx'


const App = () => {

  return (
    <>
      <Header />
      <Search />
      <Body />
    </>
  )

}

export default App
