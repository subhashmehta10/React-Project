import React, { useState } from "react";

// ChatWidget.jsx
// Drop your existing CSS into your global stylesheet or import it where you use this component.

export default function ChatWidget() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="chat-float-button">
        <button
          type="button"
          id="chat-toggle"
          className="chat-toggle-button"
          aria-expanded={visible}
          aria-controls="chat-box"
          onClick={() => setVisible((v) => !v)}
        >
          <span className="chat-icon">💬</span>
          <span className="chat-text">Chat with us!</span>
        </button>
      </div>

      <div className={`chat-box ${visible ? "visible" : ""}`} id="chat-box" role="dialog" aria-hidden={!visible}>
        <div className="chat-header">
          <h3>Start a Chat</h3>
          <button
            id="close-chat"
            className="close-chat-button"
            aria-label="Close chat"
            onClick={() => setVisible(false)}
          >
            &times;
          </button>
        </div>

        <div className="chat-body">
          <p>Hi there! How can I help you today?</p>

          <a href="https://wa.me/917322986294" target="_blank" rel="noopener noreferrer" className="chat-link whatsapp-link">
            <span className="chat-link-icon">📞</span>
            Start Chat on WhatsApp
          </a>

          <a href="mailto:mehtasubh10@gmail.com" className="chat-link email-link">
            <span className="chat-link-icon">✉️</span>
            Send an Email
          </a>
        </div>
      </div>
    </>
  );
}
