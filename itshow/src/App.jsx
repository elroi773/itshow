import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'

import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
