import React from 'react';

interface Project {
  title: string;
  description: string[];
  technologies: string;
}

const projects: Project[] = [
  {
    title: "Coincent.ai",
    description: [
      "An online portal for students to learn technologies and improve their technical skillset, powered by Movidu technologies"
    ],
    technologies: "HTML, CSS, Bootstrap, and JavaScript"
  },
  {
    title: "Kurki House",
    description: [
      "Developed a responsive website showcasing cultural heritage with inquiry and contact forms"
    ],
    technologies: "HTML, CSS, JavaScript, Laravel, Bootstrap"
  },
  {
    title: "Elite Surventure",
    description: [
      "Designed and managed a luxury hospitality platform for hotel and banquet facilities"
    ],
    technologies: "HTML, CSS, JavaScript, Bootstrap, Laravel"
  },
  {
    title: "The Remote Manager",
    description: [
      "Built a remote management tool to streamline workflows and enhance productivity"
    ],
    technologies: "HTML, CSS, JavaScript, Bootstrap, Laravel, MySQL"
  },
  {
    title: "KodexHub",
    description: [
      "Created a website using Wix, offering free downloads of software, eBooks, and technology tools",
      "Focused on user experience by designing an intuitive interface and ensuring efficient content categorization",
      "Utilized Wix's platform to implement responsive design and dynamic features"
    ],
    technologies: "Wix Platform"
  }
];

export default function Projects() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">SELECTED PROJECTS</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border-l-4 border-blue-900 pl-4">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <div className="space-y-2">
              {project.description.map((desc, i) => (
                <p key={i} className="text-gray-700">{desc}</p>
              ))}
              <p className="text-sm text-blue-800 mt-2">
                <span className="font-semibold">Technologies:</span> {project.technologies}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}