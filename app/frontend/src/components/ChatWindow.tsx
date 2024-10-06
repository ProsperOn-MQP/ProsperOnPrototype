import React, { useEffect, useState } from "react";
import axios from "axios";
import MessageBox from "./MessageBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

const port = process.env.PORT || 5001;
const serverURL = process.env.SERVER_URL || `http://localhost:${port}`;

interface message {
  role: string;
  content: string;
}

interface ChatbotProps {
  suggestion?: string;
  onChatClose: () => void;
}

const ChatWindow: React.FC<ChatbotProps> = ({
  suggestion = "",
  onChatClose,
}) => {
  const [userContent, setUserContent] = useState<string>("");
  const [chat, setChat] = useState<message[]>([]);

  useEffect(() => {
    const getMessages = async () => {
      const response = await axios.get(
        "http://localhost:5001/api/chatbot/fetchMessages",
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setChat(response.data);
    };
    getMessages();
  }, []);

  async function handleSend() {
    // Remove leading and trailing white spaces
    const messageContent = userContent.trim();
    if (messageContent === "") return;

    try {
      // Send message to server, where server will generate a response
      const response = await axios.post(
        `${serverURL}/api/chatbot/message`,
        {
          email: "prosperonmqp@wpi.edu",
          message: { user: "user", content: userContent },
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Reload chat
      const updatedChat = chat;
      updatedChat.push({ role: "user", content: userContent });
      updatedChat.push({
        role: response.data.role,
        content: response.data.content,
      });
      setChat(updatedChat);
      setUserContent("");
      console.log(chat);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSend();
    } else if (event.key === "Tab") {
      event.preventDefault();
      if (suggestion) {
        setUserContent(`Tell me about ${suggestion}`);
      }
    }
  };

  return (
    <div className="flex flex-col absolute origin-center w-full h-full border-solid border-1 bg-neutral-200 rounded-lg shadow-lg bottom-0">
      <div></div>
      <div className="flex-grow overflow-y-auto">
        <div className=" overflow-y-auto flex-col">
          <div style={{ flexGrow: 1, overflowY: "auto", padding: "10px" }}>
            {chat.map((message, index) => (
              <MessageBox
                key={index}
                role={message.role}
                content={message.content}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 flex h-16 py-2 px-3">
        <input
          className="bg-white border rounded w-4/5 h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder={`Tell me about ${suggestion}`}
          value={userContent}
          onChange={(e) => setUserContent(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-black hover:bg-gray-700 px-3 py-2 text-white rounded font-bold focus:outline-none focus:shadow-outline"
          onClick={handleSend}
        >
          <FontAwesomeIcon icon={faCircleArrowUp} size="lg" /> Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
