"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ImageData {
  type: "bad" | "normal" | "good";
  url: string;
  category: string; // Add category to the image data structure
}

interface Stops {
  bad: string[];
  normal: string[];
  good: string[];
}

export default function InteractiveTimeline({ category }: { category: string }) {
  const [stops, setStops] = useState<Stops>({
    bad: [],
    normal: [],
    good: [],
  });

  const [currentStop, setCurrentStop] = useState<keyof Stops>("normal");
  const [dragPosition, setDragPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("/api/uploadedFiles");
        const data: ImageData[] = await response.json();

        const categorizedImages: Stops = {
          bad: data
            .filter(
              (img) => img.type === "bad" && img.category === category
            )
            .map((img) => img.url),
          normal: data
            .filter(
              (img) => img.type === "normal" && img.category === category
            )
            .map((img) => img.url),
          good: data
            .filter(
              (img) => img.type === "good" && img.category === category
            )
            .map((img) => img.url),
        };

        setStops(categorizedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchImages();
  }, [category]); // Re-run when category changes

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const timelineRect = timeline.getBoundingClientRect();
    let newPosition =
      ((clientX - timelineRect.left) / timelineRect.width) * 100;

    if (newPosition < 0) newPosition = 0;
    if (newPosition > 100) newPosition = 100;

    setDragPosition(newPosition);

    if (newPosition < 33) {
      setCurrentStop("bad");
    } else if (newPosition < 66) {
      setCurrentStop("normal");
    } else {
      setCurrentStop("good");
    }
  };

  const startDrag = () => setIsDragging(true);
  const stopDrag = () => setIsDragging(false);

  return (
    <div
      className="flex flex-col items-center justify-center h-auto w-full p-4"
      onMouseMove={isDragging ? handleDrag : undefined}
      onTouchMove={isDragging ? handleDrag : undefined}
      onMouseUp={stopDrag}
      onTouchEnd={stopDrag}
    >
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
        {stops[currentStop].map((url: string, index: number) => (
          <div
            key={index}
            className="relative w-auto h-auto bg-white shadow-lg rounded-lg overflow-hidden mx-auto transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={url}
              alt={`Image ${index + 1}`}
              width={400}
              height={400}
              className="rounded-lg"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                console.error(`Error loading image ${index + 1}: ${e.currentTarget.src}`);
              }}
            />
          </div>
        ))}
      </div>
      <div className="w-full max-w-3xl relative mt-4">
        <div
          ref={timelineRef}
          className="relative h-4 bg-green-500 rounded-full mb-12 shadow-xl mt-4"
          style={{
            height: "4px",
          }}
        >
          <div className="flex justify-between items-center mb-8 w-full">
            <ul className="flex justify-between w-full px-4">
              <li className="text-start font-medium text-gray-700">دیزاین پایه</li>
              <li className="text-center px-4 font-medium text-gray-700">دیزاین ویژه</li>
              <li className="text-end font-medium text-gray-700" dir="rtl">
                دیزاین VIP
              </li>
            </ul>
          </div>
          <div
            className="w-16 h-16 rounded-full shadow-2xl cursor-pointer absolute top-1/2 transform -translate-y-1/2 transition-transform bg-white border-4 border-green-500"
            style={{
              left: `${dragPosition}%`,
              transform: "translate(-50%, -50%)",
              backgroundImage: "url('/logoversai.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 100, // Adjust z-index if needed
              padding: "15px 30px",
              margin: "auto",
            }}
            onMouseDown={startDrag}
            onTouchStart={startDrag}
          >
            {/* Add a text label or icon inside the button if needed */}
            <span className="text-center text-sm font-bold text-green-700 py-2 my-4">-</span>
          </div>
        </div>
      </div>
    </div>
  );
}
