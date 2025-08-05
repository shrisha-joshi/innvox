import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { useNavigate } from "react-router-dom";

export default function BlogUploadPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    file: null,
  });
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (files) => {
    setForm((prev) => ({ ...prev, file: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    // Here you would send the blog to your backend or state
    setUploading(false);
    navigate("/blog");
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-black border border-gray-700 rounded-xl mt-8">
      <h2 className="text-2xl font-bold text-white mb-6">Upload a New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white mb-1">Title</label>
          <input
            className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-white mb-1">Description</label>
          <textarea
            className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-white mb-1">Content</label>
          <textarea
            className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700"
            name="content"
            value={form.content}
            onChange={handleChange}
            rows={6}
            required
          />
        </div>
        <div>
          <label className="block text-white mb-1">Upload Image/Attachment</label>
          <FileUpload onChange={handleFileUpload} />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload Blog"}
        </button>
      </form>
    </div>
  );
}