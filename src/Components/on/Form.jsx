import React from "react";

export default function Form() {
  return (
    <form
      onSubmit={(e) => {
        alert("Formulario enviado");
        e.preventDefault();
      }}
    >
      <h2>Register Form</h2>
      <button>Send</button>
    </form>
  );
}
