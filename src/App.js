import logo from './logo.svg';
import './App.css';
import Credits from './components/Credits';
import Echo from './components/Echo';
import Excerpt from './components/Excerpt';

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
          Learn React
        </a>
      </header>
      <Excerpt content="123456789" maxChars={4} />
      <Echo />
      <Credits />
    </div>
  );
}

export default App;
