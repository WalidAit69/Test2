import React, { useEffect, useState } from 'react'

function NavLinks() {

    const category = [
        {
            name: "Accueil",
            IsDropDown: false,
        },
        {
            name: "Rachat Or",
            IsDropDown: true,
        },
        {
            name: "Argent",
            IsDropDown: true,
        },
        {
            name: "Argenterie",
            IsDropDown: false,
        },
        {
            name: "Bijoux",
            IsDropDown: true,
        },
        {
            name: "Antiquites",
            IsDropDown: false,
        },
        {
            name: "Diamants",
            IsDropDown: false,
        },
        {
            name: "Montres",
            IsDropDown: false,
        },
        {
            name: "Tableaux",
            IsDropDown: false,
        },
        {
            name: "Contact",
            IsDropDown: false,
        },
        {
            name: "Plan d'acces",
            IsDropDown: false,
        },
        {
            name: "Qui sommes-nous",
            IsDropDown: false,
        },
        {
            name: "Blog",
            IsDropDown: false,
        },
    ]

    const [active, setactive] = useState(0);

    return (
        <nav className='NavLinks'>
            <div className='NavLinks-container'>
                {category.map((cat, index) => (
                    <div
                        key={cat.name}
                        className={`NavLink ${index === active ? 'navlink-active' : ''}`}
                        onClick={() => setactive(index)}
                    >
                        {!cat.IsDropDown ? <a>{cat.name}</a> : <a className='dropdown-link'>{cat.name} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                        </a>}
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default NavLinks