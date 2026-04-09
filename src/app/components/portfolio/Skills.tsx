import { motion } from "motion/react";
import { Badge } from "../ui/badge";

export function Skills() {
  const skillCategories = [
    {
      category: "Backend Development",
      skills: [
        { name: "Rust", level: 95 },
        { name: "Actix Web", level: 90 },
        { name: "Axum", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "PostgreSQL", level: 82 },
      ],
      color: "from-purple-600 to-purple-400",
    },
    {
      category: "Blockchain & Web3",
      skills: [
        { name: "Solana", level: 92 },
        { name: "Ethereum/EVM", level: 88 },
        { name: "Smart Contracts", level: 90 },
        { name: "DeFi Protocols", level: 87 },
        { name: "Web3.js", level: 85 },
      ],
      color: "from-blue-600 to-blue-400",
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 85 },
        { name: "TypeScript", level: 88 },
        { name: "Vue.js", level: 80 },
        { name: "Tailwind CSS", level: 83 },
        { name: "Next.js", level: 82 },
      ],
      color: "from-cyan-600 to-cyan-400",
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg">
            A comprehensive toolkit for building the future of Web3
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className="p-6 rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-sm hover:border-purple-500/50 transition-all">
                <h3 className="text-xl mb-6 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Also proficient in:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Docker","AWS", "Git", "CI/CD", "Testing", "Security"].map((skill) => (
              <Badge key={skill} variant="outline" className="border-purple-500/30 bg-purple-500/10 text-purple-300 px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
