// About page — story, stack, philosophy
export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-accent">Story</h2>
        <p className="text-foreground/70 leading-relaxed">
          {/* TODO: Fill in personal story */}
          Developer Advocate passionate about bridging Web3 and AI technologies
          with emerging markets. Based in LATAM, building globally.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-accent">Stack</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "TypeScript",
            "Next.js",
            "React",
            "Node.js",
            "Python",
            "Solidity",
            "PostgreSQL",
            "Tailwind CSS",
            "Claude API",
            "Ethers.js",
            "Mapbox",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-sm border border-white/10 rounded-lg text-foreground/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-accent">Philosophy</h2>
        <p className="text-foreground/70 leading-relaxed">
          {/* TODO: Fill in philosophy */}
          Build tools that matter. Ship to real users in real markets. Prioritize
          developer experience and accessibility over complexity.
        </p>
      </section>
    </div>
  );
}
