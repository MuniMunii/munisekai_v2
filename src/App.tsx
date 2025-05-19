import { useRef, useState,useEffect,lazy, Suspense } from "react";
import "./App.css";
import OpeningComp from "./component/Opening";
import Introduction from "./component/introduction";
import { BackgroundImageUrl } from "./component/ImageOptimization";
import ProgressBar from "./component/progressBar";
import { CarouselCharacter } from "./component/carousel";
import Lenis from "@studio-freight/lenis";
function App() {
  const [videoEnded, setVideoEnded] = useState<boolean>(true);
  const NavbarLazy=lazy(()=> import('./component/Navbar'))
  const divElement=useRef<HTMLDivElement>(null)
  useEffect(()=>{
  const lenis=new Lenis({
  duration:1,
  // easing:(t)=>Math.min(1,1.001-Math.pow(2,-10*t)),
  smoothWheel:true})
  function raf(time:number){
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  return ()=> lenis.destroy()
  },[])
  return (
    <>
    <Suspense>
      <NavbarLazy />
      </Suspense>
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
        <div ref={divElement} style={{background:BackgroundImageUrl({type:'img',url:'munisekai/bg/bg_2'}),backgroundRepeat:'no-repeat',backgroundSize:'100% 100%'}} className="backdrop-blur-3xl bg-white/30 w-full min-h-screen relative p-6"><ProgressBar title="Unit" refTarget={divElement} colorFrom="#33aaee" colorTo="#05df72"/><CarouselCharacter/></div>
        </div>
        </>
      )}
    </>
  );
}

export default App;
