"use client";
import React from "react";

export default function ComingSoon() {
  return (
    <div className="coming-soon-container">
      <h1>Coming Soon! 🚀 </h1>
      <p>Starting in fall 2025, the House of Wisdom will be creating its own application! 
            This application will lay the foundation for the House of Wisdom to spread its providing academic 
            and social support to all students focusing on immigrant, refugee and underserved students statewide, 
            nationally, and internationally, as well as making our current House of Wisdom locations more efficient and streamlined, 
            allowing your child to learn more at the House of Wisdom. </p>

      <style jsx>{`
        .coming-soon-container {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background: linear-gradient(to bottom, #11203b, #9db9da);
            color: white;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            padding: 20px;
        }

        .coming-soon-container h1 {
            font-size: 4rem;
            margin-bottom: 20px;
        }

        .coming-soon-container p {
            font-size: 1.5rem;
            margin-bottom: 40px;
        }

      `}</style>
    </div>
  );
}