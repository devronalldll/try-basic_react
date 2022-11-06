import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { App_Index } from "./Components/Basic/App_Index";
import { Component } from "./Components/Basic/Component";
import Product, { Navbar } from "./Components/Basic/Product"; //se exporta todo el componente
import { UserCard, UserCardEstruc } from "./Components/Basic/UserCard";
import { Button } from "./Components/Basic/Button";
import { Saludar } from "./Components/Basic/Saludar";
import { Page } from "./Components/on/ClickChange";
import Form from "./Components/on/Form";
import Fetch from "./Components/Fetch/Posts"; //Fetch = Posts
import Users from "./Components/Fetch/Users";
import Counter from "./Components/Hooks/UseState";
import UseEffect from "./Components/Hooks/UseEffect";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UseEffect />
    <Counter />
    <Users />
    <Fetch />
    <Form />
    <Page />
    <Saludar />
    <Button text="Click Me 1" ready={false} />
    <UserCardEstruc
      name="name ryan"
      amount={3000}
      married={false}
      points={[99, 33.3, 22.2]}
      address={{ street: "123street", city: "cityNewYork" }}
      greet={function () {
        alert("Hello");
      }}
    />
    <UserCard
      name="name ryan"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123street", city: "cityNewYork" }}
    />
    <Product title="props.title" />
    <Navbar navBar="{navBar}" name="name" />
    <Component />
    {App_Index()}
    <App_Index />
    <App />
  </React.StrictMode>
);
