import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { profile } from '../../data/profile';
import { Star, GitFork, ExternalLink } from 'lucide-react';
import GithubIcon from '../ui/GithubIcon';

const repos = [
  {
    name: 'food-delivery-app',
    description: 'Full-stack food delivery platform with role-based access, JWT auth, real-time order tracking, and restaurant management. Spring Boot + React + MySQL.',
    language: 'Java',
    stars: 3,
    forks: 0,
    url: `${profile.github}/Zwigato`,
  },
  {
    name: 'creatorflow',
    description: 'Secure content approval & publishing platform. Eliminates credential sharing with a role-based workflow for creators, editors, and admins. Spring Boot + React.',
    language: 'Java',
    stars: 4,
    forks: 0,
    url: `${profile.github}/CreatorFlow`,
  },
  {
    name: 'chatguard-enterprise',
    description: 'Real-time messaging platform with a Chat Protection Engine that verifies sensitive actions before execution. Spring Boot + WebSocket + STOMP + JWT.',
    language: 'Java',
    stars: 3,
    forks: 0,
    url: `${profile.github}/ChatGaurd`,
  },
  {
    name: 'smartlease-hub',
    description: 'Property rental platform connecting owners and tenants with secure booking, dynamic search, and lease request management. Spring Boot + React + MySQL.',
    language: 'Java',
    stars: 2,
    forks: 0,
    url: `${profile.github}/SmartLease-Hub`,
  },
  {
    name: 'finsight-ai',
    description: 'OCR-powered expense management system with automatic bill extraction, expense categorisation, budget monitoring, and spending analytics. Spring Boot + MySQL + MongoDB.',
    language: 'Java',
    stars: 4,
    forks: 0,
    url: `${profile.github}/AI-Powered-Expense-Tracker`,
  },
];

const languageColors: Record<string, string> = {
  Java:       '#b07219',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python:     '#3572A5',
};

export default function GitHubSection() {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="github" className="section-padding" style={{ background: 'var(--color-bg)' }}>
      <div className="container-custom" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="section-badge"><GithubIcon size={12} /> Open Source</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            GitHub <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm max-w-lg mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            All projects are publicly available on GitHub. Feel free to explore the source code, open issues, or contribute.
          </p>
          <div className="glow-line max-w-xs mx-auto mt-4" />
        </motion.div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="glass rounded-xl p-6 mb-10 flex flex-wrap items-center gap-4 max-w-xl mx-auto"
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
            <GithubIcon size={28} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold truncate" style={{ color: 'var(--color-text)' }}>
              @{profile.github.replace(/.*github\.com\//, '')}
            </p>
            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{profile.title}</p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-faint)' }}>
              {repos.length} public repositories
            </p>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm flex-shrink-0"
          >
            <ExternalLink size={14} /> View Profile
          </a>
        </motion.div>

        {/* Repo grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08 }}
              className="glass rounded-xl p-5 card-hover flex flex-col gap-3 group"
            >
              {/* Repo name row */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span style={{ color: 'var(--color-text-faint)' }} className="flex-shrink-0 flex">
                    <GithubIcon size={15} />
                  </span>
                  <span
                    className="text-sm font-semibold truncate group-hover:text-indigo-400 transition-colors"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {repo.name}
                  </span>
                </div>
                <ExternalLink size={13} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-text-faint)' }} />
              </div>

              {/* Description */}
              <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--color-text-muted)' }}>
                {repo.description}
              </p>

              {/* Meta row */}
              <div className="flex items-center gap-4 pt-1 border-t" style={{ borderColor: 'var(--color-border)' }}>
                {repo.language && (
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-text-faint)' }}>
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ background: languageColors[repo.language] ?? '#6366f1' }}
                    />
                    {repo.language}
                  </div>
                )}
                <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-text-faint)' }}>
                  <Star size={11} /> {repo.stars}
                </div>
                <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-text-faint)' }}>
                  <GitFork size={11} /> {repo.forks}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm inline-flex"
          >
            <GithubIcon size={15} /> View All Repositories
          </a>
        </motion.div>

      </div>
    </section>
  );
}
