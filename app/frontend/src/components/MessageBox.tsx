interface MessageBoxProps {
  role: string;
  content: string;
}

function MessageBox(props: MessageBoxProps) {
  return (
    <div style={{ textAlign: "left", marginBottom: "10px" }}>
      {props.role == "user" ? (
        <div className="break-words	w-4/5 bg-wpi-red-faded p-2 rounded ml-auto right-8">
          <div className="text-xs font-semibold text-right">Username</div>
          {props.content}
        </div>
      ) : (
        <div className="break-words w-4/5 bg-neutral-300 p-2 rounded my-1">
          <div className="text-xs font-semibold text-left">Bot:</div>
          {props.content}
        </div>
      )}
    </div>
  );
}

export default MessageBox;
