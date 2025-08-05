import React from "react";

export function FocusCards({ cards }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden rounded-xl shadow-lg border border-gray-700 bg-gray-900 hover:scale-105 transition-transform duration-200 cursor-pointer"
        >
          <img
            src={card.src}
            alt={card.title}
            className="w-full h-56 object-cover group-hover:opacity-80 transition duration-200"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
              {card.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}