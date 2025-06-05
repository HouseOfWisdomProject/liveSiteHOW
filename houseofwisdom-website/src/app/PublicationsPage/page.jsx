import React from "react";

const publications = [
  {
    title: "Understanding Transformers",
    image: "/images/transformers.png",
    description:
      "An in-depth exploration of transformer architectures, their applications in NLP, and recent innovations.",
  },
  {
    title: "Ethical AI Design",
    image: "/images/ethical_ai.jpg",
    description:
      "A comprehensive guide to developing fair and unbiased machine learning models with real-world case studies.",
  },
  {
    title: "LLMs in Education",
    image: "/images/llm_edu.jpg",
    description:
      "Examines the role of large language models in modernizing educational tools and enhancing accessibility.",
  },
  {
    title: "Self-Supervised Learning",
    image: "/images/self_supervised.png",
    description:
      "Breaks down self-supervised methods and their transformative impact on representation learning.",
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
