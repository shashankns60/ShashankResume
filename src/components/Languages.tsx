import React from 'react';

interface Language {
  name: string;
  level: string;
  proficiency: number;
}

const languages: Language[] = [
  {
    name: "Hindi",
    level: "Native",
    proficiency: 5
  },
  {
    name: "English",
    level: "Proficient",
    proficiency: 4
  }
];

export default function Languages() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">LANGUAGES</h2>
      <div className="space-y-4">
        {languages.map((lang, index) => (
          <div key={index} className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{lang.name}</h3>
              <p className="text-gray-600 text-sm">{lang.level}</p>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full ${
                    i < lang.proficiency ? 'bg-blue-500' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}