"use client";

import { Github, Youtube, Instagram, Linkedin, Globe } from "lucide-react";

export default function Social({ platform, username, url, description }) {
  const icons = {
    github: <Github className="w-6 h-6" />,
    youtube: <Youtube className="w-6 h-6 text-red-500" />,
    instagram: <Instagram className="w-6 h-6 text-pink-500" />,
    linkedin: <Linkedin className="w-6 h-6 text-blue-500" />,
    website: <Globe className="w-6 h-6 text-green-500" />,
  };

  return (
    <div className="w-64 p-5 rounded-2xl shadow-md bg-white hover:shadow-lg transition-transform hover:scale-105">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-gray-100 rounded-full">{icons[platform]}</div>
        <div>
          <h3 className="text-lg font-semibold capitalize text-black">
            {platform}
          </h3>
          <p className="text-sm text-gray-500">@{username}</p>
        </div>
      </div>
      {description && (
        <p className="text-sm text-gray-600 mb-3">{description}</p>
      )}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full text-center bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
      >
        Visitar perfil
      </a>
    </div>
  );
}
