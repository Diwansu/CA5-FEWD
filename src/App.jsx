import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Form from "./Pages/Form";
import Mainpage from "./Pages/Mainpage";


export default function App() {
  return (
    <section className="container">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Mainpage />} />
        <Route path="/registration" element={<Form />} />
      </Routes>

      <footer className="Footer">
  
          <h1> Developed by  <br/> 
                 Diwanshu Baskota 
         </h1> 

          <h4>Kalvium Corporation</h4>
        

      </footer>
    </section>
  );
}
