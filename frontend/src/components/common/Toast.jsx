import React from 'react';
import { useUI } from '../../context/UIContext';

const Toast = () => {
  const { toast } = useUI();

  return (
    <div
      id="toast"
      className={toast.show ? 'show' : ''}
      data-testid="toast"
      role="alert"
      aria-live="polite"
    >
      <span className="tk">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      </span>
      <div>
        <b>Enquiry Received</b>
        <span id="toast-msg">{toast.message}</span>
      </div>
    </div>
  );
};

export default Toast;
