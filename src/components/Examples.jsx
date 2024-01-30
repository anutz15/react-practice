import React from 'react';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import { useState } from 'react';
import { EXAMPLES } from '../data.js';   // include {} as named export



export default function Examples() {
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
        <>
        <Section title="Examples" id='examples'>
            <h2>Examples</h2>
            <menu>
            <TabButton isSelected={selectedTopic=="components"} onClick={()=>{handleSelect('components')}}>Component</TabButton>
            <TabButton isSelected={selectedTopic=="jsx"} onCLick={()=>{handleSelect('jsx')}}>JSX</TabButton>
            <TabButton isSelected={selectedTopic=="props"} onCLick={()=>{handleSelect('props')}}>Props</TabButton>
            <TabButton isSelected={selectedTopic=="state"} onCLick={()=>{handleSelect('state')}}>State</TabButton>
            </menu>
        </Section>
        {tabContent}
        </>
    )
}
