import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { experiences } from '../../data/experience';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const typeColors: Record<string, string> = {
  'Full-time':  'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Internship:   'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
  Freelance:    'text-amber-400 bg-amber-400/10 border-amber-400/20',
  'Part-time':  'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  Academic:     'text-violet-400 bg-violet-400/10 border-violet-400/20',
};

export default function Experience() {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="experience" className="section-padding" style={{ background: 'var(--color-bg)' }}>
      <div className="container-custom" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="section-badge"><Briefcase size={12} /> Experience</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Work <span className="gradient-text">History</span>
          </h2>
          <div className="glow-line max-w-xs mx-auto" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(99,102,241,0.4), transparent)' }}
          />

          <div className="space-y-8 pl-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.65rem] top-5 w-4 h-4 rounded-full border-2 border-indigo-500 bg-indigo-500/20 z-10" />

                <div className="glass rounded-xl p-6 card-hover">
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-base font-bold" style={{ color: 'var(--color-text)' }}>
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold gradient-text">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${typeColors[exp.type] ?? typeColors['Internship']}`}>
                        {exp.type}
                      </span>
                      {exp.current && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-400/10 border border-green-400/20 text-green-400 font-medium">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-text-faint)' }}>
                      <Calendar size={12} />
                      {exp.startDate} — {exp.endDate}
                      {exp.duration ? ` · ${exp.duration}` : ''}
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-text-faint)' }}>
                        <MapPin size={12} />
                        {exp.location}
                      </div>
                    )}
                  </div>

                  {exp.description && (
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
                      {exp.description}
                    </p>
                  )}

                  {exp.responsibilities.length > 0 && (
                    <ul className="space-y-1.5 mb-4">
                      {exp.responsibilities.map((r, ri) => (
                        <li key={ri} className="flex items-start gap-2 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                          <span className="text-indigo-400 mt-0.5 flex-shrink-0">▹</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map(t => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded"
                          style={{ background: 'rgba(99,102,241,0.08)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.15)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
