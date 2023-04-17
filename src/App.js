import './App.css';
import ChatBox from "./UIComponents/ChatBox"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Do Anything Now (DAN) 👾
      </header>
      <ChatBox/>
      <div className="resp-contain"></div>
    </div>
  );
}

export default App;
