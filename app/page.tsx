"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Press_Start_2P, VT323 } from "next/font/google";
import { useEffect, useRef } from "react";

const pixelFont = Press_Start_2P({ subsets: ["latin"], weight: "400" });
const retroFont = VT323({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [active, setActive] = useState("home");


// Background music
  const audioRef = useRef<HTMLAudioElement | null>(null);
const [isPlaying, setIsPlaying] = useState(false);
useEffect(() => {
  const audio = new Audio("/bg.mp3");
  audio.loop = true;
  audio.volume = 0.6;
  audioRef.current = audio;
}, []);

const toggleMusic = () => {
  if (!audioRef.current) return;

  if (isPlaying) {
    audioRef.current.pause();
  } else {
    audioRef.current.play();
  }

  setIsPlaying(!isPlaying);
};

  // 🔊 SOUNDS
  const playClick = () => {
    const audio = new Audio("/click.mp3");
    audio.volume = 0.4;
    audio.play();
  };

  const playPop = () => {
    const audio = new Audio("/pop.mp3");
    audio.volume = 0.5;
    audio.play();
  };

  // ❌ CLOSE BUTTON (POP ONLY HERE)
  const CloseButton = () => (
    <span
      onClick={() => {
        playClick();   // small click
        playPop();     // POP on close only
        setActive("home");
      }}
      className="bg-red-600 text-white w-6 h-6 flex items-center justify-center border border-red-900 shadow-inner hover:bg-red-700 active:translate-y-[1px] cursor-pointer"
    >
      ✕
    </span>
  );

  // 🪟 WINDOW WRAPPER
  const Window = ({ title, children }: any) => (
    <motion.div
      drag
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="absolute top-16 bg-[#ece9d8] border-4 border-blue-900 w-[950px] shadow-2xl"
    >
      <div className="bg-blue-800 text-white px-4 py-2 flex justify-between items-center">
        <span className={`${retroFont.className} text-xl`}>{title}</span>
        <CloseButton />
      </div>
      {children}
    </motion.div>
  );

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[url('/bg.png')] bg-cover bg-center">

      {/* MAIN WINDOW */}
      <div className="w-[950px] border-4 border-blue-900 shadow-2xl bg-[#ece9d8]">
        <div className="bg-blue-800 text-white px-4 py-2 flex justify-between items-center">
          <span className={`${retroFont.className} text-xl`}>home</span>
          <CloseButton />
        </div>

        <div className="p-10 text-center">
          <h1 className={`${pixelFont.className} text-3xl`}>
            hi! i am poonam :3
          </h1>

          <p className={`${retroFont.className} text-lg mt-4`}>
            AI & ML student + designer building cool stuff
          </p>

          {/* ICONS */}
          <div className="flex justify-center gap-14 mt-10">

            {/* INFO */}
            <div
              onClick={() => {
                playClick(); // ONLY click, NO pop
                setActive("info");
              }}
              className="flex flex-col items-center cursor-pointer"
            >
              <img src="/icons/info.png" className="w-14 h-14 object-contain hover:scale-110" />
              <span className={`${retroFont.className} mt-2`}>info</span>
            </div>

            {/* PROJECTS */}
            <div
              onClick={() => {
                playClick();
                setActive("projects");
              }}
              className="flex flex-col items-center cursor-pointer"
            >
              <img src="/icons/folder.png" className="w-14 h-14 object-contain hover:scale-110" />
              <span className={`${retroFont.className} mt-2`}>projects</span>
            </div>

            {/* LINKS */}
            <div
              onClick={() => {
                playClick();
                setActive("links");
              }}
              className="flex flex-col items-center cursor-pointer"
            >
              <img src="/icons/link.png" className="w-14 h-14 object-contain hover:scale-110" />
              <span className={`${retroFont.className} mt-2`}>links</span>
            </div>

            {/* CONTACT */}
            <div
              onClick={() => {
                playClick();
                setActive("contact");
              }}
              className="flex flex-col items-center cursor-pointer"
            >
              <img src="/icons/pc.png" className="w-14 h-14 object-contain hover:scale-110" />
              <span className={`${retroFont.className} mt-2`}>contact</span>
            </div>

          </div>
        </div>
      </div>

      {/* KEEP YOUR EXISTING CONTENT BELOW EXACTLY AS IT IS */}

      {active === "info" && (
  <Window title="info">
    <div className="p-10 flex gap-10 items-start">

      <img
        src="/pfp.png"
        className="w-40 h-40 rounded-full object-cover border-4 border-purple-500"
      />

      <div>
        <h2 className={`${pixelFont.className} text-xl mb-2`}>
          Poonam Mate
        </h2>

        <p className={`${retroFont.className} text-lg`}>
          3rd year AI-ML student
        </p>

        <p className={`${retroFont.className} text-lg mt-2`}>
          Level 19 Human :P
        </p>

        <p className={`${retroFont.className} text-lg mt-2`}>
          S.B Jain Institute of Technology, Nagpur
        </p>

        <p className={`${retroFont.className} text-lg mt-6`}>
          hi! i'm poonam, i like mixing design with tech
        </p>

        <ul className={`${retroFont.className} text-lg mt-4 space-y-2`}>
          <li>• design social media + visual stuff</li>
          <li>• build small AI + coding projects</li>
          <li>• experiment with creative ideas</li>
        </ul>
      </div>

    </div>
  </Window>
)}

     {active === "projects" && (
  <Window title="projects">
    <div className={`${retroFont.className} p-10 text-lg space-y-4`}>

      <div className="bg-white border p-4">
        🤖 AI mini projects
      </div>

      <div className="bg-white border p-4">
        🎨 design portfolio (canva stuff)
      </div>

      <div className="bg-white border p-4">
        💻 coding experiments
      </div>

    </div>
  </Window>
)}

     {active === "links" && (
  <Window title="links">
    <div className={`${retroFont.className} p-10 text-lg space-y-3`}>

      <p>🌐 portfolio (this site 😏)</p>
      <p>📸 instagram</p>
      <p>💼 linkedin</p>
      <p>🐙 github</p>

    </div>
  </Window>
)}

     {active === "contact" && (
  <Window title="contact">
    <div className={`${retroFont.className} p-10 text-lg space-y-3`}>

      <p>📧 email: poonammate78@gmail.com</p>
      <p>📱 phone: +91 8275517729</p>
      <p>📍 nagpur, india</p>

    </div>
  </Window>
)}

<div
  onClick={toggleMusic}
  className="fixed top-6 left-6 cursor-pointer"
>
  {isPlaying ? (
    <video
      src="/music.webm"
      autoPlay
      loop
      muted
      className="w-28 h-28 object-contain"
    />
  ) : (
    <img
  src="/cat.png"
  className="w-28 h-28 object-contain hover:scale-110 transition"
/>
  )}
</div>

    </div>
  );
}