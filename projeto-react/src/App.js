import { useState } from 'react';

import './App.css';

import PegarNome from './components/PegarNome';
import MostrarNome from './components/MostrarNome';

function App() {

  const [nome, setNome] = useState()

  return (
    <div>
      <h1>State Lift</h1>
      <PegarNome setNome={setNome}></PegarNome>
      <MostrarNome nome={nome} ></MostrarNome>
    </div>
  )
}

export default App;
