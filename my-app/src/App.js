import './App.css';
import Header from './pages/home/header';
import Fotter from './pages/home/footer';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Router/>
        <Fotter/> 
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
