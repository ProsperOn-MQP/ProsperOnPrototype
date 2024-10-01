import React from "react";

interface EachChatProps {
  message: string;
  response: string;
}

/* g 
style={{
          wordWrap: "break-word",
          maxWidth: "80%",
          backgroundColor: "#d1e7dd",
          padding: "8px",
          borderRadius: "4px",
          marginLeft: "auto",
          right: "8px",
        }}
          
        style={{
          wordWrap: "break-word",
          maxWidth: "80%",
          backgroundColor: "#d2d5d8",
          padding: "8px",
          borderRadius: "4px",
          marginTop: "4px",
          marginBottom: "4px",
        }}
          
        style={{ fontSize: "8pt", textAlign: "right" }}
        style={{ fontSize: "8pt" }}style={{ textAlign: "left", marginBottom: "10px" }}
*/

const EachChat: React.FC<EachChatProps> = ({ message, response }) => {
  return (
    <div className="text-left mb-4">
      <div className="break-words max-w-80 bg-wpi-red p-2 rounded ml-auto right-8">
        <div className="text-xs font-semibold text-right">Username</div>{" "}
        {message}
      </div>
      <div className="break-words max-w-80 bg-wpi-gray p-2 rounded my-4">
        <div className="text-xs font-semibold text-left">Bot:</div> {response}
      </div>
    </div>
  );
};

export default EachChat;
