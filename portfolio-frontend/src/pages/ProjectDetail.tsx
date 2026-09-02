import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import GithubIcon from '../components/ui/GithubIcon';
import { projects } from '../data/projects';
import ImageGallery from '../components/ui/ImageGallery';
import { Helmet } from 'react-helmet-async';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [expandedChallenge, setExpandedChallenge] = useState<number | null>(null);

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--color-bg)' }}>
        <div className="text-center">
          <p className="text-6xl mb-4">🔍</p>
          <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Project Not Found</h2>
          <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
            The project "{id}" doesn't exist.
          </p>
          <div className="flex gap-3 justify-center">
            <button onClick={() => navigate(-1)} className="btn-outline text-sm">
              <ArrowLeft size={15} /> Go Back
            </button>
            <button onClick={() => navigate('/projects')} className="btn-primary text-sm">
              All Projects
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Toujar Kundenayak</title>
        <meta name="description" content={project.shortDescription} />
      </Helmet>

      <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>

        {/* Hero banner */}
        <div className="relative h-56 sm:h-72 bg-gradient-to-br from-indigo-900/60 to-cyan-900/40 flex items-end overflow-hidden">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent" />
          <div className="container-custom relative z-10 pb-8">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-sm mb-4 hover:text-indigo-400 transition-colors"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <ArrowLeft size={16} /> Back
            </motion.button>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: 'var(--color-text)' }}
            >
              {project.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-2 text-sm max-w-2xl"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {project.shortDescription}
            </motion.p>
          </div>
        </div>

        {/* Content */}
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main */}
            <div className="lg:col-span-2 space-y-10">

              <Section title="Project Overview" emoji="📋">
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {project.description}
                </p>
              </Section>

              {project.problem && (
                <Section title="The Problem" emoji="🎯">
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    {project.problem}
                  </p>
                </Section>
              )}

              {project.solution && (
                <Section title="The Solution" emoji="💡">
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    {project.solution}
                  </p>
                </Section>
              )}

              {project.features.length > 0 && (
                <Section title="Key Features" emoji="✨">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3 glass rounded-lg p-3">
                        <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">✓</span>
                        <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </Section>
              )}

              {project.architecture.length > 0 && (
                <Section title="Architecture" emoji="🏗️">
                  <div className="flex flex-col items-start gap-1">
                    {project.architecture.map((layer, i) => (
                      <div key={i} className="flex flex-col items-start">
                        <div className="glass rounded-lg px-4 py-2.5 text-sm font-medium"
                          style={{ color: 'var(--color-text)', minWidth: '180px' }}>
                          {layer}
                        </div>
                        {i < project.architecture.length - 1 && (
                          <div className="w-px h-5 ml-6 bg-indigo-500/30" />
                        )}
                      </div>
                    ))}
                  </div>
                </Section>
              )}

              {project.screenshots.length > 0 && (
                <Section title="Screenshots" emoji="🖼️">
                  <ImageGallery screenshots={project.screenshots} />
                </Section>
              )}

              {project.challenges.length > 0 && (
                <Section title="Challenges & Solutions" emoji="🧩">
                  <div className="space-y-3">
                    {project.challenges.map((c, i) => (
                      <div key={i} className="glass rounded-xl overflow-hidden">
                        <button
                          className="w-full flex items-center justify-between p-4 text-left"
                          onClick={() => setExpandedChallenge(expandedChallenge === i ? null : i)}
                        >
                          <span className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>{c.title}</span>
                          <ChevronDown
                            size={16}
                            className="transition-transform flex-shrink-0"
                            style={{
                              color: 'var(--color-text-muted)',
                              transform: expandedChallenge === i ? 'rotate(180deg)' : 'rotate(0)',
                            }}
                          />
                        </button>
                        {expandedChallenge === i && (
                          <div className="px-4 pb-4 space-y-2" style={{ borderTop: '1px solid var(--color-border)' }}>
                            <p className="text-xs leading-relaxed pt-3" style={{ color: 'var(--color-text-muted)' }}>
                              <strong className="text-rose-400">Challenge: </strong>{c.description}
                            </p>
                            <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                              <strong className="text-emerald-400">Solution: </strong>{c.solution}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </Section>
              )}

              {project.learnings.length > 0 && (
                <Section title="What I Learned" emoji="📚">
                  <ul className="space-y-2">
                    {project.learnings.map((l, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                        <span className="text-indigo-400 mt-0.5 flex-shrink-0">▹</span>
                        {l}
                      </li>
                    ))}
                  </ul>
                </Section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="glass rounded-xl p-6 sticky top-20">
                <h3 className="text-sm font-bold mb-4 uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                  Links
                </h3>
                <div className="space-y-3">
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="btn-outline w-full justify-center text-sm">
                      <GithubIcon size={15} /> View on GitHub
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="btn-primary w-full justify-center text-sm">
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  )}
                  {project.docsUrl && (
                    <a href={project.docsUrl} target="_blank" rel="noopener noreferrer"
                      className="btn-outline w-full justify-center text-sm">
                      <ExternalLink size={15} /> Documentation
                    </a>
                  )}
                </div>

                {project.stats.length > 0 && (
                  <div className="mt-6 pt-5" style={{ borderTop: '1px solid var(--color-border)' }}>
                    <h3 className="text-sm font-bold mb-4 uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                      Stats
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {project.stats.map((s, i) => (
                        <div key={i} className="text-center rounded-lg p-3"
                          style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid var(--color-border)' }}>
                          <div className="text-xl font-bold gradient-text">{s.value}</div>
                          <div className="text-xs" style={{ color: 'var(--color-text-faint)' }}>{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.technologies.length > 0 && (
                  <div className="mt-6 pt-5" style={{ borderTop: '1px solid var(--color-border)' }}>
                    <h3 className="text-sm font-bold mb-3 uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map(t => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded"
                          style={{ background: 'rgba(99,102,241,0.08)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.15)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

function Section({ title, emoji, children }: { title: string; emoji: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--color-text)' }}>
        <span>{emoji}</span>{title}
      </h2>
      {children}
    </motion.div>
  );
}
