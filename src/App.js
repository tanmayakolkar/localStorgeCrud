import logo from './logo.svg';
import './App.css';
import CrudOpration from './Component/CrudOpration';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Add from './Component/Add';
import Home from './Component/Home';
import Edit from './Component/Edit';


function App() {
  return (
  <>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/edit" element={<Edit/>}/>

    </Routes>
  
  </>
  );
}

export default App;
