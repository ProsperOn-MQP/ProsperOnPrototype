import React from "react";

interface EachChatProps {
  message: string;
  response: string;
}

const EachChat: React.FC<EachChatProps> = ({ message, response }) => {
  return (
    <div className="text-left mb-4">
      <div className="break-words max-w-80 bg-wpi-red-faded p-2 rounded ml-auto right-8">
        <div className="text-xs font-semibold text-right">Username</div>{" "}
        {message}
      </div>
      <div className="break-words max-w-80 bg-wpi-gray-faded p-2 rounded my-4">
        <div className="text-xs font-semibold text-left">Bot:</div> {response}
      </div>
    </div>
  );
};

export default EachChat;
