export function Component() {
  const add = (a, b) => {
    return a + b;
  };
  return <h1>{add(10, 20)}</h1>;
}
 