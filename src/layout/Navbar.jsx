import React from "react";
import { Link } from "react-router-dom";

function  Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-6">
      <h1 className="font-bold text-[40px]"> Bhagavad Gita</h1>
      <ul className="flex gap-8">
       <li>
        <Link to="/" >Home</Link>
        </li>
        <li>
        <Link to="/Chapter" >Chapter</Link>
        </li>
        <li>
        <Link to="/About" >About</Link>
        </li>
        <li>
        <Link to="/FAQs" >FAqs</Link>
        </li>
        <li>
        <Link to="/Contact" >Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
