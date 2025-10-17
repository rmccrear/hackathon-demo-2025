import { useState } from "react"

export default function Select({data}) {

    // In Code.org we do...
    // var filteredList = []
    const [filteredList, setFilteredList] = useState([])

    function handlePlayful() {
        console.log("clicked playful")
        // filter only playful cats
        const playfulCats = [] // temp
        for(let i=0; i<data.length; i++) {
            // If they are playful we push them on the list
            // if temperament column contains the word "Playful"
            // reference: https://www.w3schools.com/jsref/jsref_includes.asp
            if( data[i].Temperament.includes("Playful") ) {
                // In code.org we do...
                // appendItem(playfulCats, data[i])
                console.log(data[i].Temperament)
                playfulCats.push(data[i])
            }
        }
        console.log(playfulCats)
        // on code.org...
        // filteredList = playfulCats
        setFilteredList(playfulCats)
    }

    function handleGentle() {
        const gentleCats = [] // temp
        for(let i=0; i<data.length; i++){
            if(data[i].Temperament.includes("Gentle")){
                gentleCats.push(data[i])
            }
        }
        setFilteredList(gentleCats)
    }

    // on code.org this is like the updateDisplay
    const filteredListJSX = [];
    // map pattern
    for (let i=0; i<filteredList.length; i++) {
        filteredListJSX.push(<>
            <li>{filteredList[i].Name}, {filteredList[i].Temperament}</li>
        </>)
    }

    return (<>
        <h1>Select</h1>
        <p>Chose a temperament </p>
        <div>
            <button type="button" onClick={handlePlayful}>Playful</button>
            <button type="button" onClick={handleGentle}>Gentle</button>
        </div>
        <div>
            <ul>
                {filteredListJSX}
            </ul>
        </div>
    </>)
}
