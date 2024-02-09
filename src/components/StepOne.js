import React from "react";
import "../assets/css/StepOne.css";

export default function StepOne() {
  const gotoCivil = () => {
    window.location.href =
      "https://goo.gl/maps/q3LrzjZvZsPodv7X7?coh=178572&entry=tt";
  };
  const gotoParty = () => {
    alert("El salón 4 está junto al 3")
    window.location.href =
      "https://goo.gl/maps/eqpKJVEkPBgu2sTU7?coh=178572&entry=tt";
  };
  return (
    <div className="civil-content">
      <div>
        <h2>Civil</h2>
        <p>Día 7 de marzo a las 11:40hs en el Registro Civil de Quilmes</p>
        <button className="primary-button" onClick={gotoCivil}>
          Cómo llegar
        </button>
      </div>
      <div>
        <h2>Ceremonia y fiesta</h2>
        <p>
          Día 8 de marzo a las 21:30hs en el salón de eventos "La Paloma" N°4,
          Berazategui.
        </p>
        <button className="primary-button" onClick={gotoParty}>
          Cómo llegar
        </button>
      </div>
    </div>
  );
}
