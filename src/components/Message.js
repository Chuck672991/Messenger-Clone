import React,{forewardRef, forwardRef} from 'react';
import './Message.css'; // Import your custom CSS file

const Message = forwardRef(({ message, username },ref)=> {
  const isUser =  username &&username === message.username;

  return (  
    <div ref={ref} className={`message-container ${isUser ? "message__user" : "message__guest"}`}>
      <div className="avatar">
        {/* You can place the user's profile picture here */}
      </div>
      <div className="message-content">
       
        <div className={`text ${isUser ? "main-text" : "guest-text"}`}>
        {message.text}


        </div>
        <div className={`username ${isUser ? "main-user" : "guest-user"}`}>
        {!isUser && `${message.username || 'Anonymus'}`}

        </div>
      </div>
    </div>
  );
})

export default Message;
