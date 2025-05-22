import { useRef, useState,useEffect,lazy, Suspense } from "react";
import "./App.css";
import OpeningComp from "./component/opening_new";
import Introduction from "./component/introduction";
import { BackgroundImageUrl } from "./component/ImageOptimization";
import ProgressBar from "./component/progressBar";
import { CarouselCharacter } from "./component/carousel/carousel";
import Lenis from "@studio-freight/lenis";
function App() {
  const [videoEnded, setVideoEnded] = useState<boolean>(true);
  const NavbarLazy=lazy(()=> import('./component/navbar_new'))
  const divElement=useRef<HTMLDivElement>(null)
useEffect(() => {
  let lenis: Lenis | null = null;
  const handleWheel = (e: WheelEvent) => {
    const isTouchpad = Math.abs(e.deltaY) < 50;
    if (isTouchpad) {
      // Touchpad detected — no Lenis
      window.removeEventListener('wheel', handleWheel);
    } else {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1.2,
      });
      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      window.removeEventListener('wheel', handleWheel);
    }
  };
  window.addEventListener('wheel', handleWheel, { passive: true });
  return () => {
    lenis?.destroy();
    window.removeEventListener('wheel', handleWheel);
  };
}, []);
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
        <div ref={divElement} className=" w-full h-full relative p-6"><ProgressBar title="Unit" refTarget={divElement} colorFrom="#33aaee" colorTo="#05df72"/><CarouselCharacter/></div>
        </div>
        </>
      )}
    </>
  );
}

export default App;
