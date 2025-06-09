export type Project = {
  title: string;
  description: string;
  image: string;
  images?: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  technologies?: string[];
  features?: string[];
  link?: string;
  credentials?: {
    username: string;
    password: string;
  };
};

export const projects: Project[] = [
  {
    title: "Grievance Handling System",
    description: "Developed an institutional grievance resolution platform with multi-role access (users, employee, admin). Implemented ticket lifecycle management (submit/track/resolve) and designed intuitive UI with dashboard analytics for administrators.",
    image: "/Projects/Grievance Handling System.png",
    images: [
      "/Projects/Grievance Handling System.png",
      "/Projects/Grievance Handling System.png",
      "/Projects/Grievance Handling System.png"
    ],
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
    technologies: ["Django", "SQLite", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    features: [
      "Multi-role access control (Admin, Employee, User)",
      "Ticket submission and tracking system",
      "Real-time status updates",
      "Admin dashboard with analytics"
    ],
    link: "https://grievance-handling-system-ashen.vercel.app/",
    credentials: {
      username: "demo@example.com",
      password: "demo123"
    }
  },
  {
    title: "Disaster Management System",
    description: "Built real-time disaster monitoring with geolocation tagging. Features include crowdsourced reporting, resource allocation maps, and volunteer coordination.",
    image: "/Projects/Disaster Management System.png",
    images: [
      "/Projects/Disaster Management System.png",
      "/Projects/Disaster Management System.png",
      "/Projects/Disaster Management System.png"
    ],
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
    technologies: ["React", "Node.js", "Express", "MongoDB", "Mapbox", "Socket.io"],
    features: [
      "Real-time disaster reporting with geolocation",
      "Interactive map for visualizing disaster zones",
      "Resource allocation and management",
      "Volunteer coordination system",
      "Crowdsourced incident reporting"
    ],
    link: "https://disaster-management-demo.vercel.app/",
    credentials: {
      username: "demo@disaster.com",
      password: "demo123"
    }
  },
  {
    title: "E-Commerce Platform",
    description: "Created full-featured online store for fashion brand. Implemented product filtering, user reviews, wishlists, and Stripe payments integration.",
    image: "/Projects/Ecommerce.png",
    images: [
      "/Projects/Ecommerce.png",
      "/Projects/Ecommerce.png",
      "/Projects/Ecommerce.png"
    ],
    metrics: [
      {
        value: "Full",
        label: "E-commerce"
      },
      {
        value: "Stripe",
        label: "Payments"
      }
    ],
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux"],
    features: [
      "Product catalog with filtering and search",
      "User authentication and profiles",
      "Shopping cart and wishlist",
      "Secure payment processing with Stripe"
    ],
    link: "https://ecommerce-platform-ashen.vercel.app/",
    credentials: {
      username: "demo@example.com",
      password: "demo123"
    }
  }
];