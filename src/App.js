import "./App.css";
import { React, useState } from "react";
import MemoryCard from "./components/MemoryCard";

const generateDeck = () => {
  const symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"];
  const newDeck = [];
  for (let i = 1; i <= 16; i++) {
    newDeck.push({
      isFlipped: false,
      symbol: symbols[i % 8],
    });
  }
  return shuffle(newDeck);
};

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function App() {
  const [deck, setDeck] = useState(generateDeck());
  const [pickedCards, setPickedCards] = useState([]);
  //const [newPickedCards, setNewPickedCards] = useState([]);
  const cardsJSX = deck.map((card, index) => {
    return (
      <MemoryCard
        clickHandler={() => pickCard(index)}
        isFlipped={card.isFlipped}
        symbol={card.symbol}
        key={index}
      />
    );
  });

  const unflipCards = (card1Index, card2Index) => {
    setTimeout(() => {
      const newDeck = [...deck];
      const firstCard = newDeck[card1Index];
      const secondCard = newDeck[card2Index];
      firstCard.isFlipped = false;
      secondCard.isFlipped = false;
      setDeck(newDeck);
    }, 1000);
  };

  const pickCard = (cardIndex) => {
    const newDeck = [...deck];
    const card = newDeck[cardIndex];
    if (card.isFlipped) {
      return;
    }
    card.isFlipped = true;
    const newPickedCards = [...pickedCards, cardIndex];
    setPickedCards(newPickedCards);
    if (newPickedCards.length === 2) {
      const card1Index = newPickedCards[0];
      const card2Index = newPickedCards[1];
      const firstCard = newDeck[card1Index];
      const secondCard = newDeck[card2Index];
      setPickedCards([]);
      if (firstCard.symbol !== secondCard.symbol) {
        unflipCards(card1Index, card2Index);
      }
    }
    setDeck(newDeck);
  };

  const handleClick = () => {
    setDeck(generateDeck());
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <h3 className="subtitle">Match cards to win!</h3>
      </header>
      <div>{cardsJSX.slice(0, 4)}</div>
      <div>{cardsJSX.slice(4, 8)}</div>
      <div>{cardsJSX.slice(8, 12)}</div>
      <div>{cardsJSX.slice(12, 16)}</div>

      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
