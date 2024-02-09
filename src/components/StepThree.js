import React from 'react'
import '../assets/css/StepThree.css'


export default function StepThree() {

  const safePath = require.context('../assets/static/', true);

  const cvu = "0720043488000039263140";

  const copyCVUToClipboard = () => {
    const input = document.createElement("input");
    input.value = cvu;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    alert(
      "Cbu copiado, ya podes pegar el cbu en tu cuenta para transferir dinero!"
    );
  };
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
    <div className="step-three">
    <div className="card">
      <img src={safePath("./dresscode.png")} alt="" />
      <p>Dresscode:</p>
      <h2>Elegante</h2>
    </div>
    <div className="card">
      <img src={safePath("./gift.png")} alt="" />
      <p>Si deseas hacernos un regalo</p>
      <button className="primary-button" onClick={gotoGiftList}>
        Ver lista
      </button>
    </div>
    <div className="card">
    <img src={safePath("./cbu.png")} alt="" />
      <h3>Si deseas colaborar con nuestra luna de miel</h3>
      <p>Alias: camila.pedrucci</p>
      <button className="primary-button" onClick={copyCVUToClipboard}>
        Copiar CBU
      </button>
    </div>
    <div className="step-three-confirm">
      <p>
        Gracias por acompañarnos en este momento tan especial <br></br>
        confirmar antes del 23/2
      </p>
      <button className="primary-button" onClick={sendConfirm}>
        Confirmar asistencia
      </button>
    </div>
  </div>
  )
}
