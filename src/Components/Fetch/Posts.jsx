import { VscBug } from "react-icons/vsc";
function Posts() {
  return (
    <>
      <button
        onClick={() => {
          fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        }}
      >
        <VscBug />
        Get Data
      </button>
      <ul>
        <li>titulo de una publicacion</li>
        <li>titulo de una publicacion 2</li>
      </ul>
    </>
  );
}

export default Posts;
