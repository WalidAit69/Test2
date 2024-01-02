import React from 'react'
import Line from '../../widgets/Line'
import background from "../../assets/Layer-0.jpg"

function Location() {
    return (
        <section>
            <div className='Seperator'>
                <h2 className='ANTHEOR-LOGO'>ANTHEOR PARIS</h2>
                <h1>Se Rendre en Boutique</h1>
                <Line />
            </div>

            <div className='Location'>

                <div>
                    <img src={background} alt="" />
                    <div className='Location-info'>
                        <h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#c69419" className="w-6 h-6" width={25}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            Horaires d'ouverture
                        </h1>

                        <div>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c69419" className="w-6 h-6" width={13}>
                                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                </svg>
                                8,Rue Corvetto - 75008 Paris
                            </p>
                            <p>
                                <svg
                                    data-name="Layer 1"
                                    viewBox="0 0 24 24"
                                    fill="#c69419"
                                    width="13"
                                >
                                    <path d="M8.71 14.29a1.002 1.002 0 00-1.09-.21.9.9 0 00-.54.54 1 1 0 101.84 0 1.147 1.147 0 00-.21-.33zm8 0a1.047 1.047 0 00-1.42 0 1.147 1.147 0 00-.21.33.99.99 0 00.21 1.09 1.147 1.147 0 00.33.21.941.941 0 00.76 0 1.16 1.16 0 00.33-.21.99.99 0 00.21-1.09 1.147 1.147 0 00-.21-.33zm2.6 4.605a4.97 4.97 0 001.784-4.817l-1.5-8A5 5 0 0014.68 2H9.319a5 5 0 00-4.913 4.078l-1.5 8a4.97 4.97 0 001.785 4.817l-1.398 1.398a1 1 0 101.414 1.414l1.87-1.87A5.006 5.006 0 007.818 20h8.362a5.006 5.006 0 001.243-.162l1.869 1.869a1 1 0 001.414-1.414zM6.37 6.447A3.002 3.002 0 019.32 4h5.362a3.002 3.002 0 012.948 2.447l.347 1.85a7.955 7.955 0 01-11.952 0zm12.117 10.469A2.99 2.99 0 0116.181 18H7.819a3 3 0 01-2.948-3.553l.711-3.792a9.954 9.954 0 0012.836 0l.71 3.792a2.99 2.99 0 01-.64 2.469z" />
                                </svg>
                                Metro : Miromesnil (ligne 9 et 13)
                                <h4 style={{ backgroundColor: "yellow" }}>9</h4>
                                <h4 style={{ backgroundColor: "cyan" }}>13</h4>
                            </p>
                            <p>
                                <svg
                                    viewBox="0 0 448 512"
                                    fill="#c69419"
                                    width="13"
                                >
                                    <path d="M224 0c124.8 0 224 35.2 224 80v336c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32H128v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-32c-17.7 0-32-14.3-32-32V80C0 35.2 99.2 0 224 0zM64 128v128c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zm16 272c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z" />
                                </svg>
                                Bus : 94 (lisbonne ou Mairie du 8eme)
                            </p>
                        </div>

                        <div>
                            <ul>
                                <li><p>Lundi</p>:<span> de 13h a 17h</span></li>
                                <li><p>Mardi</p>:<span> de 13h a 17h</span></li>
                                <li><p>Mercredi</p>:<span>de 13h a 17h</span></li>
                                <li><p>Jeudi</p>:<span> de 13h a 17h</span></li>
                                <li><p>Vendredi</p>:<span> de 13h a 17h</span></li>
                                <li><p>Samedi</p>:<span> de 13h a 17h</span></li>

                            </ul>
                        </div>

                        <div className='Location-rendez-vous'>
                            <h2>SUR RENDEZ-VOUS</h2>
                            <p>De 17h a 19h00</p>
                        </div>

                    </div>


                </div>

                <iframe
                    className='googlemaps'
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10495.939894302166!2d2.31498!3d48.877563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fb7d205ac4f%3A0xaa97489284390c3f!2sRachat%20or%20Paris%20et%20Rachat%20diamant%20Paris%20%7C%20vendre%20OR%20Paris%2C%20bijoux%2C%20diamant%2C%20montre%20-%20Anth%C3%A9or!5e0!3m2!1sfr!2sma!4v1703940101190!5m2!1sfr!2sma"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    )
}

export default Location