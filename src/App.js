import logo from './logo.svg';
import './App.css';
import ReactWhatsapp from 'react-whatsapp';
function App() {
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
          Learn React 971506864013
        </a>
        <ReactWhatsapp number="971-50-686-4013" message="Hello World!!!" />
      </header>
    </div>
  );
}

export default App;
