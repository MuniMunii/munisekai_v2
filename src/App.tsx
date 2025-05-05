import { useEffect, useState } from "react";
import "./App.css";
import OpeningComp from "./component/Opening";
import { motion } from "framer-motion";
import Navbar from "./component/Navbar";
import {
  BackgroundImageUrl,
  ImageOptimization,
} from "./component/ImageOptimization";
function App() {
  const [videoEnded, setVideoEnded] = useState<boolean>(true);
  useEffect(() => {
    console.log(videoEnded);
  }, [videoEnded]);
  return (
    <>
      <Navbar />
      <OpeningComp videoEnded={videoEnded} setVideoEnded={setVideoEnded} />
      {videoEnded && (
        <div
          className="w-full overflow-hidden bg-cover text-slate-700 relative pt-10"
          style={{
            backgroundImage: BackgroundImageUrl({
              type: "img",
              url: "munisekai/bg/bg-repeat",
            }),
          }}
        >
          <div className="w-full h-4 absolute -top-2 left-0 bg-cyan-primary"></div>
          {/* first row */}
          <div className="flex flex-row justify-start mb-28 max-md:flex-col gap-x-18">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once:true, amount: 0.5 }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                type: "spring",
                damping: 30,
                stiffness: 100,
              }}
              className="w-[90%] max-w-[700px] h-fit border-b border-r border-b-cyan-primary border-r-cyan-primary pr-2 pb-2 rounded-br-[50px]"
            >
              <ImageOptimization
                className="rounded-br-[50px] pointer-events-none"
                url="munisekai/bg/beyond_ichika"
              />
            </motion.div>
            <div className="w-3/4 max-w-[400px] px-2 max-md:mx-0 max-md:px-4 leading-10">
              <motion.h2
                className="text-cyan-primary text-6xl leo-before relative uppercase"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.8 }}
              >
                Introduction
              </motion.h2>
              <motion.p
                className=""
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.8 }}
                transition={{ delay: 0.1 }}
              >
                The game is set in Shibuya, Tokyo.
              </motion.p>
              <motion.span
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                viewport={{ amount: 0.8 }}
                transition={{ delay: 0.2 }}
              >
                A girl named Hoshino Ichika walks through the streets {""}
              </motion.span>
              <motion.span
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                viewport={{ amount: 0.8 }}
                transition={{ delay: 0.3 }}
              > and sees
              an LCD screen displaying <br />
              <span className="text-cyan-primary">Hatsune Miku</span>.{" "}</motion.span>
            </div>
          </div>
          {/* second row */}
          <div className="flex flex-row-reverse md:justify-start justify-end max-md:flex-col gap-x-18">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once:true,amount: 0.3 }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                type: "spring",
                damping: 30,
                stiffness: 100,
              }}
              className="w-[90%] max-w-[700px] h-fit border-t max-md:ml-auto border-l border-t-cyan-primary border-l-cyan-primary pl-2 pt-2 rounded-tl-[50px]"
            >
              <ImageOptimization
                className="rounded-tl-[50px] pointer-events-none"
                url="munisekai/bg/sekai_ichika"
              />
            </motion.div>
            <div className="w-3/4 max-w-[400px] px-2 max-md:mx-0 max-md:px-4 max-md:ml-auto leading-10">
              <motion.span
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                viewport={{ amount: 0.8 }}
                transition={{ delay: 0.2 }}
              >
                Upon returning home, she discovers a song named "Untitled" on
                her smartphone.
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.8 }}
                transition={{ delay: 0.3 }}
              >
                {" "}
                Out of curiosity, Ichika plays the song, only to be surrounded
                by a white light
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.8 }}
                transition={{ delay: 0.4 }}
              >
                {" "}
                and transported to an unknown place. Miku stands in front of
                Ichika,
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.8 }}
                transition={{ delay: 0.5 }}
              >
                welcoming her to SEKAI and inviting her to sing together.{" "}
              </motion.span>{" "}
            </div>
          </div>
          <p>tttttttttttttttttt</p>
        </div>
      )}
    </>
  );
}

export default App;
