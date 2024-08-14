import React, { useState } from "react";
import Canvas from "./Components/Canvas";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css"; // Import the CSS file

function App() {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    const newCard = {
      id: Date.now(), // Unique ID
      text: "New Card",
      width: 200,
      height: 100,
      x: 50,
      y: 50,
    };
    setCards([...cards, newCard]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Canvas cards={cards} />
      </div>
    </DndProvider>
  );
}

export default App;
