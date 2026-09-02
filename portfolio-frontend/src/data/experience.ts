/**
 * experience.ts — Static fallback data for the Experience section.
 *
 * This data is used when the backend is unreachable or has no entries yet.
 * Once you add entries via the Admin Dashboard (/admin), the live API data
 * takes precedence and this file is no longer shown.
 *
 * TODO: Replace every placeholder field below with your actual experience.
 * If you have no professional experience yet, use type: 'Academic' or
 * type: 'Freelance' to showcase personal projects or self-study.
 */
export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  type: 'Full-time' | 'Internship' | 'Freelance' | 'Part-time' | 'Academic';
  description: string;
  responsibilities: string[];
  technologies: string[];
  current: boolean;
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    // TODO: Replace with your actual role title
    role: 'Java Full Stack Engineer',
    // TODO: Replace with the company or organisation name
    company: 'Tap Academy',
    // TODO: Replace with city and country
    location: 'Bengaluru, India',
    // TODO: Replace with total duration, e.g. "6 months"
    duration: '7 months',
    // TODO: Replace with actual start date, e.g. "Jan 2024"
    startDate: 'Feb 2024',
    // TODO: Replace with actual end date, e.g. "Jun 2024" or leave as "Present"
    endDate: 'Aug 2024',
    type: 'Internship',
    // TODO: Replace with a concise summary of your role and impact
    description:
      'Gained hands-on experience in Java, Spring Boot, REST APIs, React.js, and MySQL through industry-oriented training.',
    // TODO: Replace with your actual responsibilities — quantify where possible
    responsibilities: [
      'Built full-stack applications with JWT authentication, database integration, and secure backend services',
      'Strengthened skills in OOP, Data Structures & Algorithms, Database Design, and Software Engineering practices.'
    ],
    // TODO: Replace with technologies you used in this role
    technologies: ['Java', 'Spring Boot', 'MySQL', 'React'],
    current: false,
  },
];
