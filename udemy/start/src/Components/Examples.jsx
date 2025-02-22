import TabButton from "../TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";

const Examples = () => {

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
    );
}

export default Examples;