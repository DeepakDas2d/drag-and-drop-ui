import React, { useState } from "react";
import { ResizableBox } from "react-resizable";
import { useDrag } from "react-dnd";
import Modal from "react-modal";
import "./Card.css";

Modal.setAppElement("#root");

const Card = ({ card }) => {
  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "CARD",
    item: { id: card.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleShowMore = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ResizableBox
      width={card.width}
      height={card.height}
      minConstraints={[100, 50]}
      maxConstraints={[400, 300]}
      draggableOpts={{ grid: [25, 25] }}
      resizeHandles={["se"]}
      style={{ top: card.y, left: card.x, opacity: isDragging ? 0.5 : 1 }}
      className="card"
    >
      <div ref={drag} style={{ width: "100%", height: "100%" }}>
        <p>
          {card.text.slice(0, 20) + "..."}
          <button className="show-more-button" onClick={handleShowMore}>
            Show More
          </button>
        </p>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Detailed View"
        className="modal-content"
      >
        <h2>Card Details</h2>
        <p>{card.text}</p>
        <button className="modal-close-button" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </ResizableBox>
  );
};

export default Card;
