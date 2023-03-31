import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import './App.css';
import SingleDay from './components/singleDay';

window.Buffer = window.Buffer || require('buffer').Buffer;

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/userpage' element={<User />} />
        <Route path='/userpage/:id' element={<SingleDay />} />
      </Routes>
    </Router>
  );
}

export default App;
