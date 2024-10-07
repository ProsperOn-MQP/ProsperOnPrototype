import { useState } from "react";

interface KeyDocumentProps {
  text: string;
  onOpenChat: () => void;
}

const KeyDocument: React.FC<KeyDocumentProps> = ({ text, onOpenChat }) => {
  const [holdTimeout, setHoldTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseDown = () => {
    setIsHovered(true);
    const timeout = setTimeout(() => {
      onOpenChat();
      console.log("held");
    }, 600);
    setHoldTimeout(timeout);
  };

  const handleMouseUp = () => {
    setIsHovered(false);
    if (holdTimeout) {
      clearTimeout(holdTimeout);
      setHoldTimeout(null);
    } else {
      onOpenChat();
    }
  };

  return (
    <strong
      className={`cursor-pointer transition-all duration-200 ${
        isHovered ? "outline outline-2 outline-blue-500" : ""
      }`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {text}
    </strong>
  );
};

export default KeyDocument;
