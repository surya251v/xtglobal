import logo from './logo.svg';
import './App.css';
import Jokes from './Jokes/Jokes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Jokes></Jokes>
      </header>
    </div>
  );
}

export default App;
