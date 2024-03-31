import React from 'react';
import './FullscreenImageModal.scss';

const FullscreenImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="fullscreen-modal-overlay" onClick={onClose}>
      <div className="fullscreen-modal">
        <img src={imageUrl} alt="fullscreen" />
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default FullscreenImageModal;