import React, { Component } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

class App extends Component {
  constructor() {
    super();
    this.state = { msg: "", chat: [], nickname: "" };
  }

  componentDidMount() {
    // #2 Broadcasting Messages
    // #3 Using Nicknames
    socket.on("chat message", (msg) => {
      
    });
  }
  
  // Function for getting text input
  onTextChange = e => { 
    this.setState({ [e.target.name]: e.target.value });
  };

  // Function for sending message to chat server
  onMessageSubmit = () => {
    const { msg } = this.state;

    // #1 Sending and Receiving Messages
    // #3 Using Nicknames

    this.setState({ msg: "" });
  };

  renderChat() {
    const { chat } = this.state;

    // #3 Using Nicknames
    return chat.map(({ id, msg }, idx) => (
      <div key={idx}>
        <span style={{ color: "green" }}>{id}: </span>

        <span>{msg}</span>
      </div>
    ));
  }

  render() {
    return (
      <div>
        {/* #3 Using Nicknames */}

        <span>Message</span> 
        <input
          name="msg"
          onChange={e => this.onTextChange(e)}
          value={this.state.msg}
        />

        <button onClick={this.onMessageSubmit}>Send</button>

        {/* #2 Broadcasting Messages */}
        {/* <div>{this.renderChat()}</div> */}
      </div>
    );
  }
}

export default App;

