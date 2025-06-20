"use client";
import { useState } from "react";
import Image from "next/image";


const teamMembers = [
  {
    id: 1,
    name: "Ahmad Hilal Abid",
    role: "Founder & President",
    image: "/team/ahmadhilal.jpg", 
    bio: "Ahmad Hilal Abid emigrated from Afghanistan to the U.S. at 17 years old and began The House of Wisdom in 2020 by starting a small class with 20 marginalized students in his home garage. He believes deeply in diversity, equality, and fairness, with a mission to restore the House of Wisdom by spreading knowledge and bringing people together from different backgrounds.",
  },
  {
    id: 2,
    name: "Burhan Abid",
    role: "Treasurer",
    image: "/team/burhanabid.jpg", 
    bio: "With a bachelor's degree in business administration and over 25 years of expertise in diverse domains including organizational management, accounting, general ledger, financial reporting, financial analysis, and budgeting, Burhan brings a wealth of knowledge to the House of Wisdom.",
  },
  {
    id: 3,
    name: "Holly A. Jacobsen",
    role: "Secretary",
    image: "/team/hollyjacobsen.jpg", 
    bio: "Holly A. Jacobsen brings a wealth of knowledge and experience to the House of Wisdom. She holds a BA from the Jackson  in School of International Studies at the University of Washington. Additionally, she earned her teaching credentials from the Woodring College at Western Washington University, showcasing her commitment to education and academic excellence. Having retired from her teaching career in 2020, Holly now devotes her time to teaching English to recent immigrants, empowering them with the vital language skills to navigate their new lives. With a remarkable background in supporting non-profit organizations, she brings her invaluable expertise and boundless passion to the House of Wisdom.",
  },
  {
    id: 4,
    name: "William McClain",
    role: "Executive Board",
    image: "/team/williammcclain.jpg", 
    bio: "William McClain is a former math/physics teacher and business consultant. He is the prize-winning author of the books The Risk in Crossing Borders and Alice’s War, and has published numerous articles on promoting natural habitats within our personal landscapes. He lives in the Lynnwood area where he enjoys hiking, gardening, photographing nature, and playing soccer.",
  },
  {
    id: 5,
    name: "Laith Darwish",
    role: "Vice President of Operations",
    image: "/team/laithdarwish.jpg", 
    bio: "Laith is our VP of operations, who is in charge of virtually everything when it comes to the running of classes, programs and management. He runs several classes and programs behind the scenes for House of Wisdom and was a UW-Bothell graduate. We would not be here without all his dedication and work!",
  },
  {
    id: 6,
    name: "Abby Williams",
    role: "Liason Ambassador",
    image: "/team/abbywilliams.png", 
    bio: "Abby serves as the liaison Ambassador to the University of Washington, facilitating connections between the university’s programs and the House of Wisdom. Additionally, she is a Project Manager for the Lake City location where she cultivates an empowering learning environment for tutors and students. Currently completing her undergraduate degree in Educational Policy and Research with a strong interest in global education development, Abby is deeply committed to advancing the mission of The House of Wisdom and supporting its expansion to serve diverse communities.",
  },
  {
    id:7,
    name: "Kaydah Lehman",
    role: "Project Manager",
    image: "/team/kaydahlehmanjpg.jpg", 
    bio:"Kaydah Lehman is a Project Manager at the House of Wisdom, where she works closely with students and tutors to ensure classes run efficiently. She is currently pursuing an Associate’s degree in Integrated Studies at Cascadia College. Before joining the House of Wisdom, Kaydah spent three years tutoring students in her local community. Outside of work and academics, she volunteers as a volleyball coach and is passionate about mentoring and empowering youth."
  },
   {
    id:8,
    name: "Natally Celaya-Martinez ",
    role: "Project Manager",
    image: "/team/natallycelaya.jpg", 
    bio:"Hi! I’m Natally Celaya-Martinez, a third-year student at the University of Washington in Seattle, currently studying Biology (Physiology). I deeply enjoy being a part of the House of Wisdom team, as it allows me to engage with my community in meaningful ways while supporting the mission of accessible education. As a student on the pre-med track, I'm passionate about becoming a physician that supports health equity and uplifting underrepresented voices, and I’m grateful that House of Wisdom gives me the opportunity to align with these values. "
  },
  {
    id:9,
    name: "Mukhlis Al-Qadri",
    role: "Project Manager",
    image: "/team/mukhlis.jpg", 
    bio: "Mukhlis has been involved with the House of Wisdom since May 2024 as project manager, and he also volunteers as a tutor.He is currently taking undergraduate in Edmonds College. He is pursuing a degree in aeronautical engineering, where he hopes to achieve his dream and propagate the aeronautical industry in his country. He is also working part-time in campus as IT Staff. He loves being involved in his community and is passionate about helping those around him. In his free time, he enjoys drawing and reading books."
  }
];

// Team member card component
const TeamMemberCard = ({ member }) => {
  const [showFullBio, setShowFullBio] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl">
      <div className="relative h-80 w-full">
        <Image
          src={member.image}
          alt={`${member.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
        <p className="text-orange-500 font-medium mb-3">{member.role}</p>
        <div className="text-gray-600">
          {showFullBio ? (
            <p>{member.bio}</p>
          ) : (
            <p>{member.bio.substring(0, 120)}...</p>
          )}
        </div>
        <button
          onClick={() => setShowFullBio(!showFullBio)}
          className="mt-3 text-orange-500 hover:text-orange-600 font-medium transition-colors"
        >
          {showFullBio ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

const TeamPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <section
        className="bg-cover bg-center py-32 relative"
        style={{
          backgroundImage: "url('/hero-.jpg')", 
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-lg text-white mb-8">
            Meet the dedicated individuals bringing equitable education to our community
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            The People Behind House of Wisdom
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Our diverse team of educators, mentors, and community leaders is committed to 
            empowering marginalized students through education, mentorship, and support.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-orange-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Join Our Team
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Passionate about education and making a difference? We're always looking for dedicated 
            volunteers, tutors, and partners to help us expand our impact.
          </p>
          <a
            href="mailto:laith@houseofwisdomwa.org"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
          >
            Get Involved
          </a>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
