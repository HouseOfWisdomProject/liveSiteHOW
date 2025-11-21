"use client";
import { useState } from "react";
import Blog from "../components/Blog";

// most relevant posts
const posts = [
    {
        title: "Event Recap: The House of Wisdom President and Founder Becomes One of the Youngest Speakers at School's Out Washington 2025 Bridge Conference",
        date: "October 27, 2025",
        subtitle: "Ahmad Hilal Abid delivered a one and a half hour long presentation on youth leadership and sustainable community impact",
        caption: "On Oct. 27, Ahmad Hilal Abid took part in the 2025 Bridge Conference hosted by School's Out Washington (SOWA), representing his own accomplishments as a youth leader and the House of Wisdom. His session explored how young people in power can cause lasting effect in the fight for change. Drawing from his own journey--beginning as a teenager working to empower immigrant and refugee youth--Abid shared actionable strategies for fostering authetic youth engagement, leadership development, and community collaboration. SOWA is a local organization working to ensure equitable access to high quality youth development programs, especially for low income youth and youth of color. This year, the 2025 Bridge Conference took place over two days and brought together the 'full spectrum of youth development professionals', according to SOWA's website. From grassroots program staff to community members and more, this conference is an opportunity for them to come together and engage in meaningful conversations. The conference serves over 500 attendees and centers BIPOC leaders. The House of Wisdom (HOW) was proud to see Abid deliver a thought-provoking presentation. He and the staff at the HOW are grateful to SOWA 'for organizing such an impactful event', Abid said. 'The conference served as more than just a professional gathering; it was truly a bridge connecting ideas, people, and purpose,' Abid said.",
        image: "/blog/10-27/25.jpg",
        footer: ""
    },
    {
        title: "Press Release: The Courage Project Award",
        date: "October 15, 2025",
        subtitle: "The House of Wisdom founder Ahmad Hilal Abid recognized by the Courage Project",
        caption: "The Individual Recognition Award from the Courage Project is designed as a way to 'pay it forward' by elevating and honoring the work of American nonprofit organizations, seeding civic engagement in their communities and strengthening our democracy. Abid was selected for his courage and accomplishments advocating for underrepresented immigrant communities through his work at the House of Wisdom and beyond. 'As a youth, student, and immigrant, I believe courage is not only about speaking out against problems, it is about building solutions,' Abid said in response to this award. 'At the House of Wisdom, that means bridging the gap in education and economic inequity for underserved and immigrant communities, so every young person has the opportunity to thrive.' We are extremely proud of Abid and grateful he has chosen the House of Wisdom to award the $25,000 grant that accompanies the award from the Courage Project. Adib is an Afghan immigrant and youth servant leader who empowers his immigrant community through education and belonging. A TEDx speaker, nonprofit and business found and CEO, a youth advocate for education, and award winner Community Servant Leader, Adib is still finishing a Bachelor's Degree from the University of Washington in Political Science, with a minor in Law, Societies, and Justice. But his love for his community and belief in education has made him a relentless advocate despite growing tensions locally and nationally. Abid's passion led him to found the House of Wisodm (HoW) in 2020, with nothing but $300 and his parent's garage. The HoW provides free, inclusive academic support and culturally responsive mentorship to underserved youth--especially immigrant, regufee, and first-generation students--while fostering their overwall well-being through safe, empowering environments that promote belonging, resilience, and lifelong learning. What started as a grassroots effort to address the educational gaps from Abid's garage with only $300 to operate has since evolved into a nationally recognized nonprofit with 300+ K-12 students, tutors and volunteers, over $100k in an annual budget, and 10+ partnerships. The HoW operates across multiple locations in the Greater Seattle Area, including Lynnwood, Everett, Edmonds College, Casino Road, and Lake City. 'I am deeply greatful to the Courage Project and its partners for this recognition,' Abid said. 'Their support affirms the power of immigrant-founded organizations like ours to create lasting change through education, mentorship, and belonging for every student.' With this award, the HoW will be able to continue this missions. These resources are vital to reaching members of the community who do not know about us, but would benefit from our services. We also assure continued assistance for ou r staff and tutors, who deserve to be compensated for the work they do for us. Additionally, funds will go towards hosting community building events, which are vital to our continued success. Thank you to the Courage Project and its sponsors for supporting immigrant founded non-profits and for believing in the power of education for all.",
        image: "/blog/10-15-25.jpg",
        footer: "The Courage Project is supported by partners including CFLeads, the Freedom Together Foundation, the James Irvine Foundation, the John D. and Catherine T. MacArthur Foundation, the Kenneth Rainin Foundation, the Marguerite Casey Foundation, the McKnight Foundation, Pisces Foundation, the Public Welfare Foundation, the Skillman Foundation, the Surdna Foundation, and United Way Worldwide."
    }
]

