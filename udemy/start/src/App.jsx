import { Header } from "./components/Header";
import ConceptSection from "./components/ConceptSection";
import Examples from "./components/Examples";

function App() {
  return (
    <div>
      <Header />
      <main>
        <ConceptSection />
        <Examples />
      </main>
    </div>
  );
}

export default App;
