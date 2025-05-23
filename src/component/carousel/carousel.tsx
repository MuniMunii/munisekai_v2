import { useMemo, useState } from "react";
import { AnimatePresence, motion, wrap } from "motion/react";
import { ImageOptimization } from "../ImageOptimization";
import { dummyObject } from "../../data";
import { Slide } from "./slideCarousel";
import useMediaQuery from "../../hook/useMediaQuerys";
export default function CarouselCharacter() {
  const isWideScreen = useMediaQuery("(min-width:1024px)");
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
          className="rounded-full border md:size-18 max-md:size-16 p-[6px] flex cursor-pointer justify-center items-center select-none"
          style={{
            border: `solid 1px ${isActive ? currentGroup.color : "#000"}`,
          }}
        >
          <ImageOptimization url={char.icon} loading={true} className=""/>
        </motion.div>
      );
    });
  }
  return (
    <div style={{zIndex:10}} className="w-full max-w-[1333px] mx-auto my-auto h-full gap-4 flex flex-col">
      <div className="flex gap-2 justify-center">
        {dummyObject.map((group) => (
          <motion.button
  initial={{ backgroundImage:`linear-gradient(220deg, ${group.color}, rgba(255, 255, 255, 0.55))` }}
          whileHover={{ backgroundImage:`linear-gradient(100deg, ${group.color}, rgba(255, 255, 255, 0.55))`}}
          whileTap={{ backgroundImage:`linear-gradient(100deg, ${group.color}, rgba(255, 255, 255, 0.55))`}}
            key={"button" + group.group}
            onClick={() => {
              setGroup(group.group);
              setSelectedItem(1);
            }}
            // style={{ backgroundColor: group.color }}
            className="w-32 h-fit py-1 flex justify-center items-center px-2 rounded-md z-10 cursor-pointer"
          >
            <ImageOptimization url={group.iconGroup}/>
          </motion.button>
        ))}
      </div>
      <p style={{color:currentGroup.color}} className={`text-center text-2xl max-md:text-xl z-10 max-w-[700px] bg-white/90 h-fit w-[95%] mx-auto py-2 px-3 rounded-md relative before:absolute before:text-7xl before:content-['“'] before:font-mono before:-top-5 before:-left-4 after:absolute after:text-7xl after:content-['”'] after:font-mono after:-bottom-13 after:-right-4`}>
        {currentGroup.groupDesc}
      </p>
      <div className="flex max-lg:flex-col h-full w-full gap-2">
        <div className="flex items-center justify-center max-lg:flex-row flex-col gap-2 z-10">
          <CharPagination />
        </div>
        <div className="w-full flex items-center gap-3 relative">
          <AnimatePresence custom={direction} mode="popLayout" initial={false}>
            <motion.button
              key={"button-prev"}
              initial={false}
              className={`cursor-pointer text-black font-semibold h-fit ${
                !isWideScreen ? "absolute top-32" : ""
              }`}
              onClick={() => setSlide(-1)}
            >
              Prev
            </motion.button>
            <Slide
              key={group + "-" + currentChar.name}
              color={currentChar.imageColor}
              name={currentChar.name}
              bodyImage={currentChar.bodyImg}
              charDesc={currentChar.desc}
              birthday={currentChar.birthday}
              hobbies={currentChar.hobbies}
              specialty={currentChar.specialty}
              stamps={currentChar.stamps}
              longDesc={currentChar.longDesc}
            />
            <motion.button
              key={"button-next"}
              initial={false}
              className={`cursor-pointer text-black font-semibold h-fit ${
                !isWideScreen ? "absolute right-0 top-32" : ""
              }`}
              onClick={() => setSlide(-1)}
            >
              next
            </motion.button>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
