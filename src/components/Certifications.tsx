import React from 'react';

interface Certification {
  title: string;
  description: string;
}

const certifications: Certification[] = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Awarded a certification for completing an SEO course, covering foundational and advanced strategies, from HubSpot Academy."
  },
  {
    title: "Cyber Security & Ethical Hacking",
    description: "Cyber Security & Ethical Hacking, RCPL \"Inspire to Aspire\", Lovely Professional University, Phagwara"
  },
  {
    title: "Black Hat Cracking",
    description: "Black Hat Cracking, Metaxone Solution Pvt. Ltd"
  },
  {
    title: "Course on Computer Concepts",
    description: "Course on Computer Concepts (CCC), National Institute of Electronics and Information Technology"
  },
  {
    title: "The Fundamentals of Digital Marketing",
    description: "The Fundamentals of Digital Marketing, Google Digital Garage"
  }
];

export default function Certifications() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">CERTIFICATION</h2>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">{cert.title}</h3>
            <p className="text-gray-700">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}