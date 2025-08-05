import React from "react";
import { Link } from "react-router-dom";

export function HoverEffect({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item, idx) => (
        <Link
          to={item.link}
          key={idx}
          className="block bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 group"
        >
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">{item.title}</h3>
          <p className="text-gray-300 mb-4">{item.description}</p>
          <span className="text-blue-500 group-hover:underline">Read More →</span>
        </Link>
      ))}
    </div>
  );
}