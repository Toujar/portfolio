/**
 * profile.ts — Personal information for the portfolio site.
 *
 * Replace every placeholder value below with your real data.
 * Fields marked with TODO require your input before deploying.
 */
export const profile = {
  // ── Identity ──────────────────────────────────────────────
  name:       'Toujar Kundenayak',
  firstName:  'Toujar',
  title:      'Java Full Stack Engineer',
  subtitle:   'Software Engineer | Spring Boot | React | MySQL',
  tagline:    'I build scalable, production-ready web applications using Java, Spring Boot, React, SQL and modern software engineering practices.',

  bio: `I am a Java Full Stack Engineer focused on building reliable, scalable and maintainable web applications.
I enjoy designing backend systems with Spring Boot, building responsive interfaces with React,
and working with databases, REST APIs, authentication, Docker and modern development practices.`,

  // ── Assets ────────────────────────────────────────────────
  // TODO: place your photo at /public/images/profile.jpg
  profileImage: '/images/profile.jpeg',

  // TODO: place your resume PDF at /public/resume/Toujar_Kundenayak_Resume.pdf
  resumeUrl: 'https://drive.google.com/file/d/1oWKzn13TkOFty4OyJYd-WxEmJiJj3pJX/view?usp=drive_link',

  // ── Social links ─────────────────────────────────────────
  // TODO: replace with your actual URLs
  github:   'https://github.com/Toujar',
  linkedin: 'https://www.linkedin.com/in/toujar-kundenayak-a4612827b/',
  email:    'kundenayaktoujar@gmail.com',

  // ── Hero stats ────────────────────────────────────────────
  // TODO: update values to reflect your actual numbers
  stats: [
    { label: 'Projects Built',   value: '10+', icon: '🚀' },
    { label: 'Technologies',     value: '20+', icon: '⚙️' },
    { label: 'GitHub Repos',     value: '15+', icon: '🐙' },
    { label: 'Years Learning',   value: '3+',  icon: '📚' },
  ],
};
