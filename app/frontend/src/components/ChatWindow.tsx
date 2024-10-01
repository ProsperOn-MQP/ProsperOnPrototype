import React, { useState, useEffect } from "react";
import EachChat from "./EachChat";

interface ChatLog {
  message: string;
  response: string;
}

interface ChatbotProps {
  suggestion?: string;
}

const ChatWindow: React.FC<ChatbotProps> = ({ suggestion = "" }) => {
  const [message, setMessage] = useState<string>("");
  const [chatLogs, setChatLogs] = useState<ChatLog[]>([]);

  useEffect(() => {
    const fetchChatLogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/chat/all");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const initialLogs = await response.json();
        setChatLogs(initialLogs);
      } catch (error) {
        console.error("Error fetching chat logs:", error);
      }
    };

    fetchChatLogs();
  }, []);

  const handleSend = async () => {
    if (message.trim() === "") return;

    try {
      const response = await fetch("http://localhost:5000/api/pychat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error("UHHHHH");
      }

      const botResponse = await response.text();
      setChatLogs([...chatLogs, { message, response: botResponse }]);
      setMessage("");
    } catch (error) {
      console.error("cant send message:", error);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSend();
    } else if (event.key === "Tab") {
      event.preventDefault();
      if (suggestion) {
        setMessage(`Tell me about ${suggestion}`);
      }
    }
  };

  return (
    <div className="absolute w-full h-full bg-neutral-100 rounded-lg overflow-y-auto flex-col">
      <div className="grow overflow-y-auto p-2.5">
        {chatLogs.map((log, index) => (
          <EachChat key={index} message={log.message} response={log.response} />
        ))}
      </div>
      <div className="sticky bg-neutral-100 bottom-0 h-16 flex mt-10 py-2 px-3">
        <input
          className="border rounded w-4/5 h-12 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder={`Tell me about ${suggestion}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-black hover:bg-gray-700 w-1/5 text-white text-size-lg font-bold py-2 px-3 focus:outline-none focus:shadow-outline"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
