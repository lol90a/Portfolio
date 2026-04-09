import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export function Projects() {
  const projects = [
    {
      title: "AeroLedger",
      description: "Crypto-native commerce platform for private aviation and luxury marketplace purchases, featuring protected checkout, multi-chain payment flows, proof uploads, and transaction tracking.",
      image: "https://a.storyblok.com/f/129978/3840x2430/c8749ab90e/aero-site-hor-dallas-jet-2.png/m/1080x0/filters:format(webp):quality(75)",
      tech: ["Rust", "Actix Web","Solana", "EVM", "PostgreSQL", "React", "TypeScript"],
      github: "https://github.com/lol90a/areo_ledger",
    },
    {
      title: "Rust CLI Todo App",
      description: "A lightweight Rust command-line todo manager with JSON-based persistence, task completion flows, and colored terminal output for a smooth developer-friendly workflow.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tech: ["Rust", "Serde", "Serde JSON", "Colored"],
      github: "https://github.com/lol90a/Rust-CLI-Todo-App",
    },
    {
      title: "Blockchain IoT Registry",
      description: "Full-stack IoT device registry with a React frontend and Node.js backend connected to Hyperledger Fabric for secure device registration, updates, and lifecycle management.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tech: ["React", "Node.js", "Hyperledger Fabric", "JavaScript", "AES"],
      github: "https://github.com/lol90a/Blockchain",
    },
    {
      title: "DeFi Trading Platform",
      description: "High-frequency trading platform built with Rust and Solana, handling 10k+ TPS with sub-millisecond latency. Implements automated market making and liquidity provision strategies.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJsb2NrY2hhaW4lMjBuZXR3b3JrJTIwbm9kZXN8ZW58MXx8fHwxNzc1NjkzODkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["Rust", "Solana", "Actix", "PostgreSQL", "React"],
      github: "https://github.com",
    },
    {
      title: "NFT Marketplace",
      description: "Full-stack NFT marketplace on Ethereum with custom ERC-721 contracts. Features gasless minting, royalty management, and advanced search capabilities.",
      image: "https://images.unsplash.com/photo-1762951566442-af07db89ab1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMHB1cnBsZSUyMGdyYWRpZW50fGVufDF8fHx8MTc3NTY5Mzg5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["Solidity", "Ethereum", "Node.js", "IPFS", "Next.js"],
      github: "https://github.com",
    },
    {
      title: "Escrow System (Solana)",
      description: "Decentralized escrow protocol for secure peer-to-peer transactions on Solana. Smart contracts audited and deployed on mainnet with $2M+ in total volume.",
      image: "https://images.unsplash.com/photo-1590285836796-f772deafabfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGJsb2NrY2hhaW4lMjBkaWdpdGFsfGVufDF8fHx8MTc3NTYzNzY0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["Rust", "Solana", "Anchor"],
      github: "https://github.com/lol90a/Solana-Escrow-Wallet",
    },
    {
      title: "Token Swap Platform",
      description: "AMM-based token swap protocol with optimized routing algorithms. Supports cross-chain swaps and provides better rates than major competitors.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJsb2NrY2hhaW4lMjBuZXR3b3JrJTIwbm9kZXN8ZW58MXx8fHwxNzc1NjkzODkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["Rust", "Solana", "React", "Web3.js", "Axum"],
      github: "https://github.com",
    },
    {
      title: "Lending Protocol",
      description: "Decentralized lending and borrowing platform with dynamic interest rates. Supports multiple collateral types and flash loans.",
      image: "https://images.unsplash.com/photo-1762951566442-af07db89ab1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMHB1cnBsZSUyMGdyYWRpZW50fGVufDF8fHx8MTc3NTY5Mzg5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["Solidity", "Ethereum", "Hardhat", "Vue.js", "Node.js"],
      github: "https://github.com",
    },
    {
      title: "Blockchain Explorer",
      description: "Real-time blockchain explorer with advanced analytics and transaction visualization. Indexes millions of transactions with instant search.",
      image: "https://images.unsplash.com/photo-1590285836796-f772deafabfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGJsb2NrY2hhaW4lMjBkaWdpdGFsfGVufDF8fHx8MTc3NTYzNzY0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["Rust", "PostgreSQL", "React", "WebSocket", "Redis"],
      github: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Building production-grade Web3 applications that move millions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-purple-500/50 transition-colors">
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge
                        variant="outline"
                        className="border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs"
                      >
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-purple-500/30 hover:bg-purple-500/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
