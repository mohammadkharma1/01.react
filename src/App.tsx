import { useState } from "react";
import styles from "./App.module.css";

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
        <Card
          title="peter"
          text="Das ist Peter"
          image="https://www.hchard.at/wp-content/uploads/2015/09/Sebastian-Kainz-640x360.jpg"
        />
        <Card
          title="susi"
          text="super susi"
          image="https://www.hchard.at/wp-content/uploads/2015/09/Sebastian-Kainz-640x360.jpg"
        />
        <Card
          title="paul"
          text="super paul"
          image="https://www.hchard.at/wp-content/uploads/2015/09/Sebastian-Kainz-640x360.jpg"
        />
      </div>
    </>
  );
}

export default App;
