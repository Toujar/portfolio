import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { projects } from '../../data/projects';
import { ExternalLink, ArrowRight, Layers } from 'lucide-react';
import GithubIcon from '../ui/GithubIcon';

export default function Projects() {
  const { ref, inView } = useScrollReveal();
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  const featured = filtered.filter(p => p.featured);

  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="section-badge"><Layers size={12} /> Projects</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            Production-ready applications built with Java, Spring Boot, React and MySQL. Click any project for full details.
          </p>
          <div className="glow-line max-w-xs mx-auto mt-4" />
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                filter === cat
                  ? 'bg-indigo-500 border-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'border-indigo-500/20 text-slate-400 hover:border-indigo-500/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Featured project — large card */}
        {featured[0] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl overflow-hidden mb-8 card-hover group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-56 lg:h-auto bg-gradient-to-br from-indigo-900/40 to-cyan-900/40 flex items-center justify-center">
                <img
                  src={featured[0].image}
                  alt={featured[0].title}
                  className="w-full h-full object-cover opacity-60"
                  onError={(e) => { (e.target as HTMLImageElement).style.display='none'; }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🍔</span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500 text-white">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {featured[0].technologies.slice(0, 5).map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {t}
                    </span>
                  ))}
                  {featured[0].technologies.length > 5 && (
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-500/10 text-slate-400">
                      +{featured[0].technologies.length - 5}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                  {featured[0].title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-text-muted)' }}>
                  {featured[0].shortDescription}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {featured[0].stats.map(s => (
                    <div key={s.label} className="text-center">
                      <div className="text-lg font-bold gradient-text">{s.value}</div>
                      <div className="text-xs" style={{ color: 'var(--color-text-faint)' }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => navigate(`/projects/${featured[0].id}`)}
                    className="btn-primary text-sm"
                  >
                    View Details <ArrowRight size={14} />
                  </button>
                  <a href={featured[0].githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                    <GithubIcon size={14} /> GitHub
                  </a>
                  {featured[0].liveUrl !== '#' && (
                    <a href={featured[0].liveUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Remaining project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(1).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="glass rounded-xl overflow-hidden card-hover group flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative h-40 bg-gradient-to-br from-indigo-900/40 to-cyan-900/40 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { (e.target as HTMLImageElement).style.display='none'; }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl">
                    {project.category === 'Backend' ? '⚙️' : project.category === 'Full Stack' ? '🖥️' : '📦'}
                  </span>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(99,102,241,0.2)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.25)' }}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 4).map(t => (
                    <span key={t} className="text-xs px-1.5 py-0.5 rounded"
                      style={{ background: 'rgba(99,102,241,0.08)', color: '#818cf8' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                  {project.title}
                </h3>
                <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: 'var(--color-text-muted)' }}>
                  {project.shortDescription}
                </p>
                <div className="flex gap-2 pt-3 border-t" style={{ borderColor: 'var(--color-border)' }}>
                  <button
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className="btn-primary text-xs flex-1 justify-center"
                  >
                    Details
                  </button>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs px-3">
                    <GithubIcon size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <button
            onClick={() => navigate('/projects')}
            className="btn-outline"
          >
            View All Projects <ArrowRight size={15} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
