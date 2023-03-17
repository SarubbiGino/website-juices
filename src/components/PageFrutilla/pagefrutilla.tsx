import React from 'react'
import "./pagefrutilla.css"
import 'animate.css';
import frutillaa from '../../img/2.png'


function page() {
  return (
    <div className='contenedorGeneralFrutilla'>
      <div className='contenedorFrutilla'>
        <div className='jugoFrutilla'  >
          <img src={frutillaa} alt="Jugo de Frutilla natural" className='imgFrutilla' />
        </div>
        <div className='detallesFrutilla  animate__animated animate__fadeInRight'>
          <div className='titulosFrutilla'>
            <h1 className='h1Frutilla'>Strawberry Juice</h1>
          </div>
          <p className='parrafoFrutilla'>¿Te encanta el sabor dulce y refrescante de las frutillas? Entonces no te pierdas nuestro delicioso jugo de frutilla natural, hecho con las frutillas más frescas y jugosas de los mejores campos de Argentina. Cada sorbo de nuestro jugo es una explosión de sabor y vitaminas, sin aditivos ni conservantes artificiales. Nuestro compromiso con la calidad comienza desde la selección de las frutillas más maduras y sabrosas, y continúa con un proceso de producción cuidadosamente controlado para asegurar un jugo fresco y delicioso en cada botella. ¡Descubre la diferencia con nuestro jugo de frutilla natural de los mejores campos de Argentina!
            !</p>
          <button className='btnFrutilla'>COMPRA AHORA</button>
          <button className='btn2Frutilla'>DESCUBRE MAS</button>
        </div>
      </div>
    </div>
  )
}




export default page