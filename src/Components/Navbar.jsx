import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <div>
    <div className="d-flex bg-color justify-content-between align-items-center fw-bold text-white py-4 px-5">
        <div>
          <NavLink to={"/"} className="px-5 fs-2">
            START FRAMEWORK
          </NavLink>
        </div>
        <div>
          <ul className="fs-5 d-flex px-5">
            <li>
              <NavLink to={"/about"}>ABOUT</NavLink>
            </li>
            <li>
              <NavLink to={"/portfolio"} className='px-5'>PORTFOLIO</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
      
    </>
  );
}
