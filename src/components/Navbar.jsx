import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from "../assets/logo-digital.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [nav, setNav] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
        AOS.refresh();
    }, []);
    return (
        <nav >
            <div class="navbar">
                <div class="logo">
                    <a href='/'>
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <ul class="nav-links">
                    <li class="menu-link"><a href="/">Home</a></li>
                    <li class="menu-link"><a href="/about">About us</a></li>
                    <li class="menu-link"><a href="/services">Services</a></li>
                    <li class="menu-link"><a href="/blog">Blog</a></li>
                    <li class="menu-link"><a href="/casestudy">Case Studies</a></li>
                    <li class="menu-link"><a href="/contact">Contact us</a></li>
                </ul>

                <div onClick={() => setNav(!nav)} className='bars'>
                    {
                        nav ? <FaTimes size={30} /> : <FaBars size={30} />
                    }
                </div>

                {
                    nav && (

                        <ul class="mobile-nav-links">
                            <li class="mobile-menu-link"><a href="/">Home</a></li>
                            <li class="mobile-menu-link"><a href="/about">About us</a></li>
                            <li class="mobile-menu-link"><a href="/services">Services</a></li>
                            <li class="mobile-menu-link"><a href="/blog">Blog</a></li>
                            <li class="mobile-menu-link"><a href="/casestudy">Case Studies</a></li>
                            <li class="mobile-menu-link"><a href="/contact">Contact us</a></li>

                        </ul>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar
