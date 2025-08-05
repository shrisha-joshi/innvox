import React, { useState } from "react";

export function AnimatedTestimonials({ testimonials }) {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <div className="w-full max-w-3xl mx-auto bg-neutral-900 rounded-2xl shadow-xl p-8 flex flex-col items-center relative">
      <div className="flex items-center justify-center mb-6">
        <button
          onClick={prev}
          className="text-white bg-blue-600 hover:bg-blue-700 rounded-full p-2 mr-4 transition"
          aria-label="Previous testimonial"
        >
          &#8592;
        </button>
        <img
          src={testimonials[index].src}
          alt={testimonials[index].name}
          className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 shadow-lg"
        />
        <button
          onClick={next}
          className="text-white bg-blue-600 hover:bg-blue-700 rounded-full p-2 ml-4 transition"
          aria-label="Next testimonial"
        >
          &#8594;
        </button>
      </div>
      <blockquote className="text-xl italic text-gray-200 text-center mb-4 min-h-[80px]">
        "{testimonials[index].quote}"
      </blockquote>
      <div className="text-center">
        <div className="font-bold text-white text-lg">{testimonials[index].name}</div>
        <div className="text-blue-400 text-sm">{testimonials[index].designation}</div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full ${i === index ? 'bg-blue-500' : 'bg-gray-600'} transition`}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}