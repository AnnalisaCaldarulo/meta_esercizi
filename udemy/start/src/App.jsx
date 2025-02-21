import { Header } from "./Components/Header";
import CoreConcept from "./Components/CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabButton from "./TabButton";
import { useState } from "react";
function App() {


  const [selectedTopic, setSelectedTopic] = useState('components');
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
            <TabButton onSelect={() => setSelectedTopic("components")}>Components</TabButton>
            <TabButton onSelect={() => setSelectedTopic("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => setSelectedTopic("props")}>Props</TabButton>
            <TabButton onSelect={() => setSelectedTopic("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p> {EXAMPLES[selectedTopic].description} </p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
