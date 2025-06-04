import { BackgroundImageUrl } from "./ImageOptimization";
export default function ListContent() {
  return (<>
    <div className="w-full h-fit min-h-screen flex flex-col justify-center gap-10 items-center p-6 relative">
        <h1 className="tracking-wide font-semibold md:text-7xl text-[4rem] text-cyan-primary">CONTENT</h1>
        <div className=" flex max-md:flex-col items-center justify-center gap-4">
      <div className="flex flex-col w-full gap-4 items-center justify-center">
        <a
          href="#introduction"
          style={{
            backgroundImage: BackgroundImageUrl({
              type: "img",
              url: "munisekai/bg/kami_rooftop",
            }),
          }}
          className="w-full max-w-[640px] h-fit p-2 bg-cover rounded-tr-4xl rounded-bl-4xl overflow-hidden group relative z-10 select-none"
        >
          <div className="w-full h-full bg-cyan-600/60 transition duration-400 group-hover:opacity-0 absolute top-0 left-0 z-[9]" />
          <h2 className="text-5xl max-md:text-3xl font-bold uppercase absolute bottom-0 right-0 text-white/50">
            Introduction
          </h2>
          <div className="relative z-20 px-8 py-8  text-primary-gray w-full h-full border border-white rounded-tr-4xl rounded-bl-4xl">
            <h2 className="bg-gray-300 px-4 mb-2 font-semibold uppercase rounded-br-2xl py-2 size-fit text-xl">
              Introduction
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
              cum!
            </p>
          </div>
        </a>
        <a
          href="#unit"
          style={{
            backgroundImage: BackgroundImageUrl({
              type: "img",
              url: "munisekai/bg/miya_rooftop_night",
            }),
          }}
          className="w-full max-w-[640px] bg-cover h-fit p-2 bg-amber-400 rounded-tr-4xl rounded-bl-4xl overflow-hidden group relative z-10 select-none"
        >
          <div className="w-full h-full bg-cyan-600/60 transition duration-400 group-hover:opacity-0 absolute top-0 left-0 z-[9]" />
          <h2 className="text-5xl max-md:text-3xl font-bold uppercase absolute bottom-0 right-0 text-white/50">
            Unit
          </h2>
          <div className="relative z-20 px-8 py-8  text-primary-gray w-full h-full border border-white rounded-tr-4xl rounded-bl-4xl">
            <h2 className="bg-gray-300 px-4 mb-2 font-semibold uppercase rounded-br-2xl py-2 size-fit text-xl">
              Unit
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
              cum!
            </p>
          </div>
        </a>
      </div>
      <div className="flex flex-col w-full gap-4 items-center justify-center">
        <a
          href="#news"
          style={{
            backgroundImage: BackgroundImageUrl({
              type: "img",
              url: "munisekai/bg/kami_classroom",
            }),
          }}
          className="w-full max-w-[640px] bg-cover h-fit p-2 rounded-tr-4xl rounded-bl-4xl overflow-hidden group relative z-10 select-none"
        >
          <div className="w-full h-full bg-cyan-600/60 transition duration-400 group-hover:opacity-0 absolute top-0 left-0 z-[9]" />
          <h2 className="text-5xl max-md:text-3xl font-bold uppercase absolute bottom-0 right-0 text-white/50">
            News
          </h2>
          <div className="relative z-20 px-8 py-8  text-primary-gray w-full h-full border border-white rounded-tr-4xl rounded-bl-4xl">
            <h2 className="bg-gray-300 px-4 mb-2 font-semibold uppercase rounded-br-2xl py-2 size-fit text-xl">
              News
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
              cum!
            </p>
          </div>
        </a>
        <a
          href="https://pjsekai.sega.jp/"
          style={{
            backgroundImage: BackgroundImageUrl({
              type: "img",
              url: "munisekai/bg/rooftop_leo",
            }),
          }}
          className="w-full max-w-[640px] bg-cover h-fit p-2 bg-amber-400 rounded-tr-4xl rounded-bl-4xl overflow-hidden group relative z-10 select-none"
        >
          <div className="w-full h-full bg-cyan-600/60 transition duration-400 group-hover:opacity-0 absolute top-0 left-0 z-[9]" />
          <h2 className="text-5xl max-md:text-3xl font-bold uppercase absolute bottom-0 right-0 text-white/50">
            Official
          </h2>
          <div className="relative z-20 px-8 py-8  text-primary-gray w-full h-full border border-white rounded-tr-4xl rounded-bl-4xl">
            <h2 className="bg-gray-300 px-4 mb-2 font-semibold uppercase rounded-br-2xl py-2 size-fit text-xl">
              Official
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
              cum!
            </p>
          </div>
        </a>
      </div>
      </div>
    </div>
  </>);
}
