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
            className="rounded-xl shadow-2xl"
          />

          {/* Text Overlay with Typing Effect */}
          <div
            className="-mt-11 font-sans absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center p-4 
          bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text 
          animate-bounce-slow"
          >
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
