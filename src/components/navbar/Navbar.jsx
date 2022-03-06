import React from 'react'
import logo from  "../../assets/icons/logo.svg"
import cart from "../../assets/icons/cart.svg"
import "../../styles/style.css"
import "./navbar.css"
function Navbar() {
    return (
        <>
            <header className="navbar container flexContainer">
                <ul className="navbarLinks">
                    <li><button>men</button></li>
                    <li><button>women</button></li>
                    <li><button>kids</button></li>
                </ul>
                <figure className="navbarLogo">
                    <img src={logo} alt="logo" />
                </figure>
                <div className="navbarIcons">
                    <select name="currency" id="currency">
                        <option value="$">$</option>
                        <option value="€">€</option>
                        <option value="¥">¥</option>
                    </select>
                    <button>
                    <img src={cart} alt="cart" />
                    </button>
                </div>
            </header>
        </>
    )
}

export default Navbar