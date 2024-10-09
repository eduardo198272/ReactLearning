import './App.css';
import HelloWorld from './components/HelloWorld.js';
import SayMyName from './components/SayMyName.js';
import Pessoa from './components/Pessoa.js';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Matheus"/>
      <Pessoa nome="Rodrigo" idade="20" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
