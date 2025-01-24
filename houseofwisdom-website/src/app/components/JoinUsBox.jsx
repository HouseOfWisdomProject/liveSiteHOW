// components/JoinUsBox.js
import Link from "../Link";

const JoinUsBox = ({ title, image, link, style }) => {
  return (
    <div
      className="relative bg-cover bg-center h-72 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: style?.backgroundPosition || "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div> {/* Overlay */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <Link
          href={link}
          className="text-white font-bold text-2xl px-6 py-3"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default JoinUsBox;
