import "./App.css";
import RandomButton from "../components/RandomButton.jsx";
import RetrievalButton from "../components/RetreivalButton.jsx";

function App() {
  return (
    <>
      <div id="header" className="header">
        Bible Verse API Fun
      </div>
      <div id="bible-verse-generator" className="bible-verse-generator">
        <h1>Bible Verse Generator</h1>
        <RandomButton />
      </div>
      <div id="verse-search" className="verse-search">
        <h1> Search For a Verse</h1>
        <RetrievalButton />
      </div>
    </>
  );
}

export default App;
