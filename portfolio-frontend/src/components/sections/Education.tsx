import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { educations } from '../../data/education';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="education" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container-custom" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="section-badge"><GraduationCap size={12} /> Education</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Academic <span className="gradient-text">Background</span>
          </h2>
          <div className="glow-line max-w-xs mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {educations.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 card-hover"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 border"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <GraduationCap size={22} className="text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold" style={{ color: 'var(--color-text)' }}>
                      {edu.degree}
                    </h3>
                    {edu.field && <p className="text-sm gradient-text font-semibold">{edu.field}</p>}
                    <p className="text-sm mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                      {edu.institution}{edu.location ? ` · ${edu.location}` : ''}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  {(edu.startYear || edu.endYear) && (
                    <div className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
                      {edu.startYear}{edu.endYear && edu.endYear !== edu.startYear ? ` — ${edu.endYear}` : ''}
                    </div>
                  )}
                  {edu.grade && (
                    <div className="text-xs mt-1 font-medium text-indigo-400">
                      {edu.gradeLabel ?? 'Grade'}: {edu.grade}
                    </div>
                  )}
                  {edu.current && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-400/10 border border-green-400/20 text-green-400 font-medium mt-1 inline-block">
                      Ongoing
                    </span>
                  )}
                </div>
              </div>

              {edu.coursework.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--color-text-faint)' }}>
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map(c => (
                      <span key={c} className="text-xs px-2 py-0.5 rounded"
                        style={{ background: 'rgba(99,102,241,0.08)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.15)' }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {edu.achievements.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--color-text-faint)' }}>
                    Achievements
                  </p>
                  <ul className="space-y-1">
                    {edu.achievements.map((a, ai) => (
                      <li key={ai} className="flex items-start gap-2 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        <Award size={12} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
