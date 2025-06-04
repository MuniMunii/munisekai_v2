import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ImageOptimization } from "./ImageOptimization";
export default function SideLabel() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <AnimatePresence>
      <motion.div
        initial={{x: 204}}
        animate={{x: isOpen ? 0 : 204,transition:{type:'spring',stiffness:130,damping:23}}}
        exit={{x: isOpen ? 204 : 0,transition:{type:'spring',stiffness:130,damping:23}}}
        className="fixed right-0 top-1/3 z-20"
      >
        <div className="relative p-3 flex flex-col items-center gap-2.5 w-48 h-fit bg-gradient-to-b bg-primary-gray/95 rounded-bl-md rounded-tl-md">
            <div className="w-1/2 h-20 rounded-md bg-white"></div>
            <a href="#" className="w-full"><ImageOptimization url="munisekai/logo/icon_app" /></a>
            <a href="#" className="w-full"><ImageOptimization url="munisekai/logo/icon_apple" height={64}/></a>
            <p className="text-center text-white">This is not official website</p>
        </div>
                  <div
  onClick={() => setIsOpen((prev) => !prev)}
  className="bg-gray-400 text-black w-20 h-fit p-2 text-center absolute top-1/2 -z-[9] -translate-y-1/2 -left-12 text-xl font-bold rounded-md flex items-center cursor-pointer"
>
{isOpen ? '>>' : '<<'}
</div>
      </motion.div>
    </AnimatePresence>
  );
}
