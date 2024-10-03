interface MessageBoxProps {
  role: string;
  content: string;
}

function MessageBox(props: MessageBoxProps) {
  return (
    <div style={{ textAlign: "left", marginBottom: "10px" }}>
      {props.role == "user" ? (
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
          {props.content}
        </div>
      ) : (
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
          <div style={{ fontSize: "8pt" }}>Bot:</div> {props.content}
        </div>
      )}
    </div>
  );
}

export default MessageBox;
