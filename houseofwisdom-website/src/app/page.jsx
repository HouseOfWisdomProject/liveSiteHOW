"use client";
import { useState, useEffect } from "react";
import JoinUsBox from "./components/JoinUsBox";
import Programs from "./components/Programs";
import PosterModal from "./components/PosterModal";


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
    title: "Programming and Computer Science",
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

  const [showPoster, setShowPoster] = useState(true); 

    useEffect(() => {
      const timer = setTimeout(() => setShowPoster(false), 400000); 
      return () => clearTimeout(timer);
    }, []);


  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section with Shaded Translucent Background */}
      <section
        className="bg-cover bg-center py-60 relative"
        style={{
          backgroundImage: "url('/hero-.jpg')", 
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> 
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            Empowering Education for Marginalized Communities
          </h1>
          <p className="text-lg text-white mb-8">
            Join us in our mission to provide free, inclusive academic support and culturally responsive mentorship to underserved youth—especially immigrant, refugee, and first-generation students—while fostering their overall well-being through safe, empowering environments that promote belonging, resilience, and lifelong learning.
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
              image="/student.jpg" 
              link="mailto:danyaa@houseofwisdomwa.org"
            />
            <JoinUsBox
              title="Become a Tutor"
              image="/tutor.jpg" 
              link="mailto:mukhils.qadri@thehouseofwisdomwa.org?cc=kaydahlehman@gmail.com,danyaa@houseofwisdomwa.org,abby@thehouseofwisdomwa.org"
            />
            <JoinUsBox
              title="Become a Partner"
              image="/partner.jpg" 
              link="mailto:danyaa@houseofwisdomwa.org"
              style={{ backgroundPosition: "center-60" }} 
            />
          </div>
        </div>
      </section>
      
      
      {/* About Section */}
      <section className="py-16" id="about">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">About Us</h2>
          <p className="text-lg leading-relaxed mb-8">
            Our primary purpose is to support marginalized and disadvantaged students, from children to adults, as they navigate their academic and social transitions, including their journey to higher education. We are committed to helping with school assignments, exam preparation, and inspiring individuals to achieve their full potential. We also focus on mental health and well-being, providing students with the support they need to thrive both academically and emotionally. Our ultimate goal is to empower people with the skills, critical thinking abilities, and emotional resilience necessary for a positive and successful lifestyle, both in their academic journeys and in higher education.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Ahmad Hilal Abid, who emigrated from Afghanistan to the U.S. at 17 years old, began this journey in 2020 by starting a small class with 20 marginalized and disadvantaged students in his home garage. He initially focused on helping students with Math and English assignments. As demand grew within the community, The House of Wisdom expanded into a larger space in Lynnwood, WA, and now supports over 100 students. Thanks to a diverse team of volunteers, the organization has also expanded the subjects it offers tutoring in, including college prep and other higher education-related subjects.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Beyond academics, we also prioritize mentoring and emotional support. Our mentors work closely with students to provide guidance, build self-confidence, and help them navigate challenges in both their academic and personal lives. Mental health is a critical aspect of success, and we strive to create a safe and supportive environment where students can address emotional struggles and focus on growth.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            The small class was named The House of Wisdom after the famous library in Baghdad, Iraq, built by Caliph Haroun Al-Rasheed (ruled 786–809 CE). This historic center of learning brought together scholars from various backgrounds to study, research, and translate texts. Male and female scholars, translators, scientists, scribes, and authors gathered there to engage in discussions and advance knowledge in languages such as Arabic, Farsi, Aramaic, Hebrew, Syriac, Greek, and Latin. The House of Wisdom produced groundbreaking scholars, such as the Father of Algebra, Muhammad ibn Musa al-Khwarizmi.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Ahmad Hilal Abid believes deeply in diversity, equality, and fairness. He states, “If we put our hands and minds together and embrace our differences, we can restore the House of Wisdom, spread knowledge and love, and bring people together from different ethnicities and backgrounds.”
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Let us work together to empower marginalized and disadvantaged students, from K-12 to higher education, through education, community, mentoring, and mental health support.
          </p>
        </div>

        <Programs programs={programs}/>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" id="prog">
          <p className="text-lg leading-relaxed mb-8">Together, we'll bridge the gap in educational inequality.</p>
        </div>
        {/*YOUTUBE*/}
          <div className="mt-16">
            <div className="flex justify-center gap-8">
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
