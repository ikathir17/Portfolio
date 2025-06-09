export type Certification = {
  title: string;
  issuer: string;
  year: string;
  details?: string;
  image?: string;
};

export const certifications: Certification[] = [
  {
    title: 'Infosys Java Foundation',
    issuer: 'Infosys',
    year: 'Aug 2024',
    details: 'Core Java programming concepts.\nObject-oriented programming.',
    image: '/Certifications/Infosys Java Foundation.jpg',
  },
  {
    title: 'Infosys Python Foundation',
    issuer: 'Infosys',
    year: 'Sep 2024',
    details: 'Python programming essentials.\nData structures & algorithms.',
    image: '/Certifications/Infosys Python Foundation.jpg',
  },
  {
    title: 'NPTEL Design Thinking - A Primer',
    issuer: 'NPTEL',
    year: 'Jan - Feb 2024',
    details: 'Human-centered design methodology.\nIIT Madras certified.\nScore: 71%',
    image: '/Certifications/NPTEL Design Thinking.jpg',
  },
  {
    title: 'Google Cloud Computing Foundations & Generative AI',
    issuer: 'Google',
    year: 'Feb 2024',
    details: 'Google Cloud Computing Fundamentals.\n8-course program.\nCloud infrastructure & networking.\nData, ML & AI in Google Cloud.',
    image: '/Certifications/Google Cloud Computing Foundations & Generative AI.jpg',
  },
  {
    title: 'Google Cybersecurity Professional',
    issuer: 'Google',
    year: 'Nov 2024',
    details: 'Security risk management.\nPython automation for security.\nLinux/SQL security tools.',
    image: '/Certifications/Google Cybersecurity.jpg',
  },
]; 