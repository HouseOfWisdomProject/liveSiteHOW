import React from "react";

const publications = [
  {
    title: "My Edmonds News",
    date: "2024-01-31",
    image: "/publications/myedmondsnews.png",
    description: "Lynnwood nonprofit helps immigrant students along path to educational success: The House of Wisdom, a Lynnwood nonprofit that aims to assist mostly first-generation, immigrant and refugee students at Edmonds College, recently extended its support to high school students. The organization...",
    url: "https://myedmondsnews.com/2024/01/lynnwood-nonprofit-helps-immigrant-students-along-path-to-educational-success/",
  },
  {
    title: "Herald Net",
    date: "2025-06-04",
    image: "/publications/heraldnet.png",
    description: "We were featured by Herald Net as well: Heavy interest spurs free tutoring through summer in Everett...",
    url: "https://www.heraldnet.com/news/heavy-interest-spurs-free-tutoring-through-summer-in-everett/",
  },
  {
    title: "The Seattle Times",
    date: "2022-09-01",
    image: "/publications/theseattletimes.png",
    description: "Edmonds College student started an education center for Afghan refugees in his garage: The House of Wisdom, one of the biggest libraries that emerged during the Islamic Golden Age in A.D. 830, made a resurgence in a Lynnwood garage. \nBefore it was destroyed in the Siege of Baghdad in 1258, the library was a place for people from all faiths, ethnicities and languages to gather and share writings about various topics, including philosophy, science and translations. \nFor two years now, a Seattle-area... ",
    url: "https://www.seattletimes.com/life/lifestyle/edmonds-college-student-started-an-education-center-for-afghan-refugees-in-his-garage/",
  },
  {
    title: "MLT News",
    date: "2024-03-27",
    image: "/publications/mltnews.png",
    description: "Edmonds Waterfront Center hosts Ramadan celebration: The Edmonds Waterfront Center opened its doors Tuesday night to a Ramadan celebration sponsored by the Lynnwood-based House of Wisdom.\nThe nonprofit assists mostly first-generation, immigrant and refugee students at Edmonds College and extends its support to high school students. Besides tutoring students at school work, House of Wisdom staff and volunteers help students integrate...",
    url: "https://mltnews.com/edmonds-waterfront-center-hosts-ramadan-celebration/",
  },
  {
    title: "Lynnwood Today",
    date: "2025-05-26",
    image: "/publications/lynnwoodtoday.png",
    description: "House of Wisdom students and tutors of the month for May 2025: The My Neighborhood News Network has launched a partnership with the House of Wisdom, a Lynnwood-based nonprofit supporting immigrant students. Monthly, we will be featuring students and tutors in the House of Wisdom program. The goal is to showcase local youth and their aspirations for the future. \nYou can learn more about the House of Wisdom in our previous story here...",
    url: "https://lynnwoodtoday.com/house-of-wisdom-students-and-tutors-of-the-month-for-may-2025/",
  },
  {
    title: "My Edmonds News",
    date: "2025-03-15",
    image: "/publications/myedmondsnews1.png",
    description: "House of Wisdom students and tutors of the month for March 2025: The My Neighborhood News Network has launched a partnership with the House of Wisdom, a Lynnwood-based nonprofit supporting immigrant students. Monthly, we will be featuring students and tutors in the House of Wisdom program. The goal is to showcase local youth and their aspirations for the future.\n You can learn more about the House of Wisdom in our previous story here... ",
    url: "https://myedmondsnews.com/2025/03/house-of-wisdom-students-and-tutors-of-the-month-for-march-2025/",
  }
];

export default function PublicationsDashboard() {
  return (
    <div className="bg-white min-h-screen p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Publications
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {publications
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((pub, index) => (
            <a
              key={index}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 transform hover:scale-105"
            >
              <div className="bg-white border border-gray-200 shadow-lg rounded-2xl overflow-hidden">
                <img
                  src={pub.image}
                  alt={`Cover of ${pub.title}`}
                  className="w-full h-auto object-contain"
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
            </a>
        ))}
      </div>
    </div>
  );
}
