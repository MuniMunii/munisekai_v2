import { useRef, useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import OpeningComp from "./component/opening_new";
// import Introduction from "./component/introduction";
import { BackgroundImageUrl } from "./component/ImageOptimization";
import ProgressBar from "./component/progressBar";
// import  CarouselCharacter  from "./component/carousel/carousel";
// import Lenis from "@studio-freight/lenis";
// import {ReactLenis,useLenis} from 'lenis/react'
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion";
function App() {
  const lenisRef = useRef<LenisRef>(null);
  const [videoEnded, setVideoEnded] = useState<boolean>(localStorage.getItem("videoEnded") === "true");
  const NavbarLazy = lazy(() => import("./component/navbar_new"));
  const CarouselCharacter = lazy(() => import("./component/carousel/carousel"));
  // const OpeningComp=lazy(()=> import('./component/opening_new'))
  const Introduction = lazy(() => import("./component/introduction"));
  const divElement = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }
    frame.update(update, true);
    return () => {
      cancelFrame(update);
    };
  }, []);
  return (
    <>
      <ReactLenis
        root
        options={{
          autoRaf: false,
          duration: 1.6,
          smoothWheel: true,
          wheelMultiplier: 1.2,
          touchMultiplier: 2,
        }}
        ref={lenisRef}
      >
        <Suspense>
          <NavbarLazy />
        </Suspense>
        <OpeningComp videoEnded={videoEnded} setVideoEnded={setVideoEnded} />
        {videoEnded && (
          <>
            <div
              style={{
                backgroundImage: BackgroundImageUrl({
                  type: "img",
                  url: "munisekai/bg/bg-repeat",
                }),
              }}
            >
              <Suspense>
                <Introduction />
              </Suspense>
              <div
                ref={divElement}
                className={`w-full h-full min-h-screen relative p-6 bg-cover `}
                style={{
                  backgroundImage: BackgroundImageUrl({
                    type: "img",
                    url: "munisekai/bg/bg_2",
                  }),
                }}
              >
                <div className="absolute size-full left-0 top-0 bg-white/10 backdrop-blur-xs z-[0]" />
                <div className="z-30">
                  <ProgressBar
                    title="Unit"
                    refTarget={divElement}
                    colorFrom="#33aaee"
                    colorTo="#05df72"
                  />
                  <Suspense>
                    <CarouselCharacter />
                  </Suspense>
                </div>
              </div>
            </div>
          </>
        )}
      </ReactLenis>
    </>
  );
}

export default App;
