import { useEffect, useState,useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menuHamburger from "../assets/icons8-menu.svg";
function Navbar() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const phoneRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(openNav);
    document.documentElement.style.overflowY = openNav ? "hidden" : "auto";
    
  }, [openNav]);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
        if(phoneRef.current&&!phoneRef.current?.contains(event.target as Node)){setOpenNav(false)}
        }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [phoneRef]);
  return (
    <>
    <AnimatePresence>
      {!openNav&&<motion.button
        onClick={() => setOpenNav((prev) => !prev)}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        initial={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.2 }}
        className="fixed top-2 left-2 bg-transparent z-[99]"
      >
        <img width="60" height="60" src={menuHamburger} alt="iphone" />
      </motion.button>}
      </AnimatePresence>
      <AnimatePresence>
        {openNav ? (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-black/60 z-40 fixed w-full h-full flex flex-row-reverse max-md:items-center max-md:justify-center p-2"
          >
            <motion.div ref={phoneRef} initial={{x:50,rotateZ:50}} exit={{x:100,rotateZ:10}} animate={{x:0,rotateZ:0}} className="w-80 h-[90%] max-h-[700px] bg-black rounded-lg"></motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
export default Navbar;
