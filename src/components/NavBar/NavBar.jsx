import React from 'react'
import TopNavBar from './TopNavBar'
import phone from "../../assets/logos/Forma-1-copy.png"
import logo from "../../assets/logos/logo-header.png"
import location from "../../assets/logos/L1-copy.png"
import NavLinks from './NavLinks'

function NavBar() {
    return (
        <header className=''>
            <TopNavBar />
            <nav className='middle-navbar'>
                <div>
                    <img src={phone} alt="" width={"30px"} />
                    <div>
                        <p>01 42 89 53 18</p>
                        <p>contact@antheor-paris.fr</p>
                    </div>
                </div>

                <div>
                    <img src={logo} alt="logo" className='navbar-logo' />
                </div>

                <div>
                    <img src={location} alt="" width={"35px"} />
                    <div>
                        <p>8,RUE CORVETTO</p>
                        <p>75008 PARIS</p>
                    </div>
                </div>
            </nav>
            <NavLinks />
        </header>
    )
}

export default NavBar