import { motion } from 'framer-motion';
import { ArrowDown, Mail, Download, ExternalLink } from 'lucide-react';
import GithubIcon from '../ui/GithubIcon';
import LinkedinIcon from '../ui/LinkedinIcon';
import { profile } from '../../data/profile';

const techStack = ['Java', 'Spring Boot', 'React', 'MySQL', 'Docker', 'Git', 'REST APIs'];

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' as const },
  },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-grid"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Ambient gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }}
        />
        <div
          className="absolute top-1/3 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #818cf8, transparent)' }}
        />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting badge */}
            <motion.div variants={itemVariants}>
              <span className="section-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-3"
              style={{ color: 'var(--color-text)' }}
            >
              Hi, I'm{' '}
              <span className="gradient-text">{profile.firstName}</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold mb-2"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {profile.title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-sm font-medium mb-5 tracking-wide"
              style={{ color: 'var(--color-text-faint)' }}
            >
              {profile.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed mb-8 max-w-xl"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {profile.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
              <button onClick={scrollToProjects} className="btn-primary">
                <ExternalLink size={15} />
                View My Projects
              </button>
              <a href={profile.resumeUrl} download className="btn-outline">
                <Download size={15} />
                Download Resume
              </a>
              <button onClick={scrollToContact} className="btn-outline">
                <Mail size={15} />
                Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm transition-colors hover:text-indigo-400"
                style={{ color: 'var(--color-text-faint)' }}
              >
                <GithubIcon size={16} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm transition-colors hover:text-blue-400"
                style={{ color: 'var(--color-text-faint)' }}
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 text-sm transition-colors hover:text-indigo-400"
                style={{ color: 'var(--color-text-faint)' }}
              >
                <Mail size={16} /> Email
              </a>
            </motion.div>
          </motion.div>

          {/* Right — tech visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative w-full max-w-md"
            >
              {/* Central card */}
              <div className="glass rounded-2xl p-8 text-center shadow-2xl shadow-indigo-500/10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-2xl shadow-lg shadow-indigo-500/30">
                  👨‍💻
                </div>
                <p className="text-lg font-bold mb-1 gradient-text">{profile.name}</p>
                <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
                  {profile.title}
                </p>

                {/* Architecture flow */}
                <div className="space-y-2 text-left">
                  {[
                    { label: 'Frontend', tech: 'React + Vite', color: 'text-cyan-400' },
                    { label: 'API Layer', tech: 'REST APIs', color: 'text-indigo-400' },
                    { label: 'Backend', tech: 'Spring Boot', color: 'text-violet-400' },
                    { label: 'Database', tech: 'MySQL + JPA', color: 'text-emerald-400' },
                    { label: 'DevOps', tech: 'Docker + Git', color: 'text-orange-400' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="flex items-center justify-between rounded-lg px-3 py-2"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-border)' }}
                    >
                      <span className="text-xs" style={{ color: 'var(--color-text-faint)' }}>{item.label}</span>
                      <span className={`text-xs font-semibold ${item.color}`}>{item.tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating tech badges */}
              {techStack.slice(0, 4).map((tech, i) => {
                const positions = [
                  'absolute -top-4 -right-4',
                  'absolute -bottom-4 -left-4',
                  'absolute top-1/4 -right-10',
                  'absolute bottom-1/4 -left-10',
                ];
                return (
                  <motion.div
                    key={tech}
                    className={`${positions[i]} glass rounded-lg px-2.5 py-1.5 text-xs font-semibold`}
                    style={{ color: 'var(--color-primary-light)' }}
                    animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                  >
                    {tech}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs" style={{ color: 'var(--color-text-faint)' }}>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ color: 'var(--color-text-faint)' }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
