import { useState } from "react";
import styles from "./App.module.css";

import Card from "./Card";
import List from "./List";
import Pawn from "./Pawn";

function App() {
  // Liste von Bauern-Elementen für die Liste
  const meineBauern = [
    <Pawn color="white" position="a2" />,
    <Pawn color="white" position="b2" />,
    <Pawn color="black" position="e7" />
  ];

  return (
    <>
      <h1>Willkommen</h1>
      <div className={styles.cardcontainer}>
        {/* Einzelne Bauern mit Props */}
        <Pawn color="white" position="a2" />
        <Pawn color="black" position="e7" />

        {/* Die Liste mit den Bauern darin */}
        <List title="Bauern-Übersicht" items={meineBauern} />

        {/* Deine ursprünglichen Card-Komponenten bleiben genau so */}
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
