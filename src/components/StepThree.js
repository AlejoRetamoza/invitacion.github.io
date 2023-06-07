import React from 'react'
import '../assets/css/StepThree.css'


export default function StepThree() {

  const safePath = require.context('../assets/static/', true);

  const gotoPlayList = () => {
    window.location.href = 'https://open.spotify.com/playlist/2sxWHQKtZoY2fT70i915mD?si=Lix8KrtgSuCLdzWSjYsneQ&utm_source=copy-link&nd=1'
  }

  const gotoGiftList = () => {
    alert('Elegí que te gustaria regalarnos y borralo de la lista!')
    window.location.href = 'https://docs.google.com/spreadsheets/d/1HYgJ6NHI3-fwYaVHYbYXLdtzyMDCPUBgOJZYFNPlzkA/edit?usp=sharing'
  }

  const sendConfirm = () => {

    let text = 'Confirmo la invitación';
    const number = localStorage.getItem('tel');

    window.location.href =`https://wa.me/${number}?text=${text}`;
  }

  return (
    <div className='step-three'>
      <div className='step-three-music'>
        <img src={safePath('./musica.jpg')} alt="" />

        <p>¿Qué canciones no pueden faltar?</p>
        <button className='secondary-button' onClick={gotoPlayList}>Agregala a la playlist</button>
      </div>
      <div className='step-three-dresscode'>
        <p>Dresscode:</p>
        <h2>Formal/Elegante</h2>
        <img src={safePath('./dress.jpg')} alt="" />
      </div>
      <div className='step-three-gift'>
        <img src={safePath('./regalo.jpg')} alt="" />
        <p>Si deseas hacernos un regalo</p>
        <button className='secondary-button' onClick={gotoGiftList}>Ver lista</button>
      </div>
      <div className='step-three-confirm'>
        <p>Gracias por acompañarnos en este momento tan especial
            ¡Te esperamos!
        </p>
        <button className='primary-button' onClick={sendConfirm}>Confirmar invitación</button>
      </div>
    </div>
  )
}
