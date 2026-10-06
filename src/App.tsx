import { useState } from "react";

import "./App.css";
import Card from "./Card";
import List from "./List.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Willkommen</h1>
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
