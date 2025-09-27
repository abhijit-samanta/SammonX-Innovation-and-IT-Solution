import React, { useState } from 'react';
import { 
  Cloud, 
  Smartphone, 
  Globe, 
  Search, 
  Brain, 
  Settings, 
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Award,
  Palette,
  Blocks
} from 'lucide-react';
import ContactModal from '../components/ui/ContactModal';

const Services = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const services = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Leverage our robust cloud solutions to scale, secure, and optimize your business operations. We provide cloud migration, infrastructure management, and optimization services that reduce costs, enhance flexibility, and ensure your data is always safe and accessible.",
      features: ["Cloud Migration", "Infrastructure Management", "Data Security", "24/7 Monitoring", "Cost Optimization"],
      technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker"]
    },
    {
      icon: Search,
      title: "Digital Marketing",
      description: "Enhance your online presence with our complete digital marketing solutions. From SEO and social media management to content marketing and PPC campaigns, we help businesses reach their target audience and achieve measurable growth.",
      features: ["SEO Optimization", "Social Media Marketing", "PPC Campaigns", "Content Strategy", "Analytics & Reporting"],
      technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEMrush", "HubSpot"]
    },
    {
      icon: Brain,
      title: "AI and ML Service",
      description: " Leverage artificial intelligence and machine learning to optimize your business operations. Our expert team develops custom AI solutions that automate workflows, predict trends, and deliver actionable insights for smarter decisions.",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "Automation Solutions"],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn", "Python"]
    },
    {
      icon: Settings,
      title: "SAAS Application Service",
      description: "Build scalable, secure, and user-friendly Software-as-a-Service applications tailored to your industry. Our experienced developers deliver robust SaaS platforms that grow with your business and enhance operational efficiency.",
      features: ["Multi-tenant Architecture", "Subscription Management", "API Development", "Third-party Integrations", "Scalable Infrastructure"],
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: " Design and develop responsive, high-performing websites that attract users and drive conversions. Our team uses modern technologies and best practices to deliver fast, secure, and SEO-optimized web solutions.",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "Performance Optimization", "SEO Integration"],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "WordPress"]
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Develop innovative mobile applications for iOS and Android that deliver exceptional user experiences. From concept to deployment, we create user-centric apps that drive engagement and business value.",
      features: ["Cross-platform Development", "Native Performance", "Push Notifications", "Offline Functionality", "App Store Optimization"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "Ensure your software meets the highest quality standards with our QA services. Our experts use automated and manual testing to deliver reliable, bug-free, and high-performance applications.",
      features: ["Automated Testing", "Manual Testing", "Performance Testing", "Security Testing", "Mobile Testing"],
      technologies: ["Selenium", "Jest", "Cypress", "JMeter", "Postman"]
    },
    {
      icon: Palette,
      title: "UI/UX Design Service",
      description: "Design intuitive, engaging, and user-friendly experiences. Our team crafts visually appealing interfaces that enhance user satisfaction, improve usability, and drive measurable business growth.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"]
    },
    // {
    //   icon: Blocks,
    //   title: "Blockchain Development",
    //   description: "Build secure and decentralized applications with our blockchain development expertise. We provide innovative blockchain solutions that ensure transparency, security, and efficiency for your business operations and digital transactions.",
    //   features: ["Smart Contracts", "DApp Development", "Token Creation", "Blockchain Integration", "Security Audits"],
    //   technologies: ["Ethereum", "Solidity", "Web3.js", "Truffle", "Hardhat"]
    // }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals delivering innovative solutions with proven industry expertise."
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Agile development ensures on-time project delivery with efficiency."
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "Rigorous testing and code reviews ensure top-quality, reliable solutions."
    },
    {
      icon: ShieldCheck,
      title: "24/7 Support",
      description: "Round-the-clock assistance and maintenance ensure seamless, uninterrupted business operations."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Fully Responsive */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: 'rgb(244,240,255)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-32 h-32 sm:w-72 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="inline-block px-3 sm:px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
              Professional Services
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 px-2">
              End-to-End  {' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                 IT Solutions
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
             From concept to deployment, we deliver complete technology services that transform your business ideas into innovative, 
             high-performance digital solutions driving growth and efficiency..
            </p>
            <div className="pt-2">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium flex items-center mx-auto text-sm sm:text-base"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Fully Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Innovative technology solutions accelerating business growth and digital transformation worldwide.
            </p>
          </div>
          
          {/* Responsive Grid: 1 col mobile, 1 col tablet, 2 cols desktop */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="space-y-4 sm:space-y-6">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Key Features:</h4>
                        <ul className="space-y-1 sm:space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-600">
                              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Technologies:</h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {service.technologies.map((tech, idx) => (
                            <span key={idx} className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => setIsContactModalOpen(true)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center text-sm sm:text-base"
                      >
                        Learn More Details
                        <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section - Fully Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Why Choose Our Services</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Trusted technology partner delivering innovative, reliable, scalable digital solutions..
            </p>
          </div>
          
          {/* Responsive Grid: 1 col mobile, 2 cols tablet, 4 cols desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center space-y-3 sm:space-y-4 group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Fully Responsive */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: 'rgb(244,240,255)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-20 h-20 sm:w-40 sm:h-40 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-30 h-30 sm:w-60 sm:h-60 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
           Start Your Digital Journey Today
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Share your requirements with us, and we’ll build a tailored solution that drives growth and meets your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium flex items-center justify-center text-sm sm:text-base w-full sm:w-auto"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-sm sm:text-base w-full sm:w-auto"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default Services;
