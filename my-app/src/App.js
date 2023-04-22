

import './App.css';
import Header from './pages/home/header';
import SectionOne from './pages/home/sectionone';
import SectionTwo from './pages/home/sectiontwo';
import SectionThree from './pages/home/sectionthree';
import Fotter from './pages/home/footer';
import About from './pages/about';


function App() {
  return (
    <div className="App">
      <Header/>
     {/* <About/> */}
       
       +*-/<SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <Fotter/> 
     
    </div>
  );
}

export default App;
