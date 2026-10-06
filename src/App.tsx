import { useState } from "react";

import "./App.css";
import Card from "./Card";
import List from "./List.tsx";
import Pawn from "./Pawn.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Willkommen</h1>
      <Pawn></Pawn>
      <Pawn></Pawn>
      <List></List>
      <List></List>
      <List></List>
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
}

export default App;
