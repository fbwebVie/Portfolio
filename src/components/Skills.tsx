const skills = [
  { name: "Next.js", level: 90 },
  { name: "React", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "Tailwind CSS", level: 95 },
  { name: "JavaScript", level: 85 },
  { name: "HTML / CSS", level: 95 },
  { name: "Git", level: 75 },
  { name: "Figma", level: 70 },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Навыки</h2>
        <div className="max-w-2xl mx-auto grid gap-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-black rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}