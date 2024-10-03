import React, { useState, useEffect } from "react";

interface InteractionObject {
  type: string;
  action: string;
  data: string;
  count: number;
}

interface FocusContextProps {
  userId: string;
}

const FocusContext: React.FC<FocusContextProps> = ({ userId }) => {
  console.log(userId);
  const [interactions, setInteractions] = useState<InteractionObject[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  //const [responseMessage, setResponseMessage] = useState<string>("");
  console.log(interactions);
  const updateInteraction = (type: string, action: string, data: string) => {
    setInteractions((prevState) => {
      const existingInteraction = prevState.find(
        (interaction) =>
          interaction.type === type &&
          interaction.action === action &&
          interaction.data === data
      );

      if (existingInteraction) {
        return prevState.map((interaction) =>
          interaction === existingInteraction
            ? { ...interaction, count: interaction.count + 1 }
            : interaction
        );
      } else {
        return [...prevState, { type, action, data, count: 1 }];
      }
    });
  };

  // summarizes div
  const extractData = (target: HTMLElement): string => {
    const strongElement = target.querySelector("strong");
    if (strongElement) {
      return strongElement.textContent || "Unknown Strong Text";
    } else {
      const textData = target.textContent || "Unknown Text";
      const firstSentence = textData.split(".")[0] + ".";
      return firstSentence;
    }
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.tagName === "IMG") {
        // Log interactions only for <img> elements
        const imageData = target.getAttribute("src") || "Unknown Image";
        updateInteraction("image", "hovered", imageData);
      } else {
        // Always log interaction but only store <strong> or first sentence
        const textData = extractData(target);
        updateInteraction("text", "hovered", textData);
      }
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.tagName === "IMG") {
        const imageData = target.getAttribute("src") || "Unknown Image";
        updateInteraction("image", "clicked", imageData);
      } else {
        const textData = extractData(target);
        updateInteraction("text", "clicked", textData);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: mousePosition.y + 10,
        left: mousePosition.x + 10,
        pointerEvents: "none",
        backgroundColor: "grey",
      }}
    >
      {/*       <h3>User Interactions:</h3>
      <ul>
        {interactions.map((interaction, index) => (
          <li key={index}>
            {interaction.type} {interaction.action}: {interaction.data} (Count:{" "}
            {interaction.count})
          </li>
        ))}
      </ul>
      <p>{responseMessage}</p> */}
    </div>
  );
};

export default FocusContext;
