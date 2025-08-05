import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import the hover effect component (to be created)
import { BlogCardHoverEffect } from "@/components/ui/BlogCardHoverEffect";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Modern Web Development",
      description:
        "Explore the latest trends and best practices in modern web development, including frameworks, tooling, and deployment strategies.",
      link: "/blog/modern-web-development",
    },
    {
      id: 2,
      title: "Getting Started with Machine Learning",
      description:
        "A beginner's guide to machine learning: concepts, tools, and how to build your first ML model using Python and popular libraries.",
      link: "/blog/machine-learning-intro",
    },
    {
      id: 3,
      title: "What is an MCP Server?",
      description:
        "Understand the architecture and use-cases of MCP (Message Control Protocol) servers in scalable, distributed systems.",
      link: "/blog/mcp-server-explained",
    },
    {
      id: 4,
      title: "The Rise of Artificial Intelligence",
      description:
        "A deep dive into the evolution of AI, its current capabilities, and how it's transforming industries worldwide.",
      link: "/blog/ai-evolution",
    },
    {
      id: 5,
      title: "AI Automation Tools for Developers",
      description:
        "Discover the top AI-powered automation tools that can boost productivity, automate workflows, and enhance software development.",
      link: "/blog/ai-automation-tools",
    },
  ]);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black py-10">
      <div className="flex justify-between items-center max-w-5xl mx-auto px-8 mb-8">
        <h1 className="text-3xl font-bold text-white">Blog</h1>
        <button
          onClick={() => navigate("/blog/upload")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Upload Blog
        </button>
      </div>
      <BlogCardHoverEffect blogs={blogs} />
    </div>
  );
} 