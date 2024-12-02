import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  location: string;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Front End Developer",
    company: "Movidu Technology Pvt Ltd",
    date: "01/2022 - 01/1970",
    location: "Bangalore, KA",
    points: [
      "Experienced in creating user-friendly, responsive websites.",
      "Collaborated with a team of 3 to deliver end-to-end solutions.",
      "Currently resolving bugs in a rebuilt website to ensure flawless functionality.",
      "Proficient in HTML, CSS, Bootstrap, and JavaScript for developing responsive, visually appealing websites.",
      "Skilled in using the Laravel framework for front-end development."
    ]
  }
];

export default function Experience() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">EXPERIENCE</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-blue-800">{exp.company}</p>
            </div>
            <div className="text-right text-gray-600">
              <p>{exp.date}</p>
              <p>{exp.location}</p>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}