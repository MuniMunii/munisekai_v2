import React, { forwardRef } from "react";
import { motion } from "motion/react";
const ImageCarousel = React.lazy(() => import("./image"));
export const Slide = forwardRef<HTMLDivElement, TestingCharacter>(
  function Slide(
    {
      name,
      bodyImage,
      color,
      charDesc,
      birthday,
      hobbies,
      specialty,
      stamps,
      longDesc
    },
    ref
  ) {
    // const direction = usePresenceData();
    return (
      <motion.div
        className="w-full rounded-3xl flex lg:flex-row flex-col items-center justify-start text-black"
        ref={ref}
        key={name}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.1,
            type: "spring",
            visualDuration: 0.3,
            bounce: 0.4,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            delay: 0.6,
          },
        }}
      >
        <ImageCarousel bodyImage={bodyImage} name={name} stamps={stamps} />
        <motion.div
          initial={{ opacity: 0, transition: { delay: 0.5 } }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
          exit={{ opacity: 0, transition: { delay: 0.5 } }}
          className="lg:w-2/3 md:mx-auto w-full p-3  max-w-[754px] min-h-[384px] overflow-hidden rounded-md flex flex-col gap-2"
          style={{ backgroundColor: color }}
        >
          <motion.h1
            animate={{ opacity: 1, x: 0, transition: { delay: 0.15 } }}
            initial={{ opacity: 0, x: 100 }}
            exit={{ opacity: 0, x: -100 }}
            className="uppercase text-white text-2xl"
          >
            {name}
          </motion.h1>
          <motion.p
            animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
            initial={{ opacity: 0, x: 100 }}
            exit={{ opacity: 0, x: -100 }}
            className="bg-white rounded-md p-2"
          >
            {charDesc}
          </motion.p>
          <motion.p
            animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
            initial={{ opacity: 0, x: 100 }}
            exit={{ opacity: 0, x: -100 }}
            className="bg-white rounded-md p-2 max-w-[300px]"
          >
            Birthday: {birthday}
          </motion.p>
          <div className="flex flex-col-reverse md:flex-row-reverse gap-2 justify-between">
            <motion.div
              animate={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
              initial={{ opacity: 0, x: 100 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-white p-1 md:max-w-[500px] rounded-md"
            >
{longDesc}
            </motion.div>
            <div className="flex flex-col gap-2">
              <motion.div
                animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
                initial={{ opacity: 0, x: 100 }}
                exit={{ opacity: 0, x: -100 }}
                className="bg-gray-200 h-fit max-w-[300px] flex items-center gap-1.5 p-1.5 rounded-md"
              >
                <p className="border-r-2 border-r-gray-700 pr-1.5 w-[78px]">
                  Hobbies
                </p>
                <div className="">{hobbies.join(", ")}</div>
              </motion.div>
              <motion.div
                animate={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
                initial={{ opacity: 0, x: 100 }}
                exit={{ opacity: 0, x: -100 }}
                className="bg-gray-200 h-fit max-w-[300px] flex items-center gap-1.5 p-1.5 rounded-md"
              >
                <p className="border-r-2 border-r-gray-700 pr-1.5 w-[78px]">
                  Specialty
                </p>
                <div className="">{specialty.join(",")}</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }
);
