import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addphone from './components/Addphone';
import Searchphone from './components/Searchphone';
import Deletephone from './components/Deletephone';
import Viewphone from './components/Viewphone';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addphone/>}/>
      <Route path='/s' element={<Searchphone/>}/>
      <Route path='/d' element={<Deletephone/>}/>
      <Route path='/v' element={<Viewphone/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
