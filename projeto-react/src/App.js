import './App.css';

import Lista from './components/Lista'

const itens1 = ['Comida', 'Dormir', 'Vídeo Game']
const itens2 = []

function App() {
  return (
    <div className="App">
      <Lista lista={itens1}></Lista>
      <hr></hr>
      <Lista lista={itens2}></Lista>
    </div>
  );
}

export default App;
