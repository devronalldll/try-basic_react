export function App_Index() {
  const married = true;
  function casado() {
    if (married) {
      return <p>Casado</p>;
    } else {
      return <p>Soltero</p>;
    }
  }
  const user = {
    name: "Juan",
    age: 25,
  };
  const add = (a, b) => {
    return a + b;
  }

  return (
    <div>
      <h1>Este es un Componente</h1>
      <h2>{JSON.stringify(user)}</h2>
      <ul >
        <li>{user.name}</li>
        <li>{user.age}</li>
        <li>{married.toString()}</li>
        <li>{add(1, 2)}</li>
      </ul>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
        perspiciatis iure. Amet quos culpa aut maiores ducimus, esse
        necessitatibus ea labore inventore quo corrupti, corporis voluptatum
        voluptate illum ratione modi!
      </p>
      {casado()}
      <h1>{married ? "Casado 💍" : "Soltero 🙍‍♂️"}</h1>
      <hr />
    </div>
  );
}
// function sumar(x,y) {
//   return x + y;
// }
export default App_Index;
