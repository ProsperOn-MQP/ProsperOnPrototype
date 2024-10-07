import React, { useEffect } from "react";

interface SelectionTrackerProps {
  onSelectionChange: (selectedText: string) => void;
}

const SelectionTracker: React.FC<SelectionTrackerProps> = ({
  onSelectionChange,
}) => {
  const extractData = (target: Node): string => {
    const element =
      target.nodeType === Node.TEXT_NODE
        ? target.parentElement
        : (target as HTMLElement);

    if (element) {
      const strongElement = element.querySelector("strong");
      if (strongElement) {
        return strongElement.textContent || "";
      }
    }

    return "";
  };

  const handleSelectionChange = () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;

    const target = selection.anchorNode?.parentElement;
    if (!target) return;

    if (target.closest("input, textarea, button, .chatbot-container")) {
      return;
    }

    const selectedText = extractData(selection.anchorNode!);
    onSelectionChange(selectedText);
  };

  const handleDoubleClick = () => {
    handleSelectionChange();
  };

  /*   const handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    handleSelectionChange();
  }; */

  const handleClickOnStrong = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.tagName === "STRONG") {
      event.preventDefault();
      const selectedText = target.textContent || "";
      onSelectionChange(selectedText);
    }
  };

  useEffect(() => {
    document.addEventListener("dblclick", handleDoubleClick);
    //document.addEventListener("contextmenu", handleRightClick);
    document.addEventListener("click", handleClickOnStrong);

    return () => {
      document.removeEventListener("dblclick", handleDoubleClick);
      //document.removeEventListener("contextmenu", handleRightClick);
      document.removeEventListener("click", handleClickOnStrong);
    };
  }, []);

  return null;
};

export default SelectionTracker;
