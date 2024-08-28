"use client";
import React from "react";
import { ContainerScroll } from "./ui/ContainerScrollAnimation";
import Image from "next/image";

const About = () => {
    return (
        <div id="#about" className="py-20 flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="heading">
                            An Exciting Story <span className="text-purple">About My Journey</span>
                        </h1>
                    </>
                }
            >
                <article className="flex flex-col gap-0.5 sm:gap-3 text-blue-100">
                    <h2 className="text-md sm:text-2xl font-bold text-violet-400">Who I am and what I do</h2>
                    <p className="text-xs xs:text-sm sm:text-base">Hello there! I&apos;m <span className="text-indigo-500 font-semibold">Syed Md Riaz</span>,a B.Tech graduate with a passion for software development. My journey began with mastering C++ and JavaScript, and over time, I've evolved into a <span className="text-violet-600">Fullstack Developer</span>wielding tools like React.js and Node.js to craft both front-end and back-end solutions. I love creating web apps that are not only functional but also intuitive and engaging. I'm always exploring new technologies, and I'm excited to continue building innovative, reliable software that makes a difference.</p>
                    <br />

                    <h2 className="text-md sm:text-2xl font-bold text-indigo-500">How I got here</h2>
                    <p className="text-xs xs:text-sm sm:text-base">I got here by immersing myself in the world of technology during my B.Tech studies, where I developed a strong foundation in programming with C++ and JavaScript. My curiosity and passion for creating solutions led me to explore web development, starting with front-end design and quickly expanding into back-end development. Along the way, I completed hands-on projects, internships, and certifications that solidified my skills in React.js, Node.js, and full-stack development. Through continuous learning and practical experience, I have evolved into a Full-Stack Developer, ready to tackle new challenges.</p>
                    <br />

                    <h2 className="text-md sm:text-2xl font-bold text-violet-400">Where I&apos;m looking to go next</h2>
                    <p className="text-xs xs:text-sm sm:text-base">Now, I&apos;m looking to take the next step as a Full-Stack Developer, aiming to build innovative and scalable web applications. I'm eager to join a dynamic team where I can apply my coding skills and continue learning, especially in cloud technologies, advanced state management, and microservices architecture. My goal is to contribute to impactful projects that solve real-world problems while growing my expertise in full-stack development.</p>
                </article>

               
            </ContainerScroll>
        </div>
    );
}

export default About;