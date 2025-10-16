import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import RouterCall from './routes'
function App() {

  return (
    <>
    <Header />
      <RouterCall />
    <Footer />
    </>
  )
}

export default App
