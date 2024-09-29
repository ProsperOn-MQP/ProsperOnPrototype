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
        return strongElement.textContent || "Unknown Strong Text";
      } else {
        const textData = element.textContent || "Unknown Text";
        const firstSentence = textData.split(".")[0] + ".";
        return firstSentence;
      }
    }

    return "No selection";
  };

  const handleSelectionChange = () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const selectedRange = selection.getRangeAt(0);
      const selectedElement = selectedRange.commonAncestorContainer;

      if (selectedElement && selectedElement.textContent?.trim()) {
        const extractedData = extractData(selectedElement);
        onSelectionChange(extractedData);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("selectionchange", handleSelectionChange);

    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, []);

  return null;
};

export default SelectionTracker;
