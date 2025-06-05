import React from "react";

const publications = [
  {
    title: "Class1",
    image: "/images/transformers.png",
    description:
      "lorem ipsum",
  },
  {
    title: "Class 2",
    image: "/images/ethical_ai.jpg",
    description:
      "Lorem ipsum",
  },
  {
    title: "Class 3",
    image: "/images/llm_edu.jpg",
    description:
      "Lorem ipsum",
  },
  {
    title: "Class 4",
    image: "/images/self_supervised.png",
    description:
      "Lorem ipsum",
  },
];

export default function PublicationsDashboard() {
  return (
    <div className="bg-white min-h-screen p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Publications
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <img
              src={pub.image}
              alt={`Cover of ${pub.title}`}
              className="w-full h-52 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {pub.title}
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {pub.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
