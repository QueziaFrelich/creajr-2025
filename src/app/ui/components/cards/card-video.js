"use client";
import React, { useRef, useState } from "react";
import { Play, Pause, Quote } from "lucide-react";

export default function CardVideo({ name, course, quote, videoUrl, tagColor }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative rounded-xl overflow-hidden shadow-md w-full max-w-xs">
      {/* Vídeo */}
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-[32rem] object-cover"
        playsInline
      />

      {/* Camada preta translúcida por cima do vídeo */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />

      {/* Conteúdo sobre o vídeo */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none z-10">
        <div>
          <h4 className="bg-white text-black text-sm px-3 py-1 rounded-full inline-block mb-1">
            {name}
          </h4><br></br>
          <span
            className="text-xs px-2 py-1 rounded-full font-medium inline-block"
            style={{
              backgroundColor: tagColor.bg,
              color: tagColor.text,
            }}
          >
            {course}
          </span>
        </div>
        <p className="text-sm text-white mt-2 flex items-start gap-1 drop-shadow-md">
          <Quote className="w-4 h-4 text-blue-400 shrink-0" />
          <span>{quote}</span>
        </p>
      </div>

      {/* Botão Play/Pause */}
      <button
        onClick={handleTogglePlay}
        className="absolute inset-0 flex items-center justify-center z-20"
      >
        <div className="bg-black/40 rounded-full p-2">
          {isPlaying ? (
            <Pause className="text-white w-6 h-6" />
          ) : (
            <Play className="text-white w-6 h-6" />
          )}
        </div>
      </button>
    </div>
  );
}
