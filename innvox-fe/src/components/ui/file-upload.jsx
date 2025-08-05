import React, { useRef } from "react";

export function FileUpload({ onChange }) {
  const inputRef = useRef();

  const handleFiles = (files) => {
    if (onChange) onChange(Array.from(files));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <div
      className="flex flex-col items-center justify-center border-2 border-dashed border-gray-500 rounded-lg p-6 bg-gray-900 text-white cursor-pointer hover:border-blue-500 transition"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={handleClick}
    >
      <input
        type="file"
        multiple
        ref={inputRef}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
      <span className="text-lg">Drag & drop files here, or <span className="text-blue-400 underline">browse</span></span>
    </div>
  );
}