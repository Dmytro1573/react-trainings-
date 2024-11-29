import Modal from "react-modal";

export default function ImageModal({ isOpen, isClose, imgUrl }) {
  const customStyles = {
    overflow: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("#root");
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={isClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button type="button" onClick={isClose}>
          Close
        </button>
        <img src={imgUrl} alt="Large image" />
      </Modal>
    </div>
  );
}
