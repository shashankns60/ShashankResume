import React from 'react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
}

const educationList: Education[] = [
  {
    degree: "MCA (Master of Computer Application)",
    institution: "Lovely Professional University",
    period: "01/2020 - 06/2024",
    location: "Phagwara, Punjab"
  },
  {
    degree: "BCA (Bachelor's in Computer Application)",
    institution: "Lovely Professional University",
    period: "01/2020 - 06/2024",
    location: "Phagwara, Punjab"
  }
];

export default function Education() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">EDUCATION</h2>
      <div className="space-y-6">
        {educationList.map((edu, index) => (
          <div key={index} className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-blue-800">{edu.institution}</p>
            </div>
            <div className="text-right text-gray-600">
              <p>{edu.period}</p>
              <p>{edu.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}