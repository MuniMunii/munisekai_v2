import { forwardRef, useMemo, useState } from "react";
import { AnimatePresence, motion, usePresenceData, wrap } from "motion/react";
import { ImageOptimization } from "./ImageOptimization";
import { dummyObject } from "../data";
const Slide = forwardRef<HTMLDivElement, TestingCharacter>(function Slide(
  { name, bodyImage, color, charDesc,birthday,hobbies,specialty },
  ref
) {
  const direction = usePresenceData();
  return (
    <motion.div
      className="w-full rounded-3xl flex max-md:flex-col items-center justify-start text-black"
      ref={ref}
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
      exit={{ opacity: 0,transition: {
          delay: 0.6} }}
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.2,
            type: "spring",
            visualDuration: 0.3,
            bounce: 0.4,
          },
        }}
        exit={{ opacity: 0, x: -50 }}
        className="h-96 w-[90%] max-w-72 flex justify-center items-center"
      >
        <ImageOptimization
          loading={true}
          quality={100}
          url={bodyImage}
          className="object-cover"
        />
      </motion.div>
      <motion.div
      variants={{
        show:{transition:{staggerChildren:0.2}},
        exit:{transition:{staggerChildren:0.2,staggerDirection:-1}}
      }}
        className=" w-full h-fit p-3 min-h-64 overflow-hidden rounded-md bg-cyan-primary"
              style={{backgroundImage:`linear-gradient(90deg ,${color},#33ccbb)`}}
      >
        <motion.p
          animate={{ opacity: 1,x:0,transition:{delay:0.15 }}}
          initial={{ opacity: 0,x:100 }}
          exit={{ opacity: 0, x:-100}}
          className="uppercase"
          style={{color:color}}
        >
          {name}
        </motion.p>
        <motion.p
          animate={{ opacity: 1,x:0,transition:{delay:0.2} }}
          initial={{ opacity: 0,x:100 }}
          exit={{ opacity: 0, x:-100}}
        >
          {charDesc}
        </motion.p>
        <motion.p
          animate={{ opacity: 1,x:0,transition:{delay:0.3} }}
          initial={{ opacity: 0,x:100 }}
          exit={{ opacity: 0, x:-100}}
        >
          {birthday}
        </motion.p>
        <motion.ul
        animate={{ opacity: 1,x:0,transition:{delay:0.4} }}
          initial={{ opacity: 0,x:100 }}
          exit={{ opacity: 0, x:-100}}>
          {hobbies.map((list,index)=>(<li key={list+index}>{list}</li>))}
        </motion.ul>
        <motion.ul
        animate={{ opacity: 1,x:0,transition:{delay:0.5} }}
          initial={{ opacity: 0,x:100 }}
          exit={{ opacity: 0, x:-100}}>
          {specialty.map((list,index)=>(<li key={list+index}>{list}</li>))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
});
export function CarouselCharacter() {
  // store items
  const [group, setGroup] = useState<GroupShortNames>("leo");
  const [selectedItem, setSelectedItem] = useState(1);
  // state for changing items
  const [direction, setDirections] = useState<1 | -1>(1);
  const currentGroup = useMemo(
    () => dummyObject.find((child) => child.group === group)!,
    [group]
  );
  const charList = currentGroup.char;
  const colorGroup = currentGroup.color;
  const currentChar = charList[selectedItem - 1];
  // function change slide
  function setSlide(newDirection: 1 | -1) {
    const nextItem = wrap(1, charList.length + 1, selectedItem + newDirection);
    // set next item
    setSelectedItem(nextItem);
    // change with new parametes
    setDirections(newDirection);
  }
  //   pagination component
  function CharPagination() {
    return charList.map((char, index) => {
      const [isHover, setIsHover] = useState<boolean>(false);
      const isActive = selectedItem === index + 1;
      return (
        <motion.div
          key={`${currentGroup.group}-${char.name}`}
          onHoverStart={() => setIsHover(true)}
          onHoverEnd={() => setIsHover(false)}
          onTapStart={() => setIsHover(true)}
          onTapCancel={() => setIsHover(false)}
          animate={isHover && !isActive ? { rotate: 360 } : { rotate: 0 }}
          transition={
            isHover && !isActive
              ? { repeat: Infinity, duration: 2, delay: 0 }
              : { duration: 0 }
          }
          onClick={() => setSelectedItem(index + 1)}
          className="rounded-full border size-18 p-[6px] flex  justify-center items-center"
          style={{
            border: `solid 1px ${isActive ? currentGroup.color : "#6a7282"}`,
          }}
        >
          <ImageOptimization url={char.icon} loading />
        </motion.div>
      );
    });
  }
  return (
    <div className="w-full h-full gap-4 flex flex-col border border-black">
      <div className="flex gap-2 justify-center">
        {dummyObject.map((group) => (
          <button
            key={"button" + group.group}
            onClick={() => {setGroup(group.group);setSelectedItem(1)}}
            style={{ backgroundColor: group.color }}
            className=" bg-green-400 w-32 h-fit py-1 px-2 rounded-md"
          >
            <ImageOptimization url={group.iconGroup} />
          </button>
        ))}
      </div>
      <p className="text-black text-center bg-amber-300">
        {currentGroup.groupDesc}
      </p>
      <div className="flex max-lg:flex-col h-full w-full gap-2">
        <div className="flex items-center justify-center max-lg:flex-row flex-col gap-2 ">
          <CharPagination />
        </div>
        <div className="w-full flex items-center gap-3">
          <motion.button
            initial={false}
            className="cursor-pointer text-black font-semibold h-fit"
            onClick={() => setSlide(-1)}
          >
            Prev
          </motion.button>
          <AnimatePresence custom={direction} mode="popLayout" initial={false}>
            <Slide
              key={group + "-" + currentChar.name}
              color={currentChar.imageColor}
              name={currentChar.name}
              bodyImage={currentChar.bodyImg}
              charDesc={currentChar.desc}
              birthday={currentChar.birthday}
              hobbies={currentChar.hobbies}
              specialty={currentChar.specialty}
            />
          </AnimatePresence>
          <motion.button
            initial={false}
            className="cursor-pointer text-black font-semibold h-fit"
            onClick={() => setSlide(1)}
          >
            next
          </motion.button>
        </div>
      </div>
    </div>
  );
}
