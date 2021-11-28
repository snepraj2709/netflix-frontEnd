import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav(){
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if (window.scrollY > 100){
                
            } else handleShow(false);
        });
        return() => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://images.app.goo.gl/pMm7C2y1Hagdv6WQ9"
                alt="Netflix Logo"
            />
            <img
            className="nav__avatar"
            src="https://images.app.goo.gl/CH3H7LGxsgZaxFpz6"
            alt="Netflix Logo"
            />
        </div>
        
    )
}

export default Nav;
