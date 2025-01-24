"use client";
import { useState, useEffect } from "react";
import JoinUsBox from "./components/JoinUsBox";
import Programs from "./components/Programs";

const programs = [
  {
    title: "Math (K-12)",
    description:
      "Our math tutoring sessions cover a wide range of topics, from foundational concepts to advanced calculus. Whether you’re struggling with basic arithmetic, algebra, trigonometry, geometry, or even calculus up to level 4, our experienced tutors are here to guide you every step of the way. Our approach is student-centric, meaning we focus on understanding your learning style and pace to tailor our tutoring accordingly. Through clear explanations, practice problems, and real-life applications, we aim to make math enjoyable and understandable. Our tutors are multilingual and can tutor in Farsi, Dari, Spanish, and many other languages.",
    image: "/math-program.jpg",
  },
  {
    title: "English and ESL (K-12 & Adults)",
    description:
      "Our English tutoring classes cater to those seeking improvement in speaking, reading, and writing skills. Our tutors are well-versed in English grammar, vocabulary, and composition techniques, and they are passionate about helping you become a confident and effective communicator. Whether you want to enhance your conversational skills, ace that essay, or improve your reading comprehension, our tutors are ready to provide personalized guidance and support.",
    image: "/english-program.jpg",
  },
  {
    title: "Programming and Computer Scicence",
    description:
      "Our Brand new Coding classes will teach you how to create fun games in Scratch, and also code programs using Python! We give out 2 lectures every week, with a personal tutor to help every step of the way!",
    image: "/how-coding.jpg",
  },
];

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section with Shaded Translucent Background */}
      <section
        className="bg-cover bg-center py-60 relative"
        style={{
          backgroundImage: "url('/hero-.jpg')", // Static image for server consistency
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for translucency */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            Empowering Education for Marginalized Communities
          </h1>
          <p className="text-lg text-white mb-8">
            Join us in creating equitable access to learning opportunities tailored to diverse needs.
          </p>
        </div>
      </section>

      {/* JOIN US Section */}
      <section className="py-16" id="joinUS">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Join Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <JoinUsBox
              title="Become a Student"
              image="/student.jpg" // Static placeholder image
              link="/become-a-student"
            />
            <JoinUsBox
              title="Become a Tutor"
              image="/tutor.jpg" // Static placeholder image
              link="/become-a-tutor"
            />
            <JoinUsBox
              title="Become a Partner"
              image="/partner.jpg" // Static image
              link="/become-a-partner"
              style={{ backgroundPosition: "center-60" }} // Ensures static positioning
            />
          </div>
        </div>
      </section>
      
      
      {/* About Section */}
      <section className="py-16" id="about">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">About Us</h2>
          <p className="text-lg leading-relaxed mb-8">
            Our primary purpose is to help immigrants, refugees, and international students from children to adults
            academically and socially in their transition to America. We are committed to helping with school
            assignments, exam preparation, and inspiring individuals to achieve high grades. Our ultimate goal is to
            empower people with the skills and critical thinking abilities necessary to have a positive lifestyle in
            America.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Ahmad Hilal Abid, who emigrated from Afghanistan to the U.S. when he was 17 years old, started a small class
            with 20 immigrants and refugee students in his garage at home in 2020. He began by helping students with
            school assignments in Math and English. His services became so popular in the community, necessitating a move
            to a larger space in Lynnwood, Wash. The House of Wisdom now helps over 100 students and increased the number
            of subjects it offers tutoring in thanks to a volunteer staff with diverse areas of expertise.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            At the start, he named this small class the House of Wisdom. The House of Wisdom was a magnificent Baghdad,
            Iraq library built by Caliph Haroun Al-Rasheed (ruled 786 – 809 CE). Christians, Jews, Muslims, and scholars
            from around the world researched, studied and translated books at the House of Wisdom. It was where both male
            and female scholars, translators, scientists, scribes, authors, and much more from all over the world came
            together. They would meet for discussions and discourse on important works in various languages, including
            Arabic, Farsi, Aramaic, Hebrew, Syriac, Greek, and Latin. Famous scholars of the time that studied at the
            House of Wisdom include the Father of Algebra, Muhammad ibn Musa al-Khwarizmi.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Ahmad Hilal Abid believes strongly in diversity, equality, and fairness. He believes that “if we put our hands
            and minds together and accept our differences, we will be able to restore the House of Wisdom and spread
            knowledge and love through community and bring people together from different ethnicities and backgrounds.”
          </p>
        </div>

        <Programs programs={programs}/>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" id="prog">
          <p className="text-lg leading-relaxed mb-8">Together, we'll bridge the gap in educational inequality.</p>
        </div>
        {/*YOUTUBE*/}
          <div className="mt-16">
            <div className="flex justify-center gap-8">
              {/* Video 1 */}
              <div className="w-full max-w-lg h-80">
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/x0oSwZepHYk"
                  title="YouTube video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Video 2 */}
              <div className="w-full max-w-lg h-80">
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/k3QEbLGw-ZM"
                  title="YouTube video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

          </div>
      </section>
    </div>
  );
};

export default HomePage;
