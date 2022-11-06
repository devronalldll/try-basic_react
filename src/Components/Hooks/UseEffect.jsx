import { useState } from "react";
import { useEffect } from "react";

function UseEffect() {
    const [message, setMessage] = useState("");
  //   useEffect(() => {
  //     console.log("useEffect");
  //   }); // se ejecuta siempre que la pagina tenga alun cambio
  useEffect(() => {
    console.log("useEffect");
  }, []); //solamente se ejecuta una vez [] = no tiene dependencias
  useEffect(() => {
    console.log("useEffect");
  }, [message]); //se ejecuta cuando el valor de message cambia [] = dependencia != vacio
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
        <input type="text" onChange={(e) => setMessage(e.target.value)} />
        <button
          type="text"
          onClick={() => {
            alert(message);
          }}
        >
          Message
        </button>
      </div>      
      <hr />
    </>
  );
}

export default UseEffect;
