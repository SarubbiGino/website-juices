import React from 'react'
import "./page.css"
import fruti from '../img/fruti.png'
import frutillaa from '../img/frutillaa.png'


function page() {
  return (
      <div className='rectanguloUno' >
      <div className='contenedor'>
        <div className='detalles'>
          <div className='titulos'>
            <h1 className='h1'>Strawberry Juice </h1>
       
          </div>
          <p className='parrafo'>Disfruta del sabor natural y refrescante de nuestro jugo de frutilla, hecho con las mejores frutilla cultivadas en los campos más exquisitos de Argentina. Cada sorbo de nuestro jugo es una explosión de sabor y vitaminas, sin aditivos ni conservantes artificiales. Nuestro compromiso con la calidad comienza desde la selección de las frutillas más maduras y sabrosas, y continúa con un proceso de producción cuidadosamente controlado para asegurar un jugo fresco y delicioso en cada botella. ¡Descubre la diferencia con nuestro jugo de frutilla natural de los mejores campos de Argentina!</p>
          <button className='btn'>COMPRA AHORA</button>
          <button className='btn2'>DESCUBRE MAS</button>
        </div>
        <div className='jugo' >
        <img src={frutillaa} alt="Jugo de frutilla natural" className='img' />
        </div>
      </div>
      <div className='rectanguloDos'>
      </div>
          <img src={fruti} alt="Jugo de frutilla natural" className='img2' />
    </div>
  )
}


export default page