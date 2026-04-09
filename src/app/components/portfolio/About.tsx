import { motion } from "motion/react";
import { Code2, Shield, Zap, Database } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Rust Expertise",
      description: "Building high-performance backend systems with Actix and Axum frameworks",
    },
    {
      icon: Shield,
      title: "Smart Contracts",
      description: "Developing secure and audited smart contracts for DeFi protocols",
    },
    {
      icon: Zap,
      title: "Blockchain Development",
      description: "Specializing in Solana and EVM-compatible chains with deep protocol knowledge",
    },
    {
      icon: Database,
      title: "Scalable Systems",
      description: "Architecting robust backend infrastructure for Web3 applications",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I'm passionate about building the future of decentralized finance. 
            With expertise in Rust and blockchain technologies, I create secure, performant solutions 
            that power the next generation of Web3 applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-sm hover:border-purple-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
