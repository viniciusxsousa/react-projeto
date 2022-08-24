import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Contato from './screens/Contato';
import Home from './screens/Home';
import Servicos from './screens/Servicos';

function App() {

  return (
    <Router>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/servicos'>Serviços</Link></li>
        <li><Link to='/contato'>Contato</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/servicos' element={<Servicos/>} ></Route>
        <Route path='/contato' element={<Contato/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
