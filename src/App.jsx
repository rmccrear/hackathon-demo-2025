import { useState } from 'react'
import './App.css'

import data from './data/data.json'
console.log(data[45].Name)
console.log(data[45].Image)
console.log(data[45].Temperament)


function App() {
  const [index, setIndex] = useState(0)

  function handleNextCat() {
    if(index<data.length-1){
      setIndex(index+1)
    }
  }

  // reduce
  let count = 0;


  // Map all the cats...
  let catListJSX = []
  // for each cat, get the name and put it in the array as JSX
  // <li> {cat.Name} </li>
  for(let i=0; i<data.length; i++) {
    const cat = data[i]
    console.log(cat.Name)
    catListJSX.push(<li> {cat.Name} </li>)
  }
  // catListJSX = data.map(item => <li> {item.Name} </li>)

  return (
    <>
      <h1>Cat index number {index}</h1>
      <div className="button-container">
        <button type="button">Previous</button>
        <button type="button" onClick={handleNextCat}>Forward Feline</button>
      </div>
      <h2>{data[index].Name}</h2>
      <p>{data[index].Temperament}</p>
      <img className="cat-picture" src={data[index].Image} />
      <ul>
        {catListJSX}
      </ul>
    </>
  )
}

export default App
