import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import About from './pages/About'
import FAQs from './pages/FAQs'
import Contact from './pages/Contact'
import Chapter from './pages/Chapter'
import Verse from './pages/Verse'
// import Chapters from './components/home/Chapters'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/chapter/:id' element={<Chapter/>}/>
          <Route path='/chapter/:chapterId/verse/:verseId' element={<Verse/>}/>
          {/* <Route path="chapter/:chapterId/verse/:verseId" element={<Verse />} /> */}


          <Route path='/About' element={<About/>}/>
          <Route path='/FAQs' element={<FAQs/>}/>        
          <Route path='/Contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
