import React from "react";
import Organic from "./components/signwall/Organic";
import PianoCore from "./piano/core";

//----------TROME----------COMERCIO------
const aid = "6UafT9Fjsu"; /*"PeVZORGJsu"*/

export default function PianoApp() {

  React.useEffect(() => {
    //primera carga
    PianoCore(aid);
  }, []);
  return (
    <>
      {
        <Organic aid={aid} />
        // <PianoForm />
      }
    </>
  );
}
