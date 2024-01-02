import React from 'react'
import img1 from "../../assets/img.jpg";
import img2 from "../../assets/img1.jpg";
import { FaQuoteLeft } from "react-icons/fa";

function AccueilSection3() {
    return (
        <section className='AccueilSection3_container'>
            <section className='AccueilSection3_firstsection'>

                <img src={img1} alt="store" />

                <div>
                    <h2 className='ANTHEOR-LOGO' style={{ fontSize: ".9rem" }}>ANTHEOR PARIS</h2>
                    <h1>Antheor Paris, un comptoir specialise <br /> a votre service</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eveniet soluta molestias cumque harum distinctio voluptates maiores tempora maxime fugit.</p>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus laudantium incidunt odit eius perspiciatis illo consequatur a animi ex expedita molestiae hic tempore ut porro rem, quos est modi distinctio nisi labore voluptatum ad eum! Reiciendis, voluptate inventore consequuntur quam tempora sunt at ducimus! Cumque non placeat accusantium ipsum dolorem!</span>
                </div>

            </section>

            <section className='AccueilSection3_secondsection'>
                <div className='AccueilSection3_long_p'>
                    <div className='AccueilSection3_long_line'></div>
                    <div className='AccueilSection3_long'>
                        <div className='icon'>
                            <FaQuoteLeft size={12} />
                        </div>
                        <div>
                            <h1>Rachat de bijoux: securise et confidentialite sont de mises</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae aperiam inventore recusandae aut asperiores dicta laudantium cupiditate dignissimos repellendus maiores.</p>
                        </div>
                    </div>
                </div>

                <div className='AccueilSection3_short_container'>
                    <div className='AccueilSection3_short'>
                        <div className='icon'>
                            <FaQuoteLeft size={17} color='lightgray' />
                        </div>
                        <div>
                            <h1>Une equipe de professionnels qualifies vous accueille</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae aperiam inventore recusandae aut asperiores dicta laudantium cupiditate dignissimos repellendus maiores.</p>
                        </div>
                    </div>

                    <div className='AccueilSection3_short'>
                        <div className='icon'>
                            <FaQuoteLeft size={17} color='lightgray' />
                        </div>
                        <div>
                            <h1>Rachat or et argent: nous vous achetons vos biens aux meilleures prix</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae aperiam inventore recusandae aut asperiores dicta laudantium cupiditate dignissimos repellendus maiores.</p>
                        </div>
                    </div>
                </div>

                <div className='AccueilSection3_long_p'>
                    <div className='AccueilSection3_long_line'></div>
                    <div className='AccueilSection3_long'>
                        <div className='icon'>
                            <FaQuoteLeft size={12} />
                        </div>
                        <div>
                            <h1>Rachat or et argent: une transaction transparente et equitable</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae aperiam inventore recusandae aut asperiores dicta laudantium cupiditate dignissimos repellendus maiores.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='AccueilSection3_firstsection'>

                <img src={img2} alt="" />

                <div className='AccueilSection3_firstsection_second'>
                    <h2 className='ANTHEOR-LOGO' style={{ fontSize: ".9rem" }}>ANTHEOR PARIS</h2>
                    <h1>Vendez vos bijoux et objects precieux <br /> dans un cadre legal</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eveniet soluta molestias cumque harum distinctio voluptates maiores tempora maxime fugit.</p>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus laudantium incidunt odit eius perspiciatis illo consequatur a animi ex expedita molestiae hic tempore ut porro rem, quos est modi distinctio nisi labore voluptatum ad eum! Reiciendis, voluptate inventore consequuntur quam tempora sunt at ducimus! Cumque non placeat accusantium ipsum dolorem!</span>
                </div>

            </section>
        </section>
    )
}

export default AccueilSection3