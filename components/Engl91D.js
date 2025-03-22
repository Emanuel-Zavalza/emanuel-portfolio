import userData from "@constants/data";
import React, { useState } from "react";

export default function Engl91D() {
  const [versionIndex, setVersionIndex] = useState(0);

  const toggleVersion = () => {
    setVersionIndex((prevIndex) => (prevIndex + 1) % comicData[0].versions.length);
  };

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Comics
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4 py-10 flex flex-col items-center">
        <button
          onClick={toggleVersion}
          className="mb-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Toggle Annotations
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
          {comicData.map((comic, idx) => (
            <img
              key={idx}
              src={comic.versions[versionIndex]}
              alt={`Comic Strip ${idx + 1}`}
              className="w-full rounded-lg shadow-md transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const comicData = [
  {
    versions: ["/1,1.png", "/1,2.png", "/1,3.png", "/1,4.png"],
  },
  {
    versions: ["/2,1.png", "/2,2.png", "/2,3.png", "/2,4.png"],
  },
  {
    versions: ["/3,1.png", "/3,2.png", "/3,3.png", "/3,4.png"],
  },
  {
    versions: ["/4,1.png", "/4,2.png", "/4,3.png", "/4,4.png"],
  },
  {
    versions: ["/5,1.png", "/5,2.png", "/5,3.png", "/5,4.png"],
  },
  {
    versions: ["/6,1.png", "/6,2.png", "/6,3.png", "/6,4.png"],
  },
  {
    versions: ["/7,1.png", "/7,2.png", "/7,3.png", "/7,4.png"],
  },
  {
    versions: ["/8,1.png", "/8,2.png", "/8,3.png", "/8,4.png"],
  },
  {
    versions: ["/9,1.png", "/9,2.png", "/9,3.png", "/9,4.png"],
  },
  {
    versions: ["/10,1.png", "/10,2.png", "/10,3.png", "/10,4.png"],
  },
  {
    versions: ["/11,1.png", "/11,2.png", "/11,3.png", "/11,4.png"],
  },
  {
    versions: ["/12,1.png", "/12,2.png", "/12,3.png", "/12,4.png"],
  },
  {
    versions: ["/13,1.png", "/13,2.png", "/13,3.png", "/13,4.png"],
  },
  {
    versions: ["/14,1.png", "/14,2.png", "/14,3.png", "/14,4.png"],
  },
  {
    versions: ["/15,1.png", "/15,2.png", "/15,3.png", "/15,4.png"],
  },
  {
    versions: ["/16,1.png", "/16,2.png", "/16,3.png", "/16,4.png"],
  },
  {
    versions: ["/17,1.png", "/17,2.png", "/17,3.png", "/17,4.png"],
  },
  {
    versions: ["/18,1.png", "/18,2.png", "/18,3.png", "/18,4.png"],
  },
  {
    versions: ["/19,1.png", "/19,2.png", "/19,3.png", "/19,4.png"],
  },
];


