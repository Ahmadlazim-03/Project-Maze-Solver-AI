// components/Popup.tsx
"use client";

import React from 'react';
import Image from 'next/image';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
      <div className="relative w-full h-full bg-white p-8 overflow-auto">

        {/* Konten Popup */}
        <div className="mt-12 max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Project Code Overview
          </h2>

          {/* Image */}
          <div className="mb-6 flex">
            <Image
              src="/code1.png" // Replace with your image URL
              alt="Project Code Illustration"
              width={600}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Explanation */}
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              This section provides an overview of the code used in our project. The image above illustrates the structure of our application, which is built using React and Next.js. The codebase follows a modular approach, with components like this popup being separated for better maintainability and reusability. Below, you can see a sample of the code that powers a simple React component. This project demonstrates how to create interactive UI elements, such as this popup, with a clean and responsive design.
            </p>
          </div>

          {/* Code Sample (Optional) */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Code Sample</h3>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>
                {`// Contoh kode
import React from 'react';

const Example = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default Example;`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;