function Users() {
  const users = [
    {
      id: 1,
      name: "Juan",
      image: `https://robohash.org/user1`,
    },
    {
      id: 2,
      name: "Pedro",
      image: `https://robohash.org/user2`,
    },
    {
      id: 3,
      name: "Maria",
      image: `https://robohash.org/user3`,
    },
  ];
  return (
    <>
      <h2>Users</h2>
      <div>
        {users.map((user, i) => {
          return (
            <div key={i}>
              <h2>{user.name}</h2>
              <img src={user.image} alt={user.name} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Users;
