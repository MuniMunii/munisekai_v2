import { useRef } from "react"
import { motion } from "framer-motion"
import {
  ImageOptimization,
} from "./ImageOptimization";
import ProgressBar from "./progressBar";
export default function Introduction(){
    const introductionRef = useRef(null);
    function FadeTextElement({
      text,
      delay,
      element,
      className,
    }: {
      className?: string;
      element?: React.ElementType;
      text: React.ReactNode;
      delay: number;
    }) {
      const ElementAnimation = motion(element || "span");
      return (
        <ElementAnimation
          className={className ? `${className}` : null}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          viewport={{ amount: 0.8 }}
          transition={{ delay: delay,type: "spring",bounce:1,stiffness:100 }}
        >
          {text}
        </ElementAnimation>
      );
    }
    return (
        <motion.div
          ref={introductionRef}
          className="w-full overflow-hidden bg-cover text-slate-700 relative pt-10"
        >
          <ProgressBar ref={introductionRef} colorFrom="#33ccbb" colorTo="#33aaee"/>
          <div className="w-full h-4 absolute -top-2 left-0 bg-cyan-primary"></div>
          {/* first row */}
          <div className="flex flex-row justify-start mb-28 max-md:flex-col gap-x-18">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                type: "spring",
                damping: 30,
                stiffness: 100,
              }}
              className="w-[90%] max-w-[700px] h-fit border-b border-r border-b-cyan-primary border-r-cyan-primary pr-2 pb-2 rounded-br-[50px]"
            >
              <ImageOptimization
                className="rounded-br-[50px] pointer-events-none"
                url="munisekai/bg/beyond_ichika"
              />
            </motion.div>
            <div className="w-3/4 lg:max-w-[400px] md:w-full px-2 max-md:mx-0 max-md:px-4 leading-10">
              <FadeTextElement
                delay={0.1}
                text="Introduction"
                element={"h2"}
                className="text-cyan-primary relative uppercase text-4xl"
              />
              <p className="text-justify">
                <FadeTextElement
                  delay={0.2}
                  text="The game begins in Shibuya, Tokyo, a city alive with bright lights, towering buildings, and the pulse of youth culture."
                />
                <FadeTextElement
                  delay={0.3}
                  text="a city alive with bright lights, towering buildings, and the pulse of youth culture."
                />
                <FadeTextElement
                  text={
                    <>
                      {" "}
                      <span className="text-ichika">Hoshino Ichika</span>. a
                      quiet and thoughtful high school girl, walks alone through
                      the familiar streets.
                    </>
                  }
                  delay={0.4}
                />
                <FadeTextElement
                  text={
                    <>
                      {" "}
                      and sees an LCD screen displaying{" "}
                      <span className="text-cyan-primary">Hatsune Miku</span>.
                    </>
                  }
                  delay={0.5}
                />
              </p>
            </div>
          </div>
          {/* second row */}
          <div className="flex flex-row-reverse md:justify-start justify-end max-md:flex-col gap-x-18">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                type: "spring",
                damping: 30,
                stiffness: 100,
              }}
              className="w-[90%] max-w-[700px] h-fit border-t max-md:ml-auto border-l border-t-cyan-primary border-l-cyan-primary pl-2 pt-2 rounded-tl-[50px]"
            >
              <ImageOptimization
                className="rounded-tl-[50px] pointer-events-none"
                url="munisekai/bg/sekai_ichika"
              />
            </motion.div>
            <div className="w-3/4 lg:max-w-[400px] md:w-full px-2 max-md:mx-0 max-md:px-4 max-md:ml-auto leading-10">
              <p className="text-justify">
                <FadeTextElement
                  text={
                    'Upon returning home, she discovers a song named "Untitled" on her smartphone.'
                  }
                  delay={0.2}
                />
                <FadeTextElement
                  text={
                    <>
                      {" "}
                      Out of curiosity,{" "}
                      <span className="text-ichika">Ichika</span> plays the
                      song, only to be surrounded by a white light
                    </>
                  }
                  delay={0.3}
                />
                <FadeTextElement
                  text={
                    <>
                      {" "}
                      and transported to an unknown place.{" "}
                      <span className="text-cyan-primary">Miku</span> stands in
                      front of <span className="text-ichika">Ichika</span>,{" "}
                    </>
                  }
                  delay={0.4}
                />
                <FadeTextElement
                  text="welcoming her to SEKAI and inviting her to sing together."
                  delay={0.5}
                />
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ opacity: { duration: 0.5 } }}
                viewport={{ once: true, amount: 0.8 }}
                className="p-1 mt-3 border border-cyan-primary rounded-br-4xl rounded-tl-4xl w-fit"
              >
                <motion.button
                  transition={{ opacity: { duration: 0.5 } }}
                  style={
                    {
                      "--to": "#33ccbb",
                      "--from": "#33AAEE",
                      background:
                        "linear-gradient(to bottom right, var(--from), var(--to))",
                    } as React.CSSProperties
                  }
                  whileHover={
                    {
                      "--from": "#33ccbb",
                      "--to": "#33AAEE",
                    } as any
                  }
                  type="button"
                  className="cursor-pointer w-44 h-16 bg-gradient-to-bl text-4xl uppercase rounded-br-4xl rounded-tl-4xl"
                >
                  More
                </motion.button>
              </motion.div>
            </div>
          </div>
          {/* <p>tttttttttttttttttt</p> */}
        </motion.div>
    )
}