import React from 'react'
import { NavLink } from 'react-router-dom';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';


import "./Navbar.scss"
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
            <div class="container-fluid my-2">
                <a class="navbar-brand" href="/">Time <span>Zone</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/product">Product</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink to="/profile"><FiSearch /></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/profile"><CgProfile /></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/cart"><BsFillCartCheckFill /></NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
