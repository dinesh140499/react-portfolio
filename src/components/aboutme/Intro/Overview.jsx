import useJugnu from "@/customHook/useJugnu";
import profile from "../../../assets/images/avatar.png";
import Social from "./Social";
import { useRef } from "react";

const Overview = () => {
  const canvasRef = useRef(null);
  useJugnu(canvasRef);
  return (
    <article className="space-y-8 flex flex-col items-center justify-center h-dvh [background-image:linear-gradient(to_top,rgba(28,22,70,1),rgba(12,0,95,1))]">
      {/* Firefly canvas — behind everything */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="flex items-center justify-center flex-col relative inset-1">
        <picture>
          <source
            type="image/webp"
            srcSet={`${profile}?format=webp&optimize=medium`}
          />
          <img src={profile} alt="Profile" className="w-55 h-55 rounded-full" />
        </picture>
        <h1 className="text-2xl font-light mt-3 tracking-widest text-white">
          John Doe
        </h1>
        <h3
          className="text-1xl  mt-4 px-4 bg-[#faf572] rounded-sm text-[#5c5134] lowercase tracking-wide"
          style={{ fontFamily: '"Helvetica Italic", serif' }}
        >
          Frontend Developer
        </h3>
      </div>
      <h1 className="text-3xl text-center max-w-2xl mx-auto tracking-[2px] text-white">
        {/* Hello. <b>I am an frontend developer</b>. I live in a small town
        somewhere in the world. I am passionated about <b>minimalistic</b> and
        flat design. */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia
        qui earum autem eveniet tempore ex animi perferendis, laborum
        cupiditate?
      </h1>
      <Social />
    </article>
  );
};

export default Overview;
