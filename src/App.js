import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <h1><font color="red">Hello Guys</font></h1>
          
        </p>
        <table border="2" width="500">
          <tr><th>eno</th><th>ename</th></tr>
          <tr><th>1</th><th>ekansh</th></tr>
          <tr><th>1</th><th>ekansh</th></tr>
          </table>
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
