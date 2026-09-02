import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import GitHubSection from '../components/sections/GitHubSection';
import Resume from '../components/sections/Resume';
import Contact from '../components/sections/Contact';
import { profile } from '../data/profile';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{profile.name} | {profile.title}</title>
        <meta name="description" content={profile.tagline} />
      </Helmet>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <GitHubSection />
      <Resume />
      <Contact />
    </>
  );
}
