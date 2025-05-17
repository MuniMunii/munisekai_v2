import { useRef, useState } from "react";
import "./App.css";
import OpeningComp from "./component/Opening";
import Navbar from "./component/Navbar";
import Introduction from "./component/introduction";
import { BackgroundImageUrl } from "./component/ImageOptimization";
import ProgressBar from "./component/progressBar";
import { CarouselCharacter } from "./component/carousel";
function App() {
  const [videoEnded, setVideoEnded] = useState<boolean>(true);
  const divElement=useRef<HTMLDivElement>(null)
  return (
    <>
      <Navbar />
      <OpeningComp videoEnded={videoEnded} setVideoEnded={setVideoEnded} />
      {videoEnded && (
        <>
        <div style={{
            backgroundImage: BackgroundImageUrl({
              type: "img",
              url: "munisekai/bg/bg-repeat",
            }),
          }}>
        <Introduction/>
        <div ref={divElement} className="w-full h-[800px] relative"><ProgressBar ref={divElement} colorFrom="#33aaee" colorTo="#33ccbb"/><CarouselCharacter/></div>
        </div>
        </>
      )}
    </>
  );
}

export default App;
