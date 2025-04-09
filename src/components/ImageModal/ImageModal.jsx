import Modal from "react-modal";
import css from "./ImageModal.module.css";
Modal.setAppElement("#root");

export default function ImageModal({ isOpen, image, onRequestClose }) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={css.modal}
      overlayClassName={css.modaloverlay}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={css.image}
      />
    </Modal>
  );
}
