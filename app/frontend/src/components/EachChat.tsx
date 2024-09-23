import React from "react";

interface EachChatProps {
  message: string;
  response: string;
}

const EachChat: React.FC<EachChatProps> = ({ message, response }) => {
  return (
    <div style={{ textAlign: "left", marginBottom: "10px" }}>
      <div
        style={{
          wordWrap: "break-word",
          maxWidth: "80%",
          backgroundColor: "#d1e7dd",
          padding: "8px",
          borderRadius: "4px",
          marginLeft: "auto",
          right: "8px",
        }}
      >
        <div style={{ fontSize: "8pt", textAlign: "right" }}>Username</div>{" "}
        {message}
      </div>
      <div
        style={{
          wordWrap: "break-word",
          maxWidth: "80%",
          backgroundColor: "#d2d5d8",
          padding: "8px",
          borderRadius: "4px",
          marginTop: "4px",
          marginBottom: "4px",
        }}
      >
        <div style={{ fontSize: "8pt" }}>Bot:</div> {response}
      </div>
    </div>
  );
};

export default EachChat;
