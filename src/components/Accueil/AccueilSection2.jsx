import React from 'react'
import Line from '../../widgets/Line'
import img1 from "../../assets/Color-Fill-592.jpg";
import img2 from "../../assets/Rectangle-5781.jpg";
import img3 from "../../assets/Rectangle-5782.jpg";
import img4 from "../../assets/Color-Fill-598.jpg";
import img5 from "../../assets/diamond-classic.jpg";
import img6 from "../../assets/Rectangle-5783.jpg";
import img7 from "../../assets/Rectangle-5784.jpg";

function AccueilSection2() {

  const category = [
    {
      title: "OR",
      description: "Debris d'or - Or casse - Or dentaire Medailles - Bracelets Colliers... a 32$ le gramme de 18k et jusqu'a 50$/g",
      img: img1,
    },
    {
      title: "OR",
      description: "Debris d'or - Or casse - Or dentaire Medailles - Bracelets Colliers... a 32$ le gramme de 18k et jusqu'a 50$/g",
      img: img2,
    },
    {
      title: "OR",
      description: "Debris d'or - Or casse - Or dentaire Medailles - Bracelets Colliers... a 32$ le gramme de 18k et jusqu'a 50$/g",
      img: img3,
    },
    {
      title: "OR",
      description: "Debris d'or - Or casse - Or dentaire Medailles - Bracelets Colliers... a 32$ le gramme de 18k et jusqu'a 50$/g",
      img: img4,
    },
    {
      title: "OR",
      description: "",
      img: img5,
    },
    {
      title: "OR",
      description: "Debris d'or - Or casse - Or dentaire Medailles - Bracelets Colliers... a 32$ le gramme de 18k et jusqu'a 50$/g",
      img: img6,
    },
    {
      title: "OR",
      description: "Debris d'or - Or casse - Or dentaire Medailles - Bracelets Colliers... a 32$ le gramme de 18k et jusqu'a 50$/g",
      img: img7,
    },
  ]
  return (
    <section>
      <div className='Seperator'>
        <h2 className='ANTHEOR-LOGO'>ANTHEOR PARIS</h2>
        <h1>Nous achetons, aux meilleurs prix, et comptant</h1>
        <Line />
      </div>

      <div className='grid_container'>
        <div className='grid_container1' style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", position: "relative" }}>
          {category.slice(0, 4).map((item, index) => (
            <div className='grid_container1div' key={index} style={{ position: "relative" }}>
              <img src={item.img} alt={item.title} style={{ maxWidth: "100%" }} />
              <div className='grid_container_info'>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>

          ))}

        </div>
        <div
          className='grid_container2'
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1.4rem",
            marginRight: "14px",
          }}
        >
          {category.slice(4).map((item, index) => (
            <div className='grid_container2div' key={index} style={{ position: "relative" }}>
              <img src={item.img} alt={item.title} style={{ maxWidth: "100%" }} />
              <div className='grid_container_info'>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  )
}

export default AccueilSection2