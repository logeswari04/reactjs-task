import React from "react";
import PizzaLeft from "../Assets/PizzaLeft.jpg"
import "./services.css"

export default function Service() {
  const handleSubmit=(e) =>{ e.preventDefault();
  alert("form submitted successfully")
  e.target.reset()
  }
  return (
   <div className="contact">
      <div>
 < img src={PizzaLeft} alt="pizza " />
      </div>
      <div className="rightSide">
        <h1> Contact Us</h1>

      <form id="contact-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input id="name" placeholder="Enter full name..." type="text" />
          <label >Email</label>
          <input id="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            id="message"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>

  );

}
