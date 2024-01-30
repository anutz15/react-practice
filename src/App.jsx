import { CORE_CONCEPTS,EXAMPLES } from './data.js';    // include {} as named export
import Header from './components/Header';
import CoreComponent from './components/CoreComponent';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';


function App() {

  const [selectedTopic,setSelectedTopic]=useState();

  function handleSelect(selectedButton){ 
    setSelectedTopic(selectedButton)
    // console.log(selectedTopic);
  }

  let tabContent=<p>Please select a topic</p>;
  if(selectedTopic){
    tabContent=(
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=>(
              <CoreComponent key={conceptItem.title} {...conceptItem}/>
            ))}
            {/* <CoreComponent
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}/>
            <CoreComponent {...CORE_CONCEPTS[1]}/>
            <CoreComponent {...CORE_CONCEPTS[2]}/>
            <CoreComponent {...CORE_CONCEPTS[3]}/> */}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic=="components"} onSelect={()=>{handleSelect('components')}}>Component</TabButton>
            <TabButton isSelected={selectedTopic=="jsx"} onSelect={()=>{handleSelect('jsx')}}>JSX</TabButton>
            <TabButton isSelected={selectedTopic=="props"} onSelect={()=>{handleSelect('props')}}>Props</TabButton>
            <TabButton isSelected={selectedTopic=="state"} onSelect={()=>{handleSelect('state')}}>State</TabButton>
          </menu>
        </section>
        
          {/* {!selectedTopic ? (
            <p>Please select a topic</p>
          ):(
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
          {tabContent}
        
      </main>
    </div>
  );
}

export default App;
