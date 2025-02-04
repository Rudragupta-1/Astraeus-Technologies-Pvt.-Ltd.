import React from 'react';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <a className="navbar-brand" href="#">Astraeus Technologies Pvt.Ltd.</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>  
        </ul>
       
      </div>
    </nav>
  );
}

export default Navbar;
