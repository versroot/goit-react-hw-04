import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, image, onRequestClose }) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "transparent",
          border: "none",
          padding: 0,
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          zIndex: 1000,
        },
      }}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        style={{ maxWidth: "95vw", maxHeight: "95vh", borderRadius: "10px" }}
      />
    </Modal>
  );
}
