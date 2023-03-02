import ReactDOM from "react-dom";
import styles from "./ModalWindow.module.css";


export interface ModalProps {
  text: string;
  isOpen: boolean;
  onClose: () => void;
  onYes: () => void;
}

export function ModalWindow({ isOpen, text, onClose, onYes }: ModalProps) {
  if (!isOpen) return null;
  const modalRoot = document.getElementById("portal") as HTMLElement;

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.textContainer}>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.btnContainer}>
          <button
            onClick={onClose}
            className={styles.btn}
          >
            No
          </button>
          <button
            onClick={onYes}
            className={styles.btn}
          >
            Yes
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
