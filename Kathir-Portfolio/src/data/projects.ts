export type Project = {
  title: string;
  description: string;
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Grievance Handling System",
    description: "Developed an institutional grievance resolution platform with multi-role access (users, employee, admin). Implemented ticket lifecycle management (submit/track/resolve) and designed intuitive UI with dashboard analytics for administrators.",
    image: "/Projects/Grievance Handling System.png",
    metrics: [
      {
        value: "60%",
        label: "Reduced Response Time"
      },
      {
        value: "3",
        label: "User Roles"
      }
    ],
    tags: ["Django", "SQLite", "HTML/CSS/JS"],
    link: undefined
  },
  {
    title: "Disaster Management System",
    description: "Built real-time disaster monitoring with geolocation tagging. Features include crowdsourced reporting, resource allocation maps, and volunteer coordination.",
    image: "/Projects/Disaster Management System.png",
    metrics: [
      {
        value: "40%",
        label: "Faster Response"
      },
      {
        value: "Real-time",
        label: "Monitoring"
      }
    ],
    tags: ["MongoDB", "Express", "React", "Node.js"],
    link: undefined
  },
  {
    title: "E-Commerce Platform",
    description: "Created full-featured online store for fashion brand. Implemented product filtering, user reviews, wishlists, and Stripe payments integration.",
    image: "/Projects/Ecommerce.png",
    metrics: [
      {
        value: "Full",
        label: "Feature Set"
      },
      {
        value: "Secure",
        label: "Payments"
      }
    ],
    tags: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
    link: undefined
  }
];