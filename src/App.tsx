import styles from "./App.module.css";
import { randomNumber } from "./random.words.tsx";

import Card from "./Card";
import List from "./List";
import Pawn from "./Pawn";

const randomItems: string[] = [];

export function App() {
  const meineBauern = [
    <Pawn color="white" position="a2" />,
    <Pawn color="white" position="b2" />,
    <Pawn color="black" position="e7" />,
  ];

  return (
    <>
      <h1>Willkommen</h1>

      <div className={styles.cardcontainer}>
        {}
        <Pawn color="white" position="a2" />
        <Pawn color="black" position="e7" />

        {}
        <List title="Bauern-Übersicht" items={meineBauern} />

        {}
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

        <div>
          <div>
  {randomNumber.map((item, index) => (
    <p key={index} className={styles["random-words"]}>
      {item.word} - {item.number}
    </p>
  ))}
</div>
        </div>
      </div>
    </>
  );
}
