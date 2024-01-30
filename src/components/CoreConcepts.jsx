import React from 'react';
import CoreComponent from './CoreComponent';
import { CORE_CONCEPTS } from '../data.js';


export default function CoreConcepts() {
  return (
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
  )
}
