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
  status?: string;
};

export const projects: Project[] = [
  {
    title: "Farmer2Retailer – B2B Agri Trade Platform",
    status: "Ongoing",
    description: "A B2B platform connecting farmers and retailers to streamline the agricultural supply chain. Features direct produce listing, secure bulk ordering, and real-time transaction tracking to maximize efficiency.",
    image: "/Projects/Farmer2Retailer.png",
    images: [
      "/Projects/Farmer2Retailer.png",
      "/Projects/Farmer2Retailer.png",
      "/Projects/Farmer2Retailer.png"
    ],
    metrics: [
      {
        value: "B2B",
        label: "Direct Trade"
      },
      {
        value: "Real-time",
        label: "Tracking"
      }
    ],
    tags: ["Spring Boot", "React", "MySQL", "Java"],
    technologies: ["Java 17", "Spring Boot", "Spring Security", "MySQL", "Razorpay", "React 19", "Vite", "Chart.js", "iText PDF", "Cloudinary"],
    features: [
      "Role-Based Access Control (RBAC) for Farmers, Retailers, and Admin",
      "Direct inventory management & secure bulk ordering",
      "Real-time transaction tracking & automated PDF invoicing",
      "Secure JWT Authentication & Razorpay integration",
      "Comprehensive sales analytics & cloud-optimized media"
    ]
  },
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
    description: "A comprehensive real-time disaster monitoring and response platform leveraging geolocation-tagged crowdsourced reporting. The system facilitates incident submission, AI-powered validation, automated classification, and coordinated response efforts.",
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
    tags: ["MongoDB", "Express", "React", "Node.js", "Python"],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Leaflet.js", "Gemini API", "Machine Learning", "Python (NLTK, scikit-learn)"],
    features: [
      "Real-time disaster reporting with geolocation tagging",
      "Interactive map visualization for disaster zones and incident tracking",
      "Resource allocation and management dashboards",
      "Volunteer coordination and urgent-complaint handling",
      "Crowdsourced incident reporting with verification workflows",
      "AI/ML-powered spam filtering and disaster classification",
      "Secure OTP-based user verification and notification delivery"
    ],
    link: "https://project-dream.netlify.app/",
    backend: "https://project-dream-backend-zfkf.onrender.com/",
    note: "First trigger backend api to experience then app",
    credentials: {
      message: "Use any number for login"
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
    tags: ["React", "Node.js", "Express", "MongoDB"],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "Product catalog with filtering and search",
      "User authentication and profiles",
      "Shopping cart and wishlist",
      "Secure payment processing with Stripe"
    ],
    link: "https://ecommerce-vandire.netlify.app/",
    backend: "https://e-commerce-yaazhi.onrender.com/",
    note: "First trigger backend api to experience then app",
    credentials: {
      message: "You can explore without login, but creating an account provides a better experience"
    }
  }
];