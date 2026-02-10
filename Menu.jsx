import React from "react"; 
import { MenuList } from "../helpers/MenuList";
import MenuItem from "./MenuItem";
import "./menu.css"



export default function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>

      <div className="menuList">
        {MenuList.map ((item, key) => {
          return (
            <div className="menuItem" key={key}>
            
              <div >
               
              <img src={item.image} alt={item.name} />
             </div>
<div className="overlay">  
              <h2 >{item.name}</h2>
              <p>${item.price}</p>
              </div>
               
             </div>
            
          );
        })}
        </div>
        </div>
)
}