import { Header } from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabButton from "./TabButton";
import { useState } from "react";
function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p> Please select a topic</p>;
  if (selectedTopic) {
    tabContent = <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p> {EXAMPLES[selectedTopic].description} </p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
  }
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=> <CoreConcept key={conceptItem.title} {...conceptItem} />)}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}


          </ul>
        </section>

        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => setSelectedTopic("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => setSelectedTopic("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => setSelectedTopic("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => setSelectedTopic("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
