export type SkillCategory = 'Top Skills' | 'Development' | 'Design' | 'Soft Skills';

export type Skill = {
  name: string;
  category: SkillCategory;
};

// All unique skills with their primary category
export const allSkills: { [key: string]: SkillCategory } = {
  // Top Skills
  'Web Development': 'Top Skills',
  'Java': 'Top Skills',
  'Web Design': 'Top Skills',
  'UI/UX': 'Top Skills',
  'Public Speaking': 'Top Skills',
  
  // Development
  'Full-Stack Development': 'Development',
  'Front-End Development': 'Development',
  'HTML / CSS / JavaScript': 'Development',
  'Python': 'Development',
  'Django': 'Development',
  'MERN Stack': 'Development',
  'C': 'Development',
  'C++': 'Development',
  
  // Design
  'Figma': 'Design',
  'Prototyping': 'Design',
  'Graphic Design': 'Design',
  'Canva': 'Design',
  
  // Soft Skills
  'Design Thinking': 'Soft Skills',
  'Teamwork': 'Soft Skills',
  'Analytical Skills': 'Soft Skills',
  'Creativity & Innovation': 'Soft Skills',
  'Organization Skills': 'Soft Skills',
  'Time Management': 'Soft Skills'
};

// Convert to array format for compatibility
export const skills: Skill[] = Object.entries(allSkills).map(([name, category]) => ({
  name,
  category
}));

export const skillCategories = [
  'Top Skills',
  'Development',
  'Design',
  'Soft Skills'
];