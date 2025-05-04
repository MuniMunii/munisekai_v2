import { useEffect, useState } from "react";
import "./App.css";
import OpeningComp from "./component/Opening";
import { motion } from "framer-motion";
import Navbar from "./component/navbar";
function App() {
  const [videoEnded, setVideoEnded] = useState<boolean>(true);
  useEffect(() => {
    console.log(videoEnded);
  }, [videoEnded]);
  return (
    <>
    <Navbar/>
        <OpeningComp videoEnded={videoEnded} setVideoEnded={setVideoEnded} />
        {videoEnded && (
            <div className="w-full h-screen bg-black font-sans text-9xl overflow-hidden p-2">
              <motion.p initial={{opacity:0,y: -20 }} whileInView={{opacity:1, y: 0 }} viewport={{amount: 0.5 }} transition={{type:'spring', bounce:40, stiffness:100}}>
                video ended
              </motion.p>
            </div>
        )}
    </>
  );
}

export default App;
