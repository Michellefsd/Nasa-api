import logo from './logo.svg';
import './App.css';

function App() {
  const apiCall = async() => {
    const api = await fetch('https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=czVLEVgvpCDfpkJKALhxswhQ5VoLxpu5');
    console.log(api);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className='App-link' onClick={apiCall}>NEWSSSSS</button>
        
      </header>
    </div>
  );
}

export default App;
