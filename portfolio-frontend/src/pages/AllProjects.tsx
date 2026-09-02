import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Search } from 'lucide-react';
import GithubIcon from '../components/ui/GithubIcon';
import { projects } from '../data/projects';
import { Helmet } from 'react-helmet-async';

export default function AllProjects() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filtered = projects.filter(p => {
    const matchCat    = filter === 'All' || p.category === filter;
    const matchSearch = !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.technologies.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <>
      <Helmet>
        <title>All Projects | Toujar Kundenayak</title>
        <meta name="description" content="Full-stack projects built with Java, Spring Boot, React and MySQL." />
      </Helmet>

      <div className="min-h-screen pt-20 pb-16" style={{ background: 'var(--color-bg)' }}>
        <div className="container-custom">

          {/* Header */}
          <div className="mb-10">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-sm mb-6 hover:text-indigo-400 transition-colors"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <ArrowLeft size={16} /> Back to Portfolio
            </button>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
              {projects.length} projects · Java, Spring Boot, React & MySQL
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="relative flex-1 min-w-[200px]">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--color-text-faint)' }} />
              <input
                type="text"
                placeholder="Search by name or tech…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-lg text-sm outline-none"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-all ${
                    filter === cat
                      ? 'bg-indigo-500 border-indigo-500 text-white'
                      : 'border-indigo-500/20 text-slate-400 hover:border-indigo-500/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="glass rounded-xl overflow-hidden card-hover flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative h-44 bg-gradient-to-br from-indigo-900/40 to-cyan-900/40 flex items-center justify-center overflow-hidden">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-50"
                      onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  )}
                  <span className="absolute text-5xl pointer-events-none select-none">
                    {project.category === 'Backend' ? '⚙️' : '🖥️'}
                  </span>
                  {project.featured && (
                    <div className="absolute top-2 left-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500 text-white font-semibold">Featured</span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 4).map(t => (
                      <span key={t} className="text-xs px-1.5 py-0.5 rounded"
                        style={{ background: 'rgba(99,102,241,0.08)', color: '#818cf8' }}>
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs px-1.5 py-0.5 rounded"
                        style={{ background: 'rgba(99,102,241,0.08)', color: '#818cf8' }}>
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold mb-2" style={{ color: 'var(--color-text)' }}>{project.title}</h3>
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
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs px-3">
                        <GithubIcon size={13} />
                      </a>
                    )}
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs px-3">
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-4xl mb-3">🔍</p>
              <p className="text-sm mb-4" style={{ color: 'var(--color-text-muted)' }}>No projects match your search.</p>
              <button onClick={() => { setSearch(''); setFilter('All'); }} className="btn-outline text-xs">
                Clear filters
              </button>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
