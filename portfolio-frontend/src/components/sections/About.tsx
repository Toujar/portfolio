import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { profile } from '../../data/profile';
import { User } from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function About() {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="section-badge"><User size={12} /> About Me</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="glow-line max-w-xs mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile image + stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center lg:items-start gap-6"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 ring-1"
                style={{ borderColor: 'var(--color-border)' }}>
                {profile.profileImage ? (
                  <img
                    src={profile.profileImage}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : null}
                <div
                  className="w-full h-full flex items-center justify-center text-6xl"
                  style={{ background: 'linear-gradient(135deg, #1e1e2e, #13131f)' }}
                >
                  👨‍💻
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-2xl border border-indigo-500/20 pointer-events-none" />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {profile.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  className="glass rounded-xl p-4 text-center card-hover"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs" style={{ color: 'var(--color-text-faint)' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bio + philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
              {profile.name}
            </h3>
            <p className="text-sm font-medium mb-6 gradient-text">{profile.title}</p>

            <div className="space-y-4 mb-8">
              {profile.bio.split('\n').filter(Boolean).map((para, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {para.trim()}
                </p>
              ))}
            </div>

            {/* What I do cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  icon: '⚙️',
                  title: 'Backend Engineering',
                  desc: 'Spring Boot · REST APIs · JPA · Security',
                },
                {
                  icon: '⚛️',
                  title: 'Frontend Development',
                  desc: 'React · TypeScript · Tailwind · Framer Motion',
                },
                {
                  icon: '🗄️',
                  title: 'Database Design',
                  desc: 'MySQL · Schema design · JPA relationships',
                },
                {
                  icon: '🐳',
                  title: 'DevOps Basics',
                  desc: 'Docker · Docker Compose · Git workflows',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  className="glass rounded-xl p-4 card-hover"
                >
                  <div className="text-xl mb-2">{item.icon}</div>
                  <div className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text)' }}>
                    {item.title}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--color-text-faint)' }}>
                    {item.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
