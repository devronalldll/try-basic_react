export function UserCard(props) {
  console.log(props);
  return (
    <div>
      <h3 >UserCard</h3>
        <p>{props.name}</p>
        <p>{props.amount}</p>
        <p>{props.married ?"💍":"😎"}</p>
      <li>
            <ul>City: {props.address.city} </ul>
            <ul>Address: {props.address.street} </ul>
      </li>
    </div>
  );
}

export function UserCardEstruc({name,amount,married,address,greet})  {
    console.log("greet",name,amount,married,address,greet);
    const cardStyle={background:"#0f0f0f",padding:"10px",borderRadius:"10px",margin:"10px"}
    return (        
      <div>
        <h3>UserCard</h3>
        <div style={{display:"flex" , justifyContent:"center",background:"#000",borderRadius:"10px",fontWeight:"bold"}}>
          <p>{name}</p>
          <p>{amount}</p>
          <p>{married ?"💍":"😎"}</p>
        </div>
        <li style={cardStyle}>
              <ul>City: {address.city} </ul>
              <ul>Address: {address.street} </ul>
        </li>
        <hr />
      </div>

    );
  }
