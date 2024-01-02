import React from 'react'
import img from "../../assets/Rectangle-581.jpg"
import background from "../../assets/L00011.jpg"
import google from "../../assets/logos/Google-Reviews.png"

const Features = [
  { title: "Achat de métaux précieux : Or (à 32€ le gramme de 18K et jusqu'à 50€/g) - Argent - Platine" },
  { title: "Pièces or et argent - Lingots or et argent" },
  { title: "Argenterie ancienne ( Odiot - Christofle - Puiforcat )" },
  { title: "Bijoux d'occasion, bijoux modernes, bijoux de marque (Van-Cleef, Cartier... )" },
  { title: "Montres de marque (Rolex, Patek Philippe, Audemards Piguet... )" },
  { title: "Antiquités (Tableaux, Bronzes, Bibelots, Art des années 30 et 50... )" },
]

function AccueilSection1() {
  return (
    <section className=''>
      <div className='AccueilSection1'>
        <div className='AccueilSectionDiv'>
          <div>
            <h4 className='ANTHEOR-LOGO'>ANTHEOR PARIS</h4>
            <h2>Nous sommes specialises dans le rachat d'Or, d'argent & d'Antiquites, depuis plus de 20 ans.</h2>
            {Features.map((feature, index) => (
              <div key={index} style={{ display: 'flex', gap: '.2rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c69419" className="w-6 h-6" width={15}>
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                </svg>
                <p className='AccueilSectionDiv-p'>{feature.title}</p>
              </div>
            ))}
          </div>

          <div>
            <img src={background} alt="" className='background' />
            <div className='AccueilSection1_reviews'>
              <h4>9.9/10</h4>
              {Array(6).fill().map((_, index) => (
                <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c69419" className="w-6 h-6" width={17}>
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
              ))}
              <div>
                <h1>Excellent</h1>
                <p>Base sur 89 avis</p>
              </div>

              <img src={google} alt="" />
            </div>
          </div>
        </div>

        <img src={img} alt="" className='img' />
      </div>

      <div className='AccueilSection1_info container'>
        <div>
          <div>
            <div className='line'></div>
            <h3 className='ANTHEOR-LOGO'>ANTHEOR PARIS</h3>
          </div>
          <h1>Comment se deroule le <br /> rachat de votre or ?</h1>
        </div>

        <div>
          <h1>Expertises Gratuites</h1>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c69419" className="w-6 h-6" width={20}>
              <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
              <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clipRule="evenodd" />
            </svg>
            <h2>En boutique a Paris (Cadre Securise)</h2>
          </div>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c69419" className="w-6 h-6" width={20}>
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>

            <h2>Ou a votre Domicile (sur rendez-vous)</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccueilSection1