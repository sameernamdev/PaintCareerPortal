import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Apply from './pages/Apply'
import AnimatedCursor from 'react-animated-cursor'

function App() {

  return (
    <>
      <AnimatedCursor

        innerSize={10}

        outerSize={35}

        // color='255,159,92'

        outerAlpha={0.2}

        innerScale={0.7}

        outerScale={2}

        clickables={[
          'a',
          'button',
          '.link'
        ]}

      />
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
