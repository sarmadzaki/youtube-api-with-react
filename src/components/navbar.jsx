import React from 'react';

const Navbar = () => {
  return(
    <nav className="navbar navbar-static-top">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Youtube Search</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
  );
}
export default Navbar;