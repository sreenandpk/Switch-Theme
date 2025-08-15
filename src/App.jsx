import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

  function App(){


   return(

        <>
        
          <nav>

        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>


          </nav>
        

        <Routes>


        <Route path="/about" element={<About />}/>
       <Route path="/contact" element={<Contact />}/>

        </Routes>


        </>



   )




  }

  export default App;