import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Apply from './pages/Apply'
import AnimatedCursor from 'react-animated-cursor'

function App() {

  return (
    <>
     {
  window.innerWidth > 768 && (

    <AnimatedCursor

      innerSize={10}

      outerSize={35}

      outerAlpha={0.2}

      innerScale={0.7}

      outerScale={2}

    />

  )
}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="apply" element={<Apply/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
