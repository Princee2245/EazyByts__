import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div class="navbar-brand">MyWebsite</div>
        <ul class="navbar-links">
          
            <li><a href="/">Home</a></li>
            <li><a href="/sport">Sports</a></li>
            <li><a href="/business">Business</a></li>
            <li><a href="/tech">Technology</a></li>
            <li><a href="/health">Health</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;