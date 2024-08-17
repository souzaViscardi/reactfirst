
import {CORE_CONCEPTS, EXAMPLES} from "./data.js"
import CoreConcept from './components/CoreConcept/CoreConcept.jsx'
import Header from './components/Header/Header.jsx'
import { useState } from "react";
import { Examples } from "./components/Examples/Examples.jsx";
function App() {

  let tabContent = null
  let [selectTopic, setSelectTopic]=useState(tabContent)
  function handleClick(data){
    console.log("OLA", data)
    setSelectTopic(data)
  }
  return (
    <div>
      <Header />
      <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {
            CORE_CONCEPTS.map((el, i) =>{
              return (
                <CoreConcept key={i} title={el.title} image={el.image} description={el.description}></CoreConcept>
              )
            })
          }
      </ul>
      </section>
      <section id="examples">
          <Examples handleClick={handleClick} selectTopic={selectTopic}/>
      </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;