import React from "react";
import { BackgroundImageUrl, ImageOptimization } from "./ImageOptimization";
import {motion,AnimatePresence} from 'framer-motion'
interface OpeningProps {
    videoEnded:boolean;
    setVideoEnded:React.Dispatch<React.SetStateAction<boolean>>;
}
export default function OpeningComp({videoEnded,setVideoEnded}:OpeningProps){
    return (
        <div className="w-screen h-screen">
            <AnimatePresence>
        {!videoEnded ? (
          <motion.video
          initial={{ opacity: 1 }}
          exit={{opacity:0}}
            className="w-screen h-screen object-cover"
            src={BackgroundImageUrl({
              type: "video",
              url: "munisekai/video/main_video",
            })}
            autoPlay
            muted
            loop={false}
            onEnded={() => {setVideoEnded(true);localStorage.setItem('videoEnded', 'true');}}
          />
        ) : (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{opacity:1,backgroundColor:'white'}}
        className="w-full h-screen bg-cover bg-center flex flex-col justify-end items-center"
        style={{
            backgroundImage: `${BackgroundImageUrl({
                quality:90,
            type: "img",
            url: "munisekai/bg/mainbg",
            })}`,
        }}
        >
            <ImageOptimization url="munisekai/bg/logo" quality={90} height={400} width={600} fetchPriority className="w-[90%] max-h-[400px] max-w-[600px]"/>
                <p className="animate-bounce text-grey-400 text-2xl font-semibold uppercase">V</p>
        </motion.div>
        )}
        </AnimatePresence>
      </div>
    )
}