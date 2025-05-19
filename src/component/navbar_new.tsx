import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menuHamburger from "../assets/icons8-menu.svg";
import LogoTextHorizontal from "../assets/bg/text_logo.webp";
import LogoTextHVertical from "../assets/bg/text_logo-vertical.webp";
import useMediaQuery from "../hook/useMediaQuerys";
function Navbar() {
  const isWideScreen = useMediaQuery("(min-width:768px)");
  const [openNav, setOpenNav] = useState<boolean>(false);
  const phoneRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.documentElement.style.overflowY = openNav ? "hidden" : "auto";
  }, [openNav]);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        phoneRef.current &&
        !phoneRef.current?.contains(event.target as Node)
      ) {
        setOpenNav(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [phoneRef]);
  const MusicEffect = () => {
    const test = [1, 2, 3, 4, 5].map((i) => {
      const randomHeight = Math.floor(Math.random() * 10) + 1;
      return (
        <motion.div
        transition={{type:'spring',bounce:0.5}}
          key={i}
          className="animate-disco animate-(--disco) w-[2px] bg-white"
          style={{ animationDelay: `0.${randomHeight}s` }}
        />
      );
    });
    return <div className="w-fit h-8 p-2 flex gap-1 rotate-180">{test}</div>;
  };
  return (
    <>
      <AnimatePresence>
        {!openNav && (
          <motion.button
            onClick={() => setOpenNav((prev) => !prev)}
            animate={{ scale: 1, opacity: [0, 0.5, 1] }}
            exit={{ scale: [1.2, 0], opacity: [1, 0.5, 0] }}
            initial={{ scale: 1.3 }}
            transition={{ duration: 0.3 }}
            // whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.2 }}
            className="fixed top-2 right-2 bg-transparent z-[99] cursor-pointer"
          >
            <img width="60" height="60" src={menuHamburger} alt="iphone" />
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {openNav ? (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-black/60 z-40 backdrop-blur fixed w-full h-full flex flex-row-reverse max-md:items-center max-md:justify-center p-2"
          >
          {isWideScreen?<div className="absolute top-0 left-0 w-full h-screen"><img src={LogoTextHorizontal} alt="text_logo_horizontal" className="h-full pointer-events-none"/></div>:<div className=" absolute top-0 left-0"><img className="w-full pointer-events-none" alt="logo_text_vertical" src={LogoTextHVertical}/></div>}
            <motion.div
              ref={phoneRef}
              initial={{ x: 50, rotateZ: 50 }}
              exit={{ x: 100, rotateZ: 10 }}
              animate={{ x: 0, rotateZ: 0 }}
              className="w-80 h-[90%] max-h-[600px] bg-conic-330 bg-gray-950 rounded-xl relative p-3"
            >
              <div className="bg-gradient-to-t from-blue-950/50 to-white/30 w-full h-full rounded-xl px-3 pb-2 relative">
                <div className="w-60 h-5 rounded-bl-lg rounded-br-lg bg-gray-950 mx-auto border-b border-b-white/60 border-x border-x-white/60"></div>
                <div className="flex items-center gap-1 uppercase font-semibold">
                  <MusicEffect />
                  <p>Welcome!</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-full relative overflow-hidden h-28 bg-gradient-to-tr rounded-md from-cyan-500/75 to-cyan-300/40 uppercase flex flex-col-reverse justify-center items-center font-semibold text-base transition hover:shadow-[inset_2px_2px_86px_4px_#81e6d9,0px_0px_10px_2px_#81e6d9]">
                    Introduction
                    <img
                    loading="lazy"
                      alt="intro logo"
                      src="https://img.icons8.com/?size=50&id=WB3oQAyWBbjX&format=png&color=000000"
                    ></img>{" "}
                    <div className="absolute -top-5 -left-5 rotate-45 size-10 bg-cyan-500"></div>
                  </div>
                  <div className="w-full relative overflow-hidden h-28 bg-gradient-to-tr rounded-md from-pink-400/75 to-pink-300/40 uppercase flex flex-col-reverse justify-center items-center font-semibold text-base transition hover:shadow-[inset_2px_2px_86px_4px_#81e6d9,0px_0px_10px_2px_#81e6d9]">
                    Unit{" "}
                    <img
                    loading="lazy"
                      alt="unit logo"
                      src="https://img.icons8.com/?size=50&id=B2d60kgY5kou&format=png&color=000000"
                    ></img>{" "}
                    <div className="absolute -top-5 -left-5 rotate-45 size-10 bg-pink-400"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
export default Navbar;
