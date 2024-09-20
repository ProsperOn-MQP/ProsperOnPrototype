import React, { useState } from "react";

interface ChatLog {
  message: string;
  response: string;
}

const Chatbot: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [chatLogs, setChatLogs] = useState<ChatLog[]>([]);

  const handleSend = async () => {
    if (message.trim() === "") return;

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const botResponse = await response.text();
      setChatLogs([...chatLogs, { message, response: botResponse }]);
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        bottom: "20px",
        right: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        overflowY: "auto",
        color: "#1a1a1a",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flexGrow: 1, overflowY: "auto", padding: "10px" }}>
        {chatLogs.map((log, index) => (
          <div key={index} style={{ textAlign: "left", marginBottom: "10px" }}>
            <div
              style={{
                wordWrap: "break-word",
                maxWidth: "80%",
                backgroundColor: "#d1e7dd",
                padding: "8px",
                borderRadius: "4px",
                marginLeft: "auto",
              }}
            >
              <div style={{ fontSize: "8pt", textAlign: "right" }}>
                Username
              </div>{" "}
              {log.message}
            </div>
            <div
              style={{
                wordWrap: "break-word",
                maxWidth: "80%",
                backgroundColor: "#f0f0f0",
                padding: "8px",
                borderRadius: "4px",
                marginBottom: "5px",
              }}
            >
              <div style={{ fontSize: "8pt" }}>Bot:</div> {log.response}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", marginTop: "10px", padding: "10px" }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            color: "#1a1a1a",
            backgroundColor: "#fff",
            width: "80%",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "8px",
          }}
        />
        <button
          onClick={handleSend}
          style={{
            width: "20%",
            border: "none",
            borderRadius: "4px",
            backgroundColor: "#1a1a1a",
            color: "#fff",
            cursor: "pointer",
            marginLeft: "5px",
            padding: "8px",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
