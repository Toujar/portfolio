export interface Skill {
  name: string;
  icon: string;   // emoji fallback or image path
  description: string;
  level: 'Proficient' | 'Experienced' | 'Familiar';
}

export interface SkillGroup {
  category: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'from-violet-600/20 to-indigo-600/20',
    skills: [
      { name: 'Java', icon: '☕', description: 'Core language — OOP, Collections, Streams, Multithreading', level: 'Proficient' },
      { name: 'Spring Boot', icon: '🍃', description: 'Auto-configuration, starters, embedded server', level: 'Proficient' },
      { name: 'Spring MVC', icon: '🔗', description: 'REST controllers, request mapping, content negotiation', level: 'Proficient' },
      { name: 'Spring Data JPA', icon: '🗄️', description: 'Repositories, JPQL, pagination, projections', level: 'Proficient' },
      { name: 'Hibernate', icon: '🔄', description: 'ORM mapping, lazy/eager loading, caching', level: 'Experienced' },
      { name: 'Spring Security', icon: '🔒', description: 'JWT, filter chain, role-based access control', level: 'Experienced' },
      { name: 'REST APIs', icon: '🌐', description: 'RESTful design, HTTP semantics, JSON payloads', level: 'Proficient' },
    ],
  },
  {
    category: 'Frontend',
    icon: '🖥️',
    color: 'from-cyan-600/20 to-sky-600/20',
    skills: [
      { name: 'React', icon: '⚛️', description: 'Hooks, Context, React Router, component architecture', level: 'Experienced' },
      { name: 'JavaScript', icon: '🟨', description: 'ES2022+, async/await, closures, DOM manipulation', level: 'Experienced' },
      { name: 'TypeScript', icon: '🔷', description: 'Types, interfaces, generics, strict mode', level: 'Familiar' },
      { name: 'HTML5', icon: '🧱', description: 'Semantic markup, accessibility, SEO basics', level: 'Proficient' },
      { name: 'CSS3', icon: '🎨', description: 'Flexbox, Grid, animations, custom properties', level: 'Experienced' },
      { name: 'Tailwind CSS', icon: '💨', description: 'Utility-first styling, responsive design system', level: 'Experienced' },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    color: 'from-emerald-600/20 to-teal-600/20',
    skills: [
      { name: 'MySQL', icon: '🐬', description: 'Schema design, joins, indexes, transactions', level: 'Proficient' },
      { name: 'SQL', icon: '📊', description: 'Complex queries, aggregations, subqueries, views', level: 'Proficient' },
      { name: 'JDBC', icon: '🔌', description: 'Connection management, prepared statements', level: 'Experienced' },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: '🔧',
    color: 'from-orange-600/20 to-amber-600/20',
    skills: [
      { name: 'Git', icon: '🌿', description: 'Branching, merging, rebasing, conflict resolution', level: 'Proficient' },
      { name: 'GitHub', icon: '🐙', description: 'Pull requests, issues, Actions basics', level: 'Proficient' },
      { name: 'Docker', icon: '🐳', description: 'Dockerfile, docker-compose, multi-service setups', level: 'Experienced' },
      { name: 'Maven', icon: '📦', description: 'Build lifecycle, dependency management, profiles', level: 'Experienced' },
      { name: 'Postman', icon: '📬', description: 'API testing, collections, environments', level: 'Proficient' },
      { name: 'VS Code / IntelliJ', icon: '💻', description: 'IDE proficiency, debugging, plugins', level: 'Proficient' },
    ],
  },
  {
    category: 'CS Fundamentals',
    icon: '🧠',
    color: 'from-pink-600/20 to-rose-600/20',
    skills: [
      { name: 'OOP', icon: '🧩', description: 'Encapsulation, inheritance, polymorphism, abstraction', level: 'Proficient' },
      { name: 'Data Structures', icon: '📐', description: 'Arrays, LinkedList, HashMap, Stack, Queue, Tree', level: 'Experienced' },
      { name: 'Multithreading', icon: '⚡', description: 'Threads, Executors, synchronization, concurrent collections', level: 'Experienced' },
      { name: 'DBMS', icon: '🏛️', description: 'Normalisation, ACID, transactions, indexing', level: 'Experienced' },
      { name: 'OS Concepts', icon: '🖥️', description: 'Processes, memory management, scheduling', level: 'Familiar' },
      { name: 'Computer Networks', icon: '🌐', description: 'TCP/IP, HTTP/S, DNS, REST principles', level: 'Familiar' },
    ],
  },
];
