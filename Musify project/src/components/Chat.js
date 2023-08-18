import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Divider
} from "@material-ui/core";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <div style={{ width: "30%", padding: "10px" }}>
      <div
        style={{ height: "80%", overflowY: "scroll", background: "lightgray" }}
      >
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index}>
              <ListItemText primary={msg} />
            </ListItem>
          ))}
        </List>
      </div>
      <Divider />
      <div style={{ background: "darkgray", padding: "10px" }}>
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          fullWidth
          variant="outlined"
          size="small"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={sendMessage}
          style={{ marginTop: "10px" }}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

export default Chat;
