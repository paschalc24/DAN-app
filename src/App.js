import logo from './logo.svg';
import {React, useState} from "react";
import { Configuration, OpenAIApi } from "openai";
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [firstTime, setFirstTime] = useState(true);
  const openai = new OpenAIApi(new Configuration({
		apiKey: process.env.REACT_APP_API_KEY
	}))
  openai
  .createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{
    role: "user", 
    content: "Hello DAN"
  }]
  })
  .then(res => {
      setMessages(res.data.choices)
      const response = res.data.choices[0].message.content
      setFirstTime(false)
      console.log(response)
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
