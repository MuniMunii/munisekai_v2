import { useRef, useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import OpeningComp from "./component/opening_new";
import { BackgroundImageUrl } from "./component/ImageOptimization";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion";
import ListContent from "./component/list_content";
function App() {
  const lenisRef = useRef<LenisRef>(null);
  const [videoEnded, setVideoEnded] = useState<boolean>(
    localStorage.getItem("videoEnded") === "true"
  );
  const NavbarLazy = lazy(() => import("./component/navbar_new"));
  const CarouselCharacter = lazy(() => import("./component/carousel/carousel"));
  const Introduction = lazy(() => import("./component/introduction"));
  const divElement = useRef<HTMLDivElement>(null);
  const SideLabel= lazy(() => import("./component/side_label"));
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
          {videoEnded&& <SideLabel/>}
          <NavbarLazy />
        </Suspense>
        <OpeningComp videoEnded={videoEnded} setVideoEnded={setVideoEnded} />
        {videoEnded && (
          <>
            <div
            className="relative"
              style={{
                backgroundImage: BackgroundImageUrl({
                  type: "img",
                  url: "munisekai/bg/bg-repeat",
                }),
              }}
            >
                  <div className="w-full h-4 absolute -top-2 left-0 bg-cyan-primary"/>
              <ListContent/>
              <Suspense>
                <Introduction />
              </Suspense>
              {/* carousel */}
              <div
                ref={divElement}
                className={`w-full h-full min-h-screen relative p-6 bg-[100% 100%] `}
                style={{
                  backgroundImage: BackgroundImageUrl({
                    type: "img",
                    url: "munisekai/bg/bg_2",
                  }),
                }}
              >
                <div className="absolute size-full left-0 top-0 bg-white/10 backdrop-blur-xs z-[0]" />
                <div className="z-30">
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
