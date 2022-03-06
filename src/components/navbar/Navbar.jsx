import React from 'react'
import "../../styles/style.css"
function Navbar() {
    return (
        <>
            <header className="container flexContainer">
                <ul className="navbarLinks">
                    <li><button>men</button></li>
                    <li><button>women</button></li>
                    <li><button>kids</button></li>
                </ul>
                <figure className="navbarLogo">
                    <img src="" alt="" />
                </figure>
                <div className="navbarIcons">
                    <select name="currency" id="currency">
                        <option value="$">$ USD</option>
                        <option value="€">€ EUR</option>
                        <option value="¥">¥ JPY</option>
                    </select>
                    <img src="" alt="" />
                </div>
            </header>
        </>
    )
}

export default Navbar