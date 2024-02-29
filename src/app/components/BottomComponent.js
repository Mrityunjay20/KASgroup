"use client";

import { Button } from "flowbite-react";

export default function BottomComponent() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center bg-blue-950">
      {/* Left Div (Text) */}
      <div className="md:w-1/2 px-4 py-8 md:py-0 ml-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Left Div Text</h2>
        <p className="text-white">Hello this is sample text.</p>
      </div>

      {/* Right Div (Image Link) */}
      <div className="md:w-1/4 ml-auto my-4 bg-white">
        <a href="/" target="_parent" rel="noopener noreferrer">
          <img
            src="logo.jpeg"
            alt="Hyperlink Image"
            className="w-full h-auto md:float-right"
          />
        </a>
      </div>
    </div>
    </>
  );
}
