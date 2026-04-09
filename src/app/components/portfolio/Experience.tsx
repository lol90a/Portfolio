import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Senior Blockchain Developer",
      company: "DeFi Labs",
      period: "2023 - Present",
      description: "Leading development of next-generation DeFi protocols on Solana. Built high-frequency trading systems processing 50k+ TPS with zero downtime.",
      highlights: [
        "Architected and deployed 5+ production smart contracts",
        "Reduced transaction costs by 60% through optimization",
        "Led team of 4 engineers in protocol development",
      ],
    },
    {
      role: "Rust Backend Engineer",
      company: "Web3 Solutions Inc",
      period: "2021 - 2023",
      description: "Developed scalable backend infrastructure for blockchain applications. Built REST and GraphQL APIs serving 1M+ daily requests.",
      highlights: [
        "Built microservices architecture with Actix and Axum",
        "Implemented real-time data streaming with WebSockets",
        "Improved API response time by 70%",
      ],
    },
    {
      role: "Smart Contract Developer",
      company: "Crypto Ventures",
      period: "2020 - 2021",
      description: "Created and audited smart contracts for NFT marketplaces and DeFi protocols on Ethereum and Polygon networks.",
      highlights: [
        "Developed 15+ smart contracts with zero security incidents",
        "Conducted security audits for partner projects",
        "Managed $10M+ in total value locked",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Tech Innovations",
      period: "2018 - 2020",
      description: "Built full-stack web applications using modern JavaScript frameworks. Transitioned to blockchain development and Rust programming.",
      highlights: [
        "Developed 20+ production web applications",
        "Mentored junior developers in best practices",
        "Introduced blockchain integration to existing systems",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg">
            Building the future of Web3, one protocol at a time
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 via-blue-600 to-cyan-600 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 border-4 border-background hidden md:block" />

                <div className="md:ml-20">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-8 rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-sm hover:border-purple-500/50 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl mb-1">{exp.role}</h3>
                          <div className="flex items-center gap-2 text-purple-400">
                            <Briefcase className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-400">
                            <span className="text-purple-400 mt-1">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
