import React from 'react'
import ContactBar from '../../widgets/ContactBar'
import img from "../../assets/img2.jpg"
import background from "../../assets/L11.jpg"

function ContactInfo() {
    return (
        <section>
            <ContactBar />

            <div className='AccueilSection1'>
                <div className='AccueilSectionDiv ContactInfo'>
                    <div>
                        <h2>Voila maintenant <span>plus de 20 ans</span> que notre comptoir <br />  specialise Antheor est present sur le marche.</h2>
                        <p className='AccueilSectionDiv-p'>N’hésitez pas à faire appel au spécialiste de l'achat et de la vente d'Or <span>numero 1 a Paris.</span></p>
                        <p className='AccueilSectionDiv-p'>Nous vous conseillons <span>gratuitement</span> et en toute <span>discrétion</span>. Des milliers de clients nous font confiance, faites comme eux !</p>
                    </div>

                    <div>
                        <img src={background} alt="" className='background' />
                        <div className='AccueilSection1_reviews Contact-phone2'>
                            <h2>CONTACTEZ-NOUS</h2>
                            <div>
                                <h1>01 42 89 53 18</h1>
                                <p>contact@antheor-paris.fr</p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={img} alt="" className='img' />
            </div>
        </section>
    )
}

export default ContactInfo