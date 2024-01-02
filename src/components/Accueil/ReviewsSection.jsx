import React from 'react'
import Review from '../../widgets/Review'
import Line from "../../widgets/Line"
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import img1 from "../../assets/portrait1.jpg"
import img2 from "../../assets/portrait2.jpg"

function ReviewsSection() {
    return (
        <>
            <div className='Seperator'>
                <h2 className='ANTHEOR-LOGO'>ANTHEOR PARIS</h2>
                <h1>Ils Parlent De Nous</h1>
                <Line />
            </div>

            <section className='ReviewsSection'>
                <div className='ReviewsSectionNavigation'>
                    <div>
                        <FaChevronLeft size={12} />
                    </div>

                    <div>
                        <FaChevronRight size={12} />
                    </div>
                </div>

                <div className=''>
                    <div className='ReviewsSectionContainer'>
                        <Review name={"Miyah Myles"} review={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore qui itaque expedita dolore ipsum obcaecati laudantium sed voluptatum voluptate."} img={img2} />
                        <Review name={"Olive Mathews"} review={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore qui itaque expedita dolore ipsum obcaecati laudantium sed voluptatum voluptate."} img={img1} />
                    </div>
                    <div className='ReviewsSectiongoogle'>
                        <p>Lire d'autres avis de nos clients</p>
                        <div></div>
                        <a>Sur google</a>
                    </div>
                </div>


            </section>
        </>

    )
}

export default ReviewsSection