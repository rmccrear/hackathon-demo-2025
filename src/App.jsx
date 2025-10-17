import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Select from './pages/Select'

import data from './data/data.json'
console.log(data)

/*
 * Variables needed: 
 * currentPage: a string - "home", "gallery", or "select"
 * pageContent: the JSX that I will use to fill the page.
 */


function App() {
  const [currentPage, setCurrentPage] = useState("home")

  function goToHomePage() {
    setCurrentPage("home")
  }
  function goToGalleryPage() {
    setCurrentPage("gallery")
  }
  function goToSelectPage() {
    setCurrentPage("select")
  }
  console.log(currentPage)

  let pageContent = <Home data={data} />

  if (currentPage === "home") {
    pageContent = <Home data={data} />
  } else if (currentPage === "select") {
    pageContent = <Select data={data} />
  } else if(currentPage === "gallery") {
    pageContent = <Gallery data={data} />
  }

  return (
    <>
      <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
        <h1>Cats</h1>
        <nav>
          <button type="button" onClick={goToHomePage}>Home</button>
          <button type="button" onClick={goToGalleryPage}>Gallery</button>
          <button type="button" onClick={goToSelectPage}>Select</button>
        </nav>
      </div>
      
      {pageContent}

    </>
  )
}

export default App
