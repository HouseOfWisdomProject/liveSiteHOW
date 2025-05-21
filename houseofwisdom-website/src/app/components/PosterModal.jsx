"use client";

const PosterModal = ({ show, onClose, imageSrc }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl w-[90%] max-w-xl border">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white bg-gray-800 hover:bg-gray-700 rounded-full w-10 h-10 text-xl font-bold flex items-center justify-center shadow-md transition"
        >
          ✕
        </button>

        {/* Poster Image */}
        <a href="https://www.edmonds.edu/programs-and-degrees/areas-of-study/law-and-government/paralegal/legal-clinic.html" target="_blank">
        <img src={imageSrc} alt="Poster" className="w-full h-auto" />
        </a>
      </div>
    </div>
  );
};

export default PosterModal;
