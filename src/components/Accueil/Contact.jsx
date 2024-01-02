import React from 'react'
import Line from '../../widgets/Line'
import { FaPaperPlane } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import ContactCard from '../../widgets/ContactCard';

function Contact() {
    return (
        <section>
            <div className='Seperator'>
                <h2 className='ANTHEOR-LOGO'>ANTHEOR PARIS</h2>
                <h1>CONTACTEZ-NOUS</h1>
                <Line />
            </div>

            <div className='Contact-Container'>
                <div className='Contact-phone'>
                    <h2>TELEPHONE</h2>
                    <div>
                        <h1>01 42 89 53 18</h1>
                        <button>
                            Etre rappele
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#c69419" className="w-6 h-6" width={15}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className='Contact-card-container'>
                    <ContactCard icon={<FaPaperPlane color='#fff' />} text={"formulaire de contact"} />
                    <ContactCard icon={<FaCalendarCheck color='#fff' />} text={"prendre rendez-vous"} />
                    <ContactCard icon={<IoChatbubbles color='#fff' />} text={"chat en ligne en direct"} />
                </div>
            </div>

            <div className='Contact-form'>

                <div className='Contact-form-info'>
                    <p>
                        <div></div>
                        contactez-nous
                    </p>

                    <div>
                        <h3>Besoin d'un conseil ?</h3>
                        <h1>Une question sur l'achat de votre Or, d'un bijou... ?</h1>
                    </div>

                    <p>N'hesitez pas a nous contacter <span>01 42 89 53 18</span></p>

                </div>

                <div className='Contact-form-form'>
                    <form>
                        <div className='Contact-form-inputs'>
                            <input type="text" placeholder='Nom (obligatoire)' />
                            <input type="text" placeholder='Prenom (obligatoire)' />
                            <input type="tel" placeholder='Telephone (obligatoire)' />
                            <input type="email" placeholder='Email (obligatoire)' />
                        </div>

                        <div style={{ width: "100%", position: "relative" }}>
                            <label htmlFor="last-input" className='messagelabel'>Message (obligatoire)</label>
                            <input type="text" name="message" id="last-input" />
                        </div>

                        <div className='form-btn'>
                            <button>
                                Envoyer
                                <FaArrowRight color='#c69419' />
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact