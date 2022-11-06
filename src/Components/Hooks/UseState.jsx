import { useState } from "react";

function UseState() {
  function CounterMaunal() {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState("");
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center", gap:"5px"}}>
            <input type="text" onChange={e=>setMessage(e.target.value)} />
          <button
            type="text"
            onClick={() => {
              alert(message);
            }}
          >
            Message
          </button>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>Counter : {counter} </h2>
          <button
            style={{ margin: "10px" }}
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            +
          </button>
          <button
            style={{ margin: "10px" }}
            onClick={() => {
              setCounter(0);
            }}
          >
            0
          </button>
          <button
            style={{ margin: "10px" }}
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            -
          </button>
        </div>
      </>
    );
  }
  return <CounterMaunal />;
}
export default UseState;
