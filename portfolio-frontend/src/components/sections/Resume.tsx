import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { profile } from '../../data/profile';
import { Download, Eye, FileText } from 'lucide-react';

export default function Resume() {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="resume" className="section-padding" style={{ background: 'var(--color-bg)' }}>
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="section-badge"><FileText size={12} /> Resume</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-sm max-w-lg mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            Download or view my resume for a complete overview of my skills, projects and experience.
          </p>
          <div className="glow-line max-w-xs mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-2xl p-10 text-center">
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center border"
              style={{ borderColor: 'var(--color-border)' }}>
              <FileText size={36} className="text-indigo-400" />
            </div>

            <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--color-text)' }}>
              {profile.name}
            </h3>
            <p className="text-sm mb-8 gradient-text font-semibold">{profile.title}</p>

            {/* Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { icon: '⚙️', label: 'Backend', detail: 'Java / Spring' },
                { icon: '⚛️', label: 'Frontend', detail: 'React / TS' },
                { icon: '🗄️', label: 'Database', detail: 'MySQL' },
                { icon: '🐳', label: 'DevOps', detail: 'Docker / Git' },
              ].map(item => (
                <div key={item.label} className="rounded-xl p-3"
                  style={{ background: 'rgba(99,102,241,0.05)', border: '1px solid var(--color-border)' }}>
                  <div className="text-xl mb-1">{item.icon}</div>
                  <div className="text-xs font-semibold" style={{ color: 'var(--color-text)' }}>{item.label}</div>
                  <div className="text-xs" style={{ color: 'var(--color-text-faint)' }}>{item.detail}</div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={profile.resumeUrl}
                download
                className="btn-primary"
              >
                <Download size={16} />
                Download Resume
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Eye size={16} />
                View Resume
              </a>
            </div>

            <p className="text-xs mt-6" style={{ color: 'var(--color-text-faint)' }}>
              PDF format · Last updated 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
