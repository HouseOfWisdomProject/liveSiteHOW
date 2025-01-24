"use client";
import { useState } from "react";

const Popup = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <p className="text-lg font-semibold text-gray-800 mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
