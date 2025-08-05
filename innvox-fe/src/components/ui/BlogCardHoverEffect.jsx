import React from "react";
import { HoverEffect } from "./card-hover-effect";

export function BlogCardHoverEffect({ blogs }) {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect
        items={blogs.map((blog) => ({
          title: blog.title,
          description: blog.description,
          link: blog.link,
        }))}
      />
    </div>
  );
}