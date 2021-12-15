import "./App.css";
import MemoryCard from "./components/MemoryCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <h3 class="subtitle">Match cards to win!</h3>
      </header>
      <div>
        <MemoryCard isFlipped={true} symbol="Ø" />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard isFlipped={true} symbol={"∆"} />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard isFlipped={true} symbol="∆" />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard isFlipped={true} symbol="Ø" />
        <MemoryCard />
        <MemoryCard />
      </div>
    </div>
  );
}

export default App;
