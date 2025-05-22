import { motion, AnimatePresence } from "framer-motion";
import { ImageOptimization } from "../ImageOptimization";
function StampAppear({
  stamps,
  name,
}: {
  stamps: StampProps[] | undefined;
  name: string;
}) {
  return (
    <AnimatePresence>
      {stamps?.map((stamp, index) => (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring",
              bounce: 5,
              damping: 10,
              stiffness: 120,
              delay: index * 0.3,
              duration: 0.3,
            },
          }}
          exit={{ opacity: 0, scale: 0 }}
          key={stamp.url + index + name}
          style={{
            top: `${stamp.top}%`,
            left: `${stamp.left}%`,
            zIndex: stamp.zIndex,
          }}
          className="absolute md:size-24 max-md:size-20 pointer-events-none"
        >
          <ImageOptimization url={stamp.url} className="" />
        </motion.div>
      ))}
    </AnimatePresence>
  );
}
export default function ImageCarousel({
  stamps,
  bodyImage,
  name,
}: {
  stamps: StampProps[] | undefined;
  bodyImage: string;
  name: string;
}) {
  return (
    <motion.div
      key={bodyImage + name}
      initial={{ opacity: 0, x: 50 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.6,
          type: "spring",
          visualDuration: 0.3,
          bounce: 0.4,
        },
      }}
      exit={{ opacity: 0, x: -50 }}
      className="h-96 w-[90%] max-w-72 flex justify-center items-center relative select-none"
    >
      <ImageOptimization
        loading={true}
        quality={100}
        url={bodyImage}
        className="object-cover z-10 pointer-events-none"
      />
      <StampAppear stamps={stamps} name={name} />
    </motion.div>
  );
}
