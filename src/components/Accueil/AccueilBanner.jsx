import React from 'react'
import banner from "../../assets/Group-11.jpg";
import "./Accueil.css";

function AccueilBanner() {
    return (
        <div className='AccueilBanner'>
            <img src={banner} alt="" />
            <section className='AccueilBanner-info'>
                <div>
                    <div className='line'></div>
                    <h3>ANTHEOR PARIS</h3>
                </div>
                <h1>Rachat d'Or a Paris (Paiement Comptant par Cheque)</h1>
                <h2>Nous achetons votre or sous toutes ses formes : <br /> <span>(Debris or, or casse, bijoux en or, vieil or, lingots or, pieces en or...)</span></h2>
            </section>

            <div className='left-arrow arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

            </div>

            <div className='right-arrow arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </div>

        </div>
    )
}

export default AccueilBanner