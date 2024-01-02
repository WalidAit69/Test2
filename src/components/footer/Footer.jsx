import React from 'react'
import "./Footer.css"
import logo from "../../assets/logos/logo-footer.png"
import { FiChevronsRight } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import logo2 from "../../assets/logos/logo-ed.png";

function Footer() {
    return (
        <footer>
            <div className='footer_cta'>
                <div className='footer_btn'>
                    <button>
                        <FaPhone />
                        etre rappele
                    </button>
                </div>

                <div className='footer_btn'>
                    <button>
                        <FaCalendarCheck />
                        Prendre rdv
                    </button>
                </div>
            </div>

            <div className='footer'>
                <img src={logo} alt="logo" width={300} />

                <div className=''>
                    <h3>Liens utiles</h3>
                    <ul>
                        <li>
                            <FiChevronsRight color='#c69419' />
                            Rachat OR
                        </li>
                        <li>
                            <FiChevronsRight color='#c69419' />
                            Diamants
                        </li>
                        <li>
                            <FiChevronsRight color='#c69419' />
                            Argenterie
                        </li>
                        <li>
                            <FiChevronsRight color='#c69419' />
                            Mentions Legales
                        </li>
                        <li>
                            <FiChevronsRight color='#c69419' />
                            Diamants
                        </li>
                        <li>
                            <FiChevronsRight color='#c69419' />
                            Contact
                        </li>
                    </ul>
                </div>

                <div className=''>
                    <h3>infos</h3>
                    <ul>
                        <li>
                            <FaPhone color='#c69419' />
                            01 42 89 53 18
                        </li>
                        <li>
                            <FaCalendarCheck color='#c69419' />
                            contact@antheor-paris.fr
                        </li>
                        <li>
                            <FaLocationDot color='#c69419' />
                            8,rue Corvetto 75008, Paris France
                        </li>
                    </ul>
                </div>
            </div>

            <div className='copyright-footer'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, fugiat!</p>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur par</p>
                    <img src={logo2} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer