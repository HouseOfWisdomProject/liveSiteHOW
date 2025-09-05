"use client";
import { useState } from "react";
import Blog from "../components/Blog";

const posts = [
    {
        title: "Event Recap: Community Building Event",
        date: "August 23, 2025",
        subtitle: "A fun, outdoors event to recognize and celebrate the House of Wisdom's amazing staff of tutors, mentors, interns, and Board members.",
        caption: "Saturday, August 23rd was filled with food, fun, and friends for the House of Wisdom staff. The event was hosted at Lynwood park, where David cooked Halal BBQ for the team and everyone came together for sports and activities. The team received House of Wisdom shirts, courtesy of the hard work and design of our interns and board members. 'With so many new members joining recently, and others who’ve been with us for a while, it was just really nice getting to know everyone better and putting faces to names,' Finance Intern Danya Allsh said. Allsh was one of the collaborators on the shirts. roject Manager Natally Celaya-Martinez shared the same sentiment with Allsh, saying she 'loved being with everyone' and 'got to meet some of the newer tutors.'",
        image: "/blog/08-23-25.jpg"
    },
    {
        title: "Press Release: Community Building Event",
        date: "August 23, 2025",
        subtitle: "A fun, outdoors event to recognize and celebrate the House of Wisdom's amazing staff of tutors, mentors, interns, and Board members.",
        caption: "The event will take place at Lyndale Park in Lynnwood, from 3pm to 7pm. The HOW will provide food, games, social activities, and free merch. For staff, please check WhatsApp or contact Danya Allsh with your t-shirt size. Please attend to support our mission in strengthening the HOW's community. Take this opportunity to make friends with your fellow peers before the school year begins!", 
        image: "/HOW-Logo.png"
    },
    {
        title: "BTS25: Mukilteo School District Back-to-SChool Resource Fair",
        date: "August 22, 2025",
        subtitle: "Mariner High School",
        caption: "On August 22, 2025, the House of Wisdom visited Mariner High School at their Back to School Resource fair. Connecting with these students and families early in the year is very important to the HOW, as everyone deserves the right to the free and accessible tutoring/mentoring program we provide. Knowing there is an organization as the HOW early on can give students and parents the confidence they need to start the new school year. Danya Allsh, Finance Intern, described what it felt like to be a part of a community of resources and organizations coming together for the students. 'What also stood out to me was hearing from other groups there,' Allsh said.  'People kept saying how glad they were that resources like ours exist, and that meant a lot.' The House of Wisdom will continue to be present for our students as the school year kicks off. Our staff also visited the Akin Back to School fair this same week.",
        image: "/HOW-Logo.png"
    },
    {
        title: "BTS25: Edmonds School District Back-to-School Resource Fair",
        date: "August 14, 2025",
        subtitle: "Meadowdale High School",
        caption: "This past Thursday, August 14, 2025, the House of Wisdom visited Meadowdale High School for the Edmonds School District Back-to-School Resource Fair. Our team was delighted to participate in this event and look forward to providing accessible tutoring and mentorship to students in the coming year. Edmonds is a special community to the HOW. From housing our headquarters, to partnerships with local media, and being a home to many dedicated volunteers and board members. We love opporunities to show up and be present for our community. Three of our staff were in attendance, answering questions for parents and students, giving out candy, and providing information for those who had not heard of the HOW before. 'One of my favorite moments was seeing how eager the kids were to learn and get involved,' Danya Allsh, Finance Intern, said in reflection of the event. 'They were polite, engaged, and full of energy. The candy at our table definitely helped bring them over, which gave us a perfect chance to connect with them and their parents.' Our founder and CEO, Ahmad Hilal Abid, was also in attendance. 'We had such an amazing time sharing about our resources and many parents were amazed to learn that we provided free mentoring and tutoring,' Abid said. The HOW values the importance of community outreach, and looks forward to the rest of the Back to School season.",
        image: "/blog/08-14-25.jpg"
    }
]

export default function BlogDashboard() {
    return (
        <Blog posts={posts}></Blog>
    );
}