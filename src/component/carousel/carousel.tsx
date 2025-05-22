import { useMemo, useState } from "react";
import { AnimatePresence, motion, wrap } from "motion/react";
import { ImageOptimization } from "../ImageOptimization";
import { dummyObject } from "../../data";
import { Slide } from "./slideCarousel";
import useMediaQuery from "../../hook/useMediaQuerys";
export function CarouselCharacter() {
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
          className="rounded-full border size-18 p-[6px] flex  justify-center items-center select-none"
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
    <div className="w-full max-w-[1333px] mx-auto h-full gap-4 flex flex-col border border-black">
      <div className="flex gap-2 justify-center">
        {dummyObject.map((group) => (
          <button
            key={"button" + group.group}
            onClick={() => {
              setGroup(group.group);
              setSelectedItem(1);
            }}
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
