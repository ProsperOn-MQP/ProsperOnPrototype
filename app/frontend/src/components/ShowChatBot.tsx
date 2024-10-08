import { useEffect, useRef } from "react";
import ChatWindow from "../components/ChatWindow";

function ShowChatbot({ suggestion }: { suggestion: string }) {
  const chatWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, []);

  return (
    <div ref={chatWindowRef} className="w-auto h-80 overflow-y-auto">
      <ChatWindow
        suggestion={suggestion}
        onChatClose={() => console.log(false)}
      />
    </div>
  );
}

export default ShowChatbot;
