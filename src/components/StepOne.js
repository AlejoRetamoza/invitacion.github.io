import React from 'react'
import '../assets/css/StepOne.css'

export default function StepOne() {

  const gotoCivil = () => {
    window.location.href = "https://goo.gl/maps/q3LrzjZvZsPodv7X7?coh=178572&entry=tt"
  }
  const gotoParty = () => {
    window.location.href = "https://goo.gl/maps/eqpKJVEkPBgu2sTU7?coh=178572&entry=tt"
  }
  return (
    <div className='civil-content'>
      <div>
        <h2>Civil</h2>
        <p>
            El civil se realizara el dia 6 de marzo a las 10:30hs
            en el registro civil de quilmes
        </p>
        <button className='primary-button' onClick={gotoCivil}>Cómo llegar</button>
      </div>
      <div >
        <h2>Ceremonia y fiesta</h2>
        <p>
            Celebramos nuestro casamiento el 8 de marzo a 
            las 12:00hs en "la Paloma", Berazategui. <br/> 
            ¡Te esperamos!
        </p>
        <button className='primary-button' onClick={gotoParty}>Cómo llegar</button>
      </div>
    </div>
  )
}
