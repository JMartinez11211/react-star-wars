import './App.css';
import Data from './Components/Data';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
     <Routes>
       <Route path="/" element={<Data/>}/>
       <Route path="home" element={<Data/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="contact" element={<Contact/>}/>

     </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
