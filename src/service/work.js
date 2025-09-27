import Event from "../assets/work/Events.png"
import GroceryStore from "../assets/work/Grocery_Store.png"
import HealthCare from "../assets/work/Health_Care.png"
import Landingpage1 from "../assets/work/landingpage_for_portfolio.png"
import Landingpage2 from "../assets/work/landingpage_for_portfolio1.png"
import Chatapp from "../assets/work/Personal_Chat_Application.png"
import TravelAndTour from "../assets/work/Travel_Destination.png"
import UniversityManagmentSystem from "../assets/work/Universitry_Managment_System.png"

const projects = [
  {
    title: "Greenistry - Full-Stack Grocery Delivery Platform",
    category: "Web Development",
    image: GroceryStore,
    description: "A complete grocery delivery website offering seamless user shopping experience and powerful seller/admin product management with secure payment integration.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe", "Tailwind CSS", "JWT", "Multer"],
    results: "Role-based access control, secure Stripe payments, real-time order management dashboard",
    link: "https://greenistry.netlify.app/"
  },
  {
    title: "MediNest - Healthcare Management System",
    category: "Web Development", 
    image: HealthCare,
    description: "Modern full-stack healthcare web application bridging the gap between patients and doctors through intuitive appointment management and health monitoring tools.",
    technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Tailwind CSS", "JWT"],
    results: "Secure authentication, appointment booking system, BMI & health calculators, role-based dashboards",
    link: "https://medinest-1.onrender.com/"
  },
  {
    title: "University Management System",
    category: "Educational Technology",
    image: UniversityManagmentSystem,
    description: "Comprehensive university management platform automating academic & administrative operations with real-time communication and payment integration.",
    technologies: ["TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Socket.IO", "Razorpay", "Multer"],
    results: "Complete institution management, real-time chat, online fee payments, role-based access control",
    link: "https://university-management-project-clien.vercel.app/"
  },
  {
    title: "Dynamic Event Management Website",
    category: "Web Development",
    image: Event,
    description: "Fully dynamic event management website with stylish design, enabling seamless event planning, booking, and management capabilities.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    results: "Dynamic content management, responsive design, event booking system, admin dashboard",
    link: "https://tayatevents.in/"
  },
  {
    title: "AnnoTalk - Real-time Anonymous Chat Application",
    category: "Real-time Communication",
    image: Chatapp,
    description: "Real-time one-to-one anonymous chat application with intelligent pairing system and seamless WebSocket communication for instant messaging.",
    technologies: ["Node.js", "Express.js", "Socket.IO", "WebSocket"],
    results: "Real-time messaging, anonymous pairing system, scalable architecture, instant communication",
    link: "https://annotalk.onrender.com/"
  },
  {
    title: "College Information Portal",
    category: "Educational Website",
    image: Landingpage1,
    description: "Comprehensive college information portal showcasing courses, fees, admission procedures, and campus facilities with modern responsive design.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    results: "Student-friendly interface, course catalog, fee structure display, mobile optimization",
    link: "https://smfmiem.in/"
  },
  {
    title: "Professional Portfolio Landing Page",
    category: "Portfolio Website",
    image: Landingpage2,
    description: "Modern and professional portfolio landing page with clean design, showcasing skills, projects, and professional achievements effectively.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    results: "Professional presentation, mobile-friendly design, optimized performance, clean UI/UX",
    link: "https://ziontechindia.in/"
  },
  {
    title: "Safar - Travel & Tour Guide Platform",
    category: "Travel & Tourism",
    image: TravelAndTour,
    description: "Comprehensive travel and tour guide website showcasing tour packages, destination details, pricing, and itinerary planning for travelers.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    results: "Tour package showcase, pricing transparency, destination guides, responsive booking interface",
    link: "https://musafirssafar.in/"
  },
];

export default projects;
