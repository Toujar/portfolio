/**
 * education.ts — Static fallback data for the Education section.
 *
 * This data is used when the backend is unreachable or has no entries yet.
 * Once you add entries via the Admin Dashboard (/admin), the live API data
 * takes precedence and this file is no longer shown.
 *
 * TODO: Replace every placeholder field below with your actual education details.
 */
export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
  grade?: string;
  gradeLabel?: string;
  coursework: string[];
  achievements: string[];
  current: boolean;
}

export const educations: Education[] = [
  {
    id: 'edu-1',
    // TODO: e.g. "Bachelor of Technology" or "B.E. Computer Science"
    degree: 'Bachelor of Engineering',
    // TODO: e.g. "Computer Science & Engineering"
    field: 'Computer Science & Engineering',
    // TODO: Replace with your institution name
    institution: 'BGMIT, VTU',
    // TODO: Replace with city and state/country
    location: 'Mudhol, Karnataka',
    // TODO: Four-digit year, e.g. "2021"
    startYear: '2022',
    // TODO: Four-digit year or "Present" if ongoing
    endYear: '2026',
    // TODO: Your CGPA or percentage — remove this field if you prefer not to display it
    grade: '8.7',
    gradeLabel: 'CGPA',
    // TODO: List subjects relevant to software engineering
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Object-Oriented Programming',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering',
    ],
    // TODO: Replace with your actual achievements — scholarships, ranks, awards, etc.
    // Remove this array or leave empty [] if you have none to list yet.
    achievements: [
      // 'Dean\'s List — Semester 3 & 4',
      // 'Best Project Award — Department Symposium 2023',
    ],
    current: false,
  },
];
