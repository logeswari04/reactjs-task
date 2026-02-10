import React from 'react'


export default function MenuItem({ image, name, price}) {
  return (
    
      <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>

      <div className="menuList">
        {MenuList.map ((item, key) => {
          return (
            <div className="menuItem" key={key}>
            
              <div>
               
              <img src={item.image} alt={item.name} />
              </div>
<div>
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
