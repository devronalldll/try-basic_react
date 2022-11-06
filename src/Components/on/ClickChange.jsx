export function Page() {
  const HandleChange=(e)=>{
    {console.log(e.target.value+"...")}
  }
  return (
    <>
      <button
        onClick={function () {
          alert("input seleccionado");
        }}
      >
        Button Handler
      </button>
      {/* <input id="idHola "type="text" onChange={function(e){console.log(e.target.id)}} /> */}
      {/* <input id="idHola "type="text" onChange={function(e){console.log(e.target.value+"...")}} /> */}
      <input id="idHola "type="text" onChange={HandleChange} />
    </>
  );
}
