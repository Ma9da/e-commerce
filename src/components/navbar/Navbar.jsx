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
            </header>
        </>
    )
}

export default Navbar