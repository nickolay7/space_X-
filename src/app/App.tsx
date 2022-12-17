import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Header } from 'components/Header'
import { NotFoundPage, Home } from 'pages'

import '../scss/main.scss'
const About = () => <h2>About</h2>

export const App = () => {
  return (
    <div className='ui-wrapper app-bg'>
      <Header className='' />
      <div className='ui-content-wrapper'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </div>
    </div>
  )
};
