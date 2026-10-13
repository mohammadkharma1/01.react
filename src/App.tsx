import { useState } from "react";
import styles from './App.module.css'

import Card from "./Card";
import List from "./List.tsx";
import Pawn from "./Pawn.tsx";

function App() {
  

  return (
    <>
      <h1>Willkommen</h1>
      <div className={styles.cardcontainer}>
      <Pawn></Pawn>
      <Pawn></Pawn>
      <List></List>
      <List></List>
      <List></List>
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </>
  );
}

export default App;
