import React, { useState } from "react";

const events = [
  {
    title: "AI Hackathon 2024",
    date: "August 15, 2024",
    description:
      "Join the ultimate AI Hackathon! Collaborate, innovate, and build cutting-edge AI solutions in 24 hours. Prizes for the top teams!",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    details:
      "This 24-hour hackathon brings together AI enthusiasts, developers, and students to solve real-world problems using artificial intelligence. Network with industry leaders, attend workshops, and compete for amazing prizes!",
  },
  {
    title: "Workshop: AI in the Real World",
    date: "September 10, 2024",
    description:
      "A hands-on workshop exploring practical applications of AI. Learn from industry experts and get started with real-world AI projects.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    details:
      "This workshop covers the fundamentals of AI, including machine learning, data science, and deployment. Participants will work on mini-projects and receive certificates of completion.",
  },
];

export default function EventsPage() {
  const [selected, setSelected] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="min-h-screen bg-black py-10">
      <h1 className="text-3xl font-bold text-white text-center mb-10">Upcoming Events</h1>
      <div className="max-w-4xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="bg-neutral-900 border border-gray-700 rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-200"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-56 object-cover object-center"
            />
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-xl font-bold text-white mb-2">{event.title}</h2>
              <p className="text-blue-400 font-semibold mb-2">{event.date}</p>
              <p className="text-gray-300 mb-4 flex-1">{event.description}</p>
              <div className="flex gap-2 mt-auto">
                <button
                  onClick={() => setSelected(event)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  See Details
                </button>
                <button
                  onClick={() => setShowRegister(true)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Event Details Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-neutral-900 rounded-xl p-8 max-w-lg w-full relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-2xl font-bold"
            >
              &times;
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">{selected.title}</h2>
            <p className="text-blue-400 font-semibold mb-2">{selected.date}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{selected.details}</p>
          </div>
        </div>
      )}
      {/* Register Modal */}
      {showRegister && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-neutral-900 rounded-xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowRegister(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Register for Event</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white border border-gray-400 dark:border-gray-700"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white border border-gray-400 dark:border-gray-700"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}