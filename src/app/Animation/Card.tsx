"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export type CardItem = {
  id: string | number;
  title: string;
  description: string;
  image: string;
};

type CardCarouselProps = {
  items: CardItem[];
  className?: string;
  autoPlay?: boolean;
  interval?: number;
};

export default function Card({
  items,
  className = "",
  autoPlay = false,
  interval = 4000,
}: CardCarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = items.length;

  const nextCard = () => setCurrent((prev) => (prev + 1) % total);

  // ✅ Proper autoplay with useEffect
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(nextCard, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, total]);

  return (
    <div
      className={`flex flex-col items-center justify-center relative w-full max-w-3xl min-h-[400px] ${className}`}
    >
      <AnimatePresence initial={false}>
        {items.map((card, index) => {
          const isActive = index === current;
          const rotation = isActive ? 0 : (index - current) * 5;
          const zIndex = total - Math.abs(index - current);

          return (
            <motion.div
              key={card.id}
              className="absolute flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 gap-6 w-[90%] max-w-2xl"
              style={{ zIndex }}
              animate={{
                rotate: rotation,
                scale: isActive ? 1 : 0.95,
                opacity: isActive ? 1 : 0.5,
                translateX: isActive ? 0 : (index - current) * 60,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
            >
              <Image
                src={card.image}
                alt={card.title}
                width={200}
                height={200}
                className="rounded-xl border-4 border-white object-cover shadow-md"
              />
              <div className="flex flex-col gap-3 text-center md:text-left">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {index + 1}/{total}
                </span>
                <h2 className="text-xl font-semibold">{card.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* ✅ Dot Navigation */}
      <div className="absolute bottom-4 flex items-center justify-center gap-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to card ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current
                ? "bg-blue-600 scale-125"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
