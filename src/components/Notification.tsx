import React, { useEffect } from 'react';
import './Notification.css';

interface NotificationProps {
  message: string;
  description?: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
  duration?: number;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  description,
  type,
  onClose,
  duration = 3000
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className={`notification ${type}`}>
      <div className="notification-content">
        <h4>{message}</h4>
        {description && <p>{description}</p>}
      </div>
      <button onClick={onClose} className="notification-close">
        &times;
      </button>
    </div>
  );
};

export default Notification;
