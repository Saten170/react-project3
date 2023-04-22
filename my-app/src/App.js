

import './App.css';
import Header from './pages/home/header';
import SectionOne from './pages/home/sectionone';
import SectionTwo from './pages/home/sectiontwo';
import SectionThree from './pages/home/sectionthree';
import Fotter from './pages/home/footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <Fotter/>
     
    </div>
  );
}

export default App;
