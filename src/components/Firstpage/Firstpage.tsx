import React from 'react'
import "./Firstpage.css"
import Jugo from "../../img/grid.png"


function Firstpage() {
  return (
    <div className='rectanguloUno' >
      <div className='contenedor'>
        <div className='jugo' >
          <img src={Jugo} alt="Jugo de naranja natural" className='img' />
        </div>
        <div className='detalles' >
          <div className='titulos'>
            <h1 className='h1'>Orange </h1>
            <h1 className='h1'>Juice </h1>
          </div>
          <p className='parrafo'>Disfruta del sabor natural y refrescante de nuestro jugo de naranja recién exprimido, hecho con las mejores naranjas cultivadas en los campos más exquisitos de Argentina. Cada sorbo de nuestro jugo es una explosión de sabor y vitaminas, sin aditivos ni conservantes artificiales. Nuestro compromiso con la calidad comienza desde la selección de las naranjas más maduras y jugosas, y continúa con un proceso de producción cuidadosamente controlado para asegurar un jugo fresco y delicioso en cada botella. ¡Descubre la diferencia con nuestro jugo de naranja natural de los mejores campos de Argentina!</p>
          <button className='btn'>COMPRA AHORA</button>
          <button className='btn2'>DESCUBRE MAS</button>
        </div>
      </div>
      <div className='rectanguloDos'>
      </div>
    </div>
  )
}


export default Firstpage
