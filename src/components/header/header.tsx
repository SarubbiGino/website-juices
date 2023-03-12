import React from 'react'
import './Header.css'
import Naranja from '../../img/naranjacortada.png'

function header() {
    return (
        <div>
            <header className="header">
                <h1>OrangeJuice</h1>
                <nav className='Nav'>
                    <ul className='Ul'>
                        <li className='hrefs active'>Home</li>
                        <li className='hrefs'>Varations</li>
                        <li className='hrefs'>Frutilla</li>
                        <li className='hrefs'>Naranja</li>
                    </ul>
                </nav>
                <div className='contenedorNaranja'>
                    <img src={Naranja} alt="" />
                </div>
            </header>
        </div>
    )
}

export default header
