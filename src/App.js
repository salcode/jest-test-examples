import logo from './logo.svg';
import './App.css';
import CatFact from './components/CatFact';
import Credits from './components/Credits';
import Echo from './components/Echo';
import Excerpt from './components/Excerpt';

import getCatFactPromise from './utilities/getCatFactPromise';

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
      <hr />
      <CatFact
        getCatFactPromise={getCatFactPromise}
      />
      <hr />
      <Credits />
    </div>
  );
}

export default App;
