import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
interface ProgressBarProps {
  colorFrom?: string;
  colorTo?: string;
  title:string
  refTarget:React.RefObject<HTMLElement|null>
}
const ProgressBar = ({colorFrom,colorTo,refTarget,title}:ProgressBarProps) => {
    // const comp1Ref = useRef(ref);
    const { scrollYProgress } = useScroll({
      target: refTarget,
      offset: ["start 95%", "end end"],
    });
    const height = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const scaleY = useSpring(height, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    });
    return (
      <motion.div
        className="absolute top-0 left-0 w-fit uppercase h-full text-right text-xs px-3 z-[999]"
        style={{
          originY: 0,
          scaleY,
          writingMode: "vertical-lr",
          backgroundImage: `linear-gradient(to bottom, ${
            colorFrom ? colorFrom : "#33AAEE"
          }, ${colorTo ? colorTo : "#33ccbb"})`,
        }}
      >
       {title}
      </motion.div>
    );
  }

export default ProgressBar;
