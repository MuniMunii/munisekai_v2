import { useRef, useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import OpeningComp from "./component/opening_new";
import {
  BackgroundImageUrl,
  ImageOptimization,
} from "./component/ImageOptimization";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion";
import ListContent from "./component/list_content";
import SideLabel from "./component/side_label";
import { dummyObject } from "./data";
import {motion} from "framer-motion";
function App() {
  const lenisRef = useRef<LenisRef>(null);
  const [videoEnded, setVideoEnded] = useState<boolean>(
    localStorage.getItem("videoEnded") === "true"
  );
  const [randomChar, setRandomChar] = useState<CharProps | null>(null);
  const [randomGroup, setRandomGroup] = useState<GroupProps | null>(null);
  const NavbarLazy = lazy(() => import("./component/navbar_new"));
  const CarouselCharacter = lazy(() => import("./component/carousel/carousel"));
  const Introduction = lazy(() => import("./component/introduction"));
  const divElement = useRef<HTMLDivElement>(null);
  // const SideLabel= lazy(() => import("./component/side_label"));
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
useEffect(() => {
  const groupRandom = dummyObject[Math.floor(Math.random() * dummyObject.length)];
  const charRandom =groupRandom.char.filter(char=>char.halfImg!=="");
  const charRandomIndex: CharProps=charRandom[Math.floor(Math.random() * charRandom.length)]
  setRandomChar(charRandomIndex);
    setRandomGroup(groupRandom);
}, []);
useEffect(() => {console.log(randomChar)},[randomChar])
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
          {videoEnded && (
            <>
              <NavbarLazy />
              <SideLabel />
            </>
          )}
        </Suspense>
        <OpeningComp videoEnded={videoEnded} setVideoEnded={setVideoEnded} />
        {videoEnded && (
          <>
            <div
              className="relative"
              style={{
                backgroundImage: BackgroundImageUrl({
                  type: "img",
                  url: "munisekai/bg/bg_repeat_new",
                }),
              }}
            >
              <div className="w-full h-4 absolute -top-2 left-0 bg-cyan-primary" />
              <ListContent />
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
              <div id="news" className="min-h-screen w-full flex flex-row justify-between my-10 gap-5 max-lg:flex-col">
                <div
                  style={{
                    backgroundImage: BackgroundImageUrl({
                      type: "img",
                      url: "munisekai/bg/miya_rooftop",
                    }),
                  }}
                  className="max-w-[600px] w-[90%] h-[600px] bg-cover rounded-tr-3xl rounded-br-3xl overflow-hidden"
                >
                  <div className="size-full bg-ichika/10 backdrop-blur-[4px] p-6 flex flex-col items-center gap-4">
                    <ImageOptimization
                      url="munisekai/logo/logo_pjsk"
                      className="w-80"
                    />
                    <div className="flex bg-white/60 rounded-md h-24 w-full items-center justify-evenly">
                      <motion.a className="" href="#"><ImageOptimization url="munisekai/logo/icon_app" height={60} className="hover:shadow-[inset_2px_2px_86px_4px_#81e6d9,0px_0px_10px_2px_#81e6d9]"/></motion.a>
                      <motion.a className="" href="#"><ImageOptimization url="munisekai/logo/icon_apple" height={64} className="hover:shadow-[inset_2px_2px_86px_4px_#81e6d9,0px_0px_10px_2px_#81e6d9]"/></motion.a>
                    </div>
                    <div className="bg-white/60 w-full h-fit p-8 text-gray-600 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At excepturi beatae asperiores, expedita hic eius illum iste facilis qui in velit aspernatur ducimus libero officiis enim dolore inventore accusamus neque ratione recusandae placeat repudiandae. Reiciendis unde deleniti necessitatibus ab, pariatur tempora molestias, optio aspernatur enim laboriosam facere obcaecati. Exercitationem, perspiciatis.</div>
                    <div className="text-xs text-gray-600 italic">
                      <p>Google Play は Google LLC の商標です。</p>
                      <p>AppleとAppleのロゴ、App Storeは、米国およびその他の国で登録されたApple Inc.の商標です。</p>
                      <p>画像や動画は開発中のものです.</p>
                    </div>
                  </div>
                </div>
                <div style={{backgroundImage:BackgroundImageUrl({type:'img',url:'munisekai/bg/kami_classroom_empty'})}} className="max-w-[500px] w-[90%] flex max-md:flex-col h-[400px] p-10 justify-end items-center relative my-auto bg-cover rounded-tl-3xl rounded-bl-3xl max-lg:self-end">
                  <ImageOptimization url={`${randomChar?.halfImg}`} width={300} height={380} className="size-[80%] max-w-[300px] max-h-[380px] absolute bottom-0 left-0 z-20"/>
                  <div className="flex z-10">
                                      <div className="w-fit px-6 py-3 sm:text-4xl h-fit text-nowrap rounded-bl-4xl max-md:absolute max-md:top-3 max-sm:text-[8vw] max-md:left-3 md:[writing-mode:vertical-lr]" style={{backgroundColor:randomChar?.imageColor}}>{randomChar?.name}</div>
                                      <div className="text-xs px-4 rounded-br-md rounded-tr-md max-md:absolute max-md:top-3 max-md:left-3 md:[writing-mode:vertical-lr]" style={{backgroundColor:randomGroup?.color}}>{randomGroup?.groupName}</div>
                  </div>
                </div>
              </div>
              <div className="w-full h-20 bg-cyan-primary text-black text-center">
                <p className="font-bold">This is not an official website</p>
                <p className="font-bold">I do not own the image, Logo, character,etc...</p>
                <p className="">This is my personal playground project. Playing with animation, layout and styling</p>
              </div>
            </div>
          </>
        )}
      </ReactLenis>
    </>
  );
}

export default App;
