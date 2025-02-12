"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import BirthdayWish from "../birthday-wish";

const Picture = () => {
  const [showBirthdayWish, setShowBirthdayWish] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Show BirthdayWish component after 7 seconds
    const timer = setTimeout(() => {
      setShowBirthdayWish(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-screen m-0">
      {/* Audio element (hidden) */}
      <audio ref={audioRef} src="/Happy Birthday.mp3" loop />

      {/* Toggle button for audio */}
      <button
        onClick={toggleAudio}
        className="hover:text-slate-400 absolute top-4 left-4 z-50 p-2 rounded-full  bg-opacity-70 text-black text-sm md:text-lg hover:bg-opacity-90 transition"
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>

      {!showBirthdayWish ? (
        <div className="relative w-full h-full flex justify-center items-center">
          {/* Picture with effect */}
          <Image
            src="/img1.png"
            alt="Your Picture"
            layout="intrinsic"
            width={800} // Adjust the width here
            height={600} // Adjust the height here
            className="rounded-xl shadow-lg"
          />

          {/* Text Overlay with Typing Effect */}
          <div className="font-sans ml-1 m-1 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-3xl sm:text-base md:text-4xl font-bold text-center p-4 animate-bounce-slow">
  <div className="typing-effect">
    <p>Wishing you a Happy Birthday</p> 
  </div>
</div>


        </div>
      ) : (
        <div className="animate-fade-up">
          <BirthdayWish />
        </div>
      )}
    </div>
  );
};

export default Picture;
