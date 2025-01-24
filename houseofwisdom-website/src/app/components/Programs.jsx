import { useState } from "react";
import Image from "next/image";

const ProgramCard = ({ program }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div className="flex flex-col items-center text-center">
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        {program.title}
      </h3>
      {/* Image */}
      <div className="w-full max-w-2xl">
        <img
          src={program.image}
          alt={program.title}
          className="shadow-lg w-full h-auto"
        />
      </div>
      {/* Caption */}
      <button
        className="mt-4 text-blue-600 hover:underline font-medium"
        onClick={handleOpenPopup}
      >
        Learn More
      </button>

      {/* Popup Window */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 shadow-2xl max-w-lg w-full">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-lg font-bold text-gray-800">
                {program.title}
              </h4>
              <button
                onClick={handleClosePopup}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <Image
              src={program.image}
              alt={program.title}
              width={500}
              height={300}
              className="rounded-lg shadow-md mb-4"
              style={{ objectFit: "cover" }}
            />
            <p className="text-gray-700 text-justify">{program.description}</p>
            <p className = "text-orange-700 text-left text-s py-3">For more information:contact laith@thehouseofwisdomwa.org</p>
          </div>
        </div>
      )}
    </div>
  );
};

const Programs = ({ programs }) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`flex flex-col items-center text-center ${
                programs.length % 2 !== 0 && index === programs.length - 1
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <ProgramCard program={program} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
