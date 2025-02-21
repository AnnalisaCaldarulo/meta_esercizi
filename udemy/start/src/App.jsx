import { Header } from "./Components/Header";
import CoreConcept from "./Components/CoreConcept";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./TabButton";
import { useState } from "react";
function App() {


  const [selectedTopic, setSelectedTopic] = useState('Please click a button');
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {/* <CoreConcept title="Components" description="the core ui building block" img={componentsImg} /> */}
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />

          </ul>
        </section>

        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton onSelect={() => setSelectedTopic("Components")}>Components</TabButton>
            <TabButton onSelect={() => setSelectedTopic("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => setSelectedTopic("Props")}>Props</TabButton>
            <TabButton onSelect={() => setSelectedTopic("State")}>State</TabButton>
            <h3>{selectedTopic}</h3>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
