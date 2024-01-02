import React from 'react'
import { IoChatbubbles } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";

function ContactBar() {
    return (
        <section className='ContactBar'>
            <div>
                <IoChatbubbles color='#c69419' size={25}/>
                <h3>Besoin de conseils ? n'hesitez pas a nous contacter</h3>
            </div>
            <div>
                <FaPhone color='#c69419' size={25}/>
                <h3>Vous souhaitez vendre de l'or ? faites appel a un specialiste de rachat</h3>
            </div>
            <div>
                <MdVerifiedUser color='#c69419' size={25}/>
                <h3>Vous souhaitez vendre de l'or ? faites appel a un specialiste de rachat</h3>
            </div>
        </section>
    )
}

export default ContactBar