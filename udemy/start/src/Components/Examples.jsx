import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";
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
        <Section title="Examples" id="examples">
            <Tabs  buttons={
                <>
                    <TabButton isSelected={selectedTopic === 'components'} onClick={() => setSelectedTopic("components")}>Components</TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => setSelectedTopic("jsx")}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'props'} onClick={() => setSelectedTopic("props")}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'state'} onClick={() => setSelectedTopic("state")}>State</TabButton>
                </>
            }>
                {tabContent}
            </Tabs>
        </Section>
    );
}

export default Examples;