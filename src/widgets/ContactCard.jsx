import React from 'react'
import "./widgets.css"

function ContactCard({icon , text}) {
    return (
        <div className='Contact-card'>
            <div className='Contact-card-icon'>
                {icon}
            </div>

            <div className='Contact-card-text'>
                {text}
            </div>
        </div>
    )
}

export default ContactCard