
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
 import "./App.css"
import Home from "./component/Router/Home"
import Menu from "./component/Router/Menu";
import Contact from "./component/Router/Contact";

import Service from "./component/Router/Service";
export default function App() {
  return (
    
       
  <div className="App">
    <BrowserRouter>
     <div className="header">
                  <h2 className="logo">PizzA</h2>
                 <nav  >
                         <ul>
                   
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                  
                    <li>
                     <Link to="/Menu">Menu</Link>
                     </li>
                     <li>
                     <Link to="/Contact">About Us</Link>
                     </li>
                     <li>
                    <Link to="/Service">Contact</Link>
                  </li> 
                    </ul>
                    
                 </nav>
 </div>
            
             
            
              <Routes>
           <Route path="/" element={<Home/>}/>
            <Route path="/Menu" element={<Menu/>} />
            <Route path="/Service" element={<Service />}/>
             <Route path="/Contact" element={<Contact />} />
          </Routes>
           </BrowserRouter>
  
      </div>
       
    )
    }
    

 
                      
             