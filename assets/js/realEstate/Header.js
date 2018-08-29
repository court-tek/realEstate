import React, { Component } from "react";

let pink = { background: "#FF718E" };

class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Courtnez"
    };
  }

  render() {
    return (
      <header>
        <div className="logo">Abode.nL</div>

        <nav className="menu">
          <a href="">Create Ads</a>
          <a href="">About Us</a>
          <a href="">Log In</a>
          <a style={{ background: 'orange' }} href="" className="register-btn">
            Register
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;
