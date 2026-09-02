import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { skillGroups } from '../../data/skills';
import { Zap } from 'lucide-react';

const levelColors: Record<string, string> = {
  Proficient:  'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Experienced: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
  Familiar:    'text-amber-400 bg-amber-400/10 border-amber-400/20',
};

export default function Skills() {
  const { ref, inView } = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const displayed = activeCategory
    ? skillGroups.filter(g => g.category === activeCategory)
    : skillGroups;

  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--color-bg)' }}>
      <div className="container-custom" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="section-badge"><Zap size={12} /> Skills</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Technical <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            Technologies I work with regularly, grouped by domain. Proficiency reflects depth of real-world usage.
          </p>
          <div className="glow-line max-w-xs mx-auto mt-4" />
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              !activeCategory
                ? 'bg-indigo-500 border-indigo-500 text-white'
                : 'border-indigo-500/20 text-slate-400 hover:border-indigo-500/50'
            }`}
          >
            All
          </button>
          {skillGroups.map(g => (
            <button
              key={g.category}
              onClick={() => setActiveCategory(activeCategory === g.category ? null : g.category)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                activeCategory === g.category
                  ? 'bg-indigo-500 border-indigo-500 text-white'
                  : 'border-indigo-500/20 text-slate-400 hover:border-indigo-500/50'
              }`}
            >
              {g.icon} {g.category}
            </button>
          ))}
        </motion.div>

        {/* Skill groups */}
        <AnimatePresence mode="wait">
          <div className="space-y-8">
            {displayed.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: gi * 0.08 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-base">{group.icon}</span>
                  <h3 className="text-sm font-bold tracking-wide uppercase" style={{ color: 'var(--color-text-muted)' }}>
                    {group.category}
                  </h3>
                  <div className="flex-1 h-px" style={{ background: 'var(--color-border)' }} />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                  {group.skills.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: gi * 0.06 + si * 0.04 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className={`glass rounded-xl p-3 cursor-default group bg-gradient-to-br ${group.color}`}
                    >
                      <div className="text-xl mb-2 group-hover:scale-110 transition-transform">{skill.icon}</div>
                      <div className="text-xs font-semibold mb-1" style={{ color: 'var(--color-text)' }}>
                        {skill.name}
                      </div>
                      <div className="text-xs leading-tight mb-2" style={{ color: 'var(--color-text-faint)' }}>
                        {skill.description}
                      </div>
                      <span className={`inline-block text-xs px-2 py-0.5 rounded-full border font-medium ${levelColors[skill.level]}`}>
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mt-10"
        >
          {(['Proficient', 'Experienced', 'Familiar'] as const).map(level => (
            <div key={level} className="flex items-center gap-1.5">
              <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${levelColors[level]}`}>{level}</span>
            </div>
          ))}
          <span className="text-xs" style={{ color: 'var(--color-text-faint)' }}>— based on real project usage</span>
        </motion.div>

      </div>
    </section>
  );
}
