export type SkillCategory = 'Top Skills' | 'Development' | 'Design' | 'Soft Skills';

export type Skill = {
  name: string;
  category: SkillCategory;
};

export const skills: Skill[] = [
  // Top Skills
  { name: 'Web Development', category: 'Top Skills' },
  { name: 'Java', category: 'Top Skills' },
  { name: 'Web Design', category: 'Top Skills' },
  { name: 'UI/UX', category: 'Top Skills' },
  { name: 'Public Speaking', category: 'Top Skills' },

  // Development
  { name: 'Full-Stack Development', category: 'Development' },
  { name: 'Front-End Development', category: 'Development' },
  { name: 'HTML / CSS / JavaScript', category: 'Development' },
  { name: 'Python', category: 'Development' },
  { name: 'C', category: 'Development' },
  { name: 'C++', category: 'Development' },
  { name: 'Django', category: 'Development' },
  { name: 'MERN Stack', category: 'Development' },

  // Design
  { name: 'UI/UX Design', category: 'Design' },
  { name: 'Figma', category: 'Design' },
  { name: 'Prototyping', category: 'Design' },
  { name: 'Graphic Design', category: 'Design' },
  { name: 'Canva', category: 'Design' },

  // Soft Skills
  { name: 'Public Speaking', category: 'Soft Skills' },
  { name: 'Design Thinking', category: 'Soft Skills' },
  { name: 'Teamwork', category: 'Soft Skills' },
  { name: 'Analytical Skills', category: 'Soft Skills' },
  { name: 'Creativity & Innovation', category: 'Soft Skills' },
  { name: 'Organization Skills', category: 'Soft Skills' },
  { name: 'Time Management', category: 'Soft Skills' },
];

export const skillCategories = [
  "UX Design",
  "UI Design",
  "Product Design",
  "Consulting",
  "Design Systems",
  "Front-End Development",
  "Workshops",
  "Design Sprint",
  "Interaction Design",
  "User Testing",
  "Usability Testing",
  "UX Research",
  "Leadership",
  "Mentoring",
  "No-Code"
];