import { useState } from "react";
import "./App.css";
import OpeningComp from "./component/Opening";
import Navbar from "./component/Navbar";
import Introduction from "./component/introduction";
function App() {
  const [videoEnded, setVideoEnded] = useState<boolean>(true);
  return (
    <>
      <Navbar />
      <OpeningComp videoEnded={videoEnded} setVideoEnded={setVideoEnded} />
      {videoEnded && (
        <Introduction/>
      )}
    </>
  );
}

export default App;