// August 2025 archive
const aug_2025 = [
    {
        title: "Press Release: Community Building Event",
        date: "August 23, 2025",
        subtitle: "A fun, outdoors event to recognize and celebrate the House of Wisdom's amazing staff of tutors, mentors, interns, and Board members.",
        caption: "The event will take place at Lyndale Park in Lynnwood, from 3pm to 7pm. The HOW will provide food, games, social activities, and free merch. For staff, please check WhatsApp or contact Danya Allsh with your t-shirt size. Please attend to support our mission in strengthening the HOW's community. Take this opportunity to make friends with your fellow peers before the school year begins!", 
        image: "/HOW-Logo.png",
        footer: "For more information, please contact Danya Allsh at danyaa@thehouseofwisomwa.org"
    },
    {
        title: "BTS25: Mukilteo School District Back-to-SChool Resource Fair",
        date: "August 22, 2025",
        subtitle: "Mariner High School",
        caption: "On August 22, 2025, the House of Wisdom visited Mariner High School at their Back to School Resource fair. Connecting with these students and families early in the year is very important to the HOW, as everyone deserves the right to the free and accessible tutoring/mentoring program we provide. Knowing there is an organization as the HOW early on can give students and parents the confidence they need to start the new school year. Danya Allsh, Finance Intern, described what it felt like to be a part of a community of resources and organizations coming together for the students. 'What also stood out to me was hearing from other groups there,' Allsh said.  'People kept saying how glad they were that resources like ours exist, and that meant a lot.' The House of Wisdom will continue to be present for our students as the school year kicks off. Our staff also visited the Akin Back to School fair this same week.",
        image: "/HOW-Logo.png",
        footer: "For more information, please contact Danya Allsh at danyaa@thehouseofwisomwa.org"
    },
    {
        title: "BTS25: Edmonds School District Back-to-School Resource Fair",
        date: "August 14, 2025",
        subtitle: "Meadowdale High School",
        caption: "This past Thursday, August 14, 2025, the House of Wisdom visited Meadowdale High School for the Edmonds School District Back-to-School Resource Fair. Our team was delighted to participate in this event and look forward to providing accessible tutoring and mentorship to students in the coming year. Edmonds is a special community to the HOW. From housing our headquarters, to partnerships with local media, and being a home to many dedicated volunteers and board members. We love opporunities to show up and be present for our community. Three of our staff were in attendance, answering questions for parents and students, giving out candy, and providing information for those who had not heard of the HOW before. 'One of my favorite moments was seeing how eager the kids were to learn and get involved,' Danya Allsh, Finance Intern, said in reflection of the event. 'They were polite, engaged, and full of energy. The candy at our table definitely helped bring them over, which gave us a perfect chance to connect with them and their parents.' Our founder and CEO, Ahmad Hilal Abid, was also in attendance. 'We had such an amazing time sharing about our resources and many parents were amazed to learn that we provided free mentoring and tutoring,' Abid said. The HOW values the importance of community outreach, and looks forward to the rest of the Back to School season.",
        image: "/blog/08-14-25.jpg",
        footer: "For more information, please contact Danya Allsh at danyaa@thehouseofwisomwa.org"
    }
]

// archives
const archives = [
    {
        title: "August 2025",
        section: aug_2025
    }
]

export default function BlogDashboard() {
    return (
        <Blog posts={posts} archives={archives}></Blog>
    );
}