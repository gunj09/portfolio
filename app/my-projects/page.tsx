"use client"
import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
    return (
      <div
        style={{ backgroundImage: "url(/mountains.jpg)" }}
        className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
      >
        <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
          {Projects.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-105"
            >
              <ProjectCard
                image={project.src}
              />
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default Page
  
