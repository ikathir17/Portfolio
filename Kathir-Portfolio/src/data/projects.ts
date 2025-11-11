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
  backend?: string;
  note?: string;
  credentials?: {
    username?: string;
    password?: string;
    message?: string;
    admin?: {
      username: string;
      password: string;
    };
    customer?: {
      username: string;
      password: string;
    };
    employees?: Array<{
      username: string;
      password: string;
      department: string;
    }>;
  };
};

export const projects: Project[] = [
  {
    title: "Grievance Handling System",
    description: "Developed an institutional grievance resolution platform with multi-role access (Admin, Employees, and Customers). The system streamlines ticket submission, tracking, and resolution processes while providing comprehensive dashboard analytics for administrators and department-wise ticket management for employees.",
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
        value: "7+",
        label: "User Roles"
      }
    ],
    tags: ["Django", "SQLite", "HTML/CSS/JS"],
    technologies: ["Django", "SQLite", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Chart.js"],
    features: [
      "Multi-role access control (Admin, 5 Department Employees, Customer)",
      "Department-wise ticket assignment and tracking",
      "Real-time status updates and notifications",
      "Comprehensive admin dashboard with analytics",
      "Ticket prioritization and escalation system",
      "Automated email notifications"
    ],
    link: "https://grievance-handling-system-ashen.vercel.app/",
    credentials: {
      admin: { username: "Admin", password: "admin@1234$" },
      customer: { username: "Customer", password: "cust@1234$" },
      employees: [
        { username: "Employee1", password: "emp1@1234$", department: "Technical Support" },
        { username: "Employee2", password: "emp2@1234$", department: "Product Management" },
        { username: "Employee3", password: "emp3@1234$", department: "Quality Assurance" },
        { username: "Employee4", password: "emp4@1234$", department: "Development" },
        { username: "Employee5", password: "emp5@1234$", department: "Customer Support" }
      ]
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
    backend: "https://project-dream-backend-zfkf.onrender.com/",
    note: "First trigger backend api to experience then app",
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
    link: "https://ecommerce-yaazhi.netlify.app/",
    backend: "https://e-commerce-yaazhi.onrender.com/",
    note: "First trigger backend api to experience then app",
    credentials: {
      message: "You can explore without login, but creating an account provides a better experience"
    }
  }
];