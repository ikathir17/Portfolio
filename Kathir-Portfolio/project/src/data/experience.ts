export type Experience = {
  role: string;
  company: string;
  duration: string;
  details?: string;
  image?: string;
};

export const experiences: Experience[] = [
  {
    role: "UI/UX Design Intern",
    company: "CodSoft",
    duration: "Oct 2024",
    details: "Completed a 4-week intensive virtual internship in UI/UX design.\nDesigned wireframes and prototypes with \"wonderful remarks\" from mentors.\nTools: Figma, Design Thinking methodologies.",
    image: '/Experience/UIUX Design Intern.jpg',
  },
  {
    role: "Software Development Intern",
    company: "Infosys (Internship 5.0)",
    duration: "Feb-Apr 2025",
    details: "Developed a Grievance Handling System (full-stack) as part of Infosys' training program.\nCollaborated on system architecture and user-facing features.\nTech Stack: HTML/CSS, JavaScript, Django, SQLlight.",
    image: '/Experience/Software Dev Intern.jpg',
  },
];
