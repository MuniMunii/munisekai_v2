import { forwardRef,useMemo,useState } from "react";
import { AnimatePresence, motion, usePresenceData, wrap } from "motion/react"
interface TestingCharacter{
    id:string|number
    color:string
}
const Slide = forwardRef<HTMLDivElement,TestingCharacter>(function Slide(
    {id,color},
    ref
) {
    const direction = usePresenceData()
    return (
        <motion.div
        className="size-10 rounded-3xl flex items-center justify-center text-black"
        style={{backgroundColor:color}}
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
        >{id}</motion.div>
    )
})
export function CarouselCharacter(){
    const dummyObject=[{
        group:'leo',
        color:'#33aaee',
        char:[{name:'Ichika'},{name:'Saki'},{name:'Honami'},{name:'Shiho'}]
    },{
        group:'mmj',
        color:'#05df72',
        char:[{name:'Minori'},{name:'Haruka'},{name:'Airi'},{name:'Shizuku'}]
    },{
        group:'vbs',
        color:'#e60076',
        char:[{name:'Kohane'},{name:'An'},{name:'Akito'},{name:'Touya'}]
    },{
        group:'wxs',
        color:'#ffba00',
        char:[{name:'Tsukasa'},{name:'Emu'},{name:'Nene'},{name:'Rui'}]
    },{
        group:'25j',
        color:'#7f22fe',
        char:[{name:'Kanade'},{name:'Mafuyu'},{name:'Ena'},{name:'Mizuki'}]
    }]
    // store items
    const [group,setGroup]=useState<'leo'|'mmj'|'vbs'|'wxs'|'25j'>('leo')
    const [selectedItem,setSelectedItem]=useState(1)
    // state for changing items
    const [direction,setDirections]=useState<1|-1>(1)
    const currentGroup=useMemo(()=>dummyObject.find(child=>child.group===group)!,[group])
    const charList=currentGroup.char
    const colorGroup=currentGroup.color
    const currentChar=charList[selectedItem-1]
    // function change slide
    function setSlide(newDirection:1|-1){
        const nextItem=wrap(1,charList.length,selectedItem+newDirection)
        // set next item
        setSelectedItem(nextItem)
        // change with new parametes
        setDirections(newDirection)
    }
     return (
        <div className="w-full h-full border border-gray-600 flex flex-col justify-center items-center gap-3">
            <div className="flex gap-2">
                <button onClick={()=>setGroup('leo')} className="rounded-md bg-green-400">Leo</button>
                <button onClick={()=>setGroup('mmj')} className="rounded-md bg-green-400">MMj</button>
                <button onClick={()=>setGroup('vbs')} className="rounded-md bg-green-400">vbs</button>
                <button onClick={()=>setGroup('wxs')} className="rounded-md bg-green-400">wxs</button>
                <button onClick={()=>setGroup('25j')} className="rounded-md bg-green-400">25j</button>
            </div>
            <motion.button initial={false} className="cursor-pointer text-black font-semibold" onClick={()=>setSlide(-1)}>Prev</motion.button>
                <AnimatePresence custom={direction} mode="popLayout" initial={false}><Slide key={group + '-' + currentChar.name} color={colorGroup} id={currentChar.name}/></AnimatePresence>
            <motion.button initial={false} className="cursor-pointer text-black font-semibold" onClick={()=>setSlide(1)}>next</motion.button>
        </div>
     )
}