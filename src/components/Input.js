import React, { useEffect, useState } from "react";
import { Button, TextField, FormControl } from "@mui/material";
import { db } from "../firebase";
import Message from "./Message";
import firebase from "firebase/compat/app";
import FlipMove from "react-flip-move";
import "./Input.css";
import SendIcon from "@mui/icons-material/Send";
import "firebase/compat/firestore";
import IconButton from "@mui/material/IconButton";

function Input() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const isInputValid = (input) => {
    return input.trim() !== ''; // Returns true if the input is not empty or consists of only spaces
  };
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);
  useEffect(() => {
    if (!username) {
      const user = prompt("Enter Your Username");
      if (user) {
        setUsername(user);
      }
    }
  }, [username]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      text: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="main">
      <h1 className="headingss">Welcome To Messenger {username}</h1>
      <form className="message_input-form">
        <FormControl className="input-form">
          <TextField
            id="standard-basic"
            placeholder={"Enter a message....."}
            variant="standard"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="textField"
          />

          <IconButton
            variant="outlined"
            color="primary"
            type="submit"
            disabled={!isInputValid(input)}
            onClick={sendMessage}
            className="btnField"
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <div className="messenger-input">
        <FlipMove>
          {messages.map(({ id, data }) => (
            <Message key={id} message={data} username={username} />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default Input;
