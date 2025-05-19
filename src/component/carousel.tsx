import { forwardRef, useMemo, useState } from "react";
import { AnimatePresence, motion, usePresenceData, wrap } from "motion/react";
import { ImageOptimization } from "./ImageOptimization";
interface TestingCharacter {
  id: string | number;
  color: string;
}
type GroupShortNames = "leo" | "mmj" | "vbs" | "wxs" | "25j";
interface CharProps {
  name: string;
  icon: string;
}
interface GroupProps {
  iconGroup: string;
  group: GroupShortNames;
  color: string;
  char: CharProps[];
}
const Slide = forwardRef<HTMLDivElement, TestingCharacter>(function Slide(
  { id, color },
  ref
) {
  const direction = usePresenceData();
  return (
    <motion.div
      className="size-10 rounded-3xl flex items-center justify-center text-black"
      style={{ backgroundColor: color }}
      ref={ref}
      initial={{ opacity: 0, x: direction * 50 }}
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
      exit={{ opacity: 0, x: direction * -50 }}
    >
      {id}
    </motion.div>
  );
});
export function CarouselCharacter() {
  const dummyObject: GroupProps[] = [
    {
      group: "leo",
      iconGroup: "munisekai/logo/leo_big",
      color: "#33aaee",
      char: [
        { name: "Ichika", icon: "munisekai/logo/icon/ichika" },
        { name: "Saki", icon: "munisekai/logo/icon/saki" },
        { name: "Honami", icon: "munisekai/logo/icon/honami" },
        { name: "Shiho", icon: "munisekai/logo/icon/shiho" },
      ],
    },
    {
      group: "mmj",
      iconGroup: "munisekai/logo/mmj_big",
      color: "#05df72",
      char: [
        { name: "Minori", icon: "munisekai/logo/icon/minori" },
        { name: "Haruka", icon: "munisekai/logo/icon/haruka" },
        { name: "Airi", icon: "munisekai/logo/icon/airi" },
        { name: "Shizuku", icon: "munisekai/logo/icon/shizuku" },
      ],
    },
    {
      group: "vbs",
      iconGroup: "munisekai/logo/vbs_big",
      color: "#e60076",
      char: [
        { name: "Kohane", icon: "munisekai/logo/icon/kohane" },
        { name: "An", icon: "munisekai/logo/icon/an" },
        { name: "Akito", icon: "munisekai/logo/icon/akito" },
        { name: "Touya", icon: "munisekai/logo/icon/touya" },
      ],
    },
    {
      group: "wxs",
      iconGroup: "munisekai/logo/wxs_big",
      color: "#ffba00",
      char: [
        { name: "Tsukasa", icon: "munisekai/logo/icon/tsukasa" },
        { name: "Emu", icon: "munisekai/logo/icon/emu" },
        { name: "Nene", icon: "munisekai/logo/icon/nene" },
        { name: "Rui", icon: "munisekai/logo/icon/rui" },
      ],
    },
    {
      group: "25j",
      iconGroup: "munisekai/logo/n25_big",
      color: "#7f22fe",
      char: [
        { name: "Kanade", icon: "munisekai/logo/icon/kanade" },
        { name: "Mafuyu", icon: "munisekai/logo/icon/mafuyu" },
        { name: "Ena", icon: "munisekai/logo/icon/ena" },
        { name: "Mizuki", icon: "munisekai/logo/icon/mizuki" },
      ],
    },
  ];
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
      const isActive=selectedItem === index + 1;
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
          <ImageOptimization url={char.icon} />
        </motion.div>
      );
    });
  }
  return (
    <div className="w-full h-full flex flex-col backdrop-blur-xs">
      <div className="flex gap-2 justify-center">
        {dummyObject.map(group => (
          <button
            key={"button" + group.group}
            onClick={() => setGroup(group.group)}
            style={{ backgroundColor: group.color }}
            className=" bg-green-400 w-32 h-fit py-1 px-2 rounded-md"
          >
            <ImageOptimization url={group.iconGroup} />
          </button>
        ))}
      </div>
      <div className="flex max-lg:flex-col h-full">
        <div className="flex items-center justify-center max-lg:flex-row flex-col gap-2 ">
          <CharPagination />
        </div>
        <div className="flex gap-3">
          <motion.button
            initial={false}
            className="cursor-pointer text-black font-semibold"
            onClick={() => setSlide(-1)}
          >
            Prev
          </motion.button>
          <AnimatePresence custom={direction} mode="popLayout" initial={false}>
            <Slide
              key={group + "-" + currentChar.name}
              color={colorGroup}
              id={currentChar.name}
            />
          </AnimatePresence>
          <motion.button
            initial={false}
            className="cursor-pointer text-black font-semibold"
            onClick={() => setSlide(1)}
          >
            next
          </motion.button>
        </div>
      </div>
    </div>
  );
}
