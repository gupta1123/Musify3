import React, { useState } from 'react';
import './RightSidebar.css';
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
  IconButton,
} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

const RightSidebar = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How are you?", user: "Alice" },
    { text: "I'm doing well. Thanks for asking!", user: "You" },
    { text: "Have a great day!", user: "Alice" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: "You" }]);
      setInput("");
    }
  };

  return (
    <div className="card">
      <h2>Live Chat</h2>
      <div className="divider"></div>

      <div className="chat-container">
        <div className="chat-list">
          <List>
            {messages.map((msg, index) => (
              <ListItem key={index} className={msg.user === "You" ? "outgoing" : "incoming"}>
                <Avatar alt={msg.user} src={`profile_image_url_${msg.user}`} />
                <ListItemText primary={msg.text} />
              </ListItem>
            ))}
          </List>
        </div>
        <Divider />

        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton onClick={sendMessage}>
            <SendIcon color="primary" />
          </IconButton>
        </div>
      </div>
      <div className="divider"></div>

      {/* Three white-colored cards */}
      <div className="cards-container">
        <div className="card">
          <div className="circle orange">
            <span className="icon">🎵</span>
          </div>
          <p>Lesson Materials</p>
        </div>
        <div className="card">
          <div className="circle orange">
            <span className="icon">🏠</span>
          </div>
          <p>Homework</p>
        </div>
        <div className="card">
          <div className="circle orange">
            <span className="icon">🎶</span>
          </div>
          <p>Your Notes</p>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
