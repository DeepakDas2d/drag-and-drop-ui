import React, { useState } from "react";
import Card from "./Card";
import { ArcherContainer, ArcherElement } from "react-archer";
import "./Canvas.css";

const Canvas = () => {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    setCards([
      ...cards,
      {
        id: "card-" + (cards.length + 1),
        text: "Dummy text for card " + (cards.length + 1),
        x: 100,
        y: 100,
        width: 200,
        height: 100,
      },
    ]);
  };

  return (
    <div className="canvas-container">
      <button className="add-card-button" onClick={addCard}>
        Add Card
      </button>
      <ArcherContainer strokeColor="red">
        {cards.map((card, index) => (
          <ArcherElement
            key={card.id}
            id={card.id}
            relations={
              index > 0
                ? [
                    {
                      targetId: "card-" + index,
                      targetAnchor: "top",
                      sourceAnchor: "bottom",
                      style: { strokeColor: "blue", strokeWidth: 2 },
                    },
                  ]
                : []
            }
          >
            <Card key={card.id} card={card} />
          </ArcherElement>
        ))}
      </ArcherContainer>
    </div>
  );
};

export default Canvas;
