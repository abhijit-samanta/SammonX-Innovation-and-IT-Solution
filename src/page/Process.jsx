import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  Users, 
  Code, 
  TestTube, 
  Rocket, 
  Headphones, 
  Settings,
  CheckCircle,
  ArrowRight,
  Clock,
  Target,
  Shield
} from 'lucide-react';
import ContactModal from '../components/ui/ContactModal';


const Process = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const phases = [
    {
      phase: "Phase 1",
      title: "Research & Planning", 
      icon: Search,
      duration: "1-3 Days",
      description: "We begin by analyzing your business goals, audience, and project requirements to develop a detailed, actionable roadmap.",
      activities: [
        "Business Requirements Analysis",
        "Market Research & Competitor Analysis", 
        "Technology Stack Selection",
        "Project Timeline & Milestone Planning",
        "Resource Allocation & Team Formation",
        "Risk Assessment & Mitigation Strategy"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Development",
      icon: Code,
      duration: "3-5 Days",
      description: "Our skilled development team transforms your ideas into reality using agile methods and best practices for scalable, maintainable, high-quality code.",
      activities: [
        "System Architecture Design",
        "Database Design & Optimization",
        "Frontend Development & UI Implementation",
        "Backend Development & API Creation", 
        "Third-party Service Integrations",
        "Regular Code Reviews & Quality Assurance"
      ]
    },
    {
      phase: "Phase 3",
      title: "Support & Maintenance",
      icon: Headphones,
      duration: "5-7 Days",
      description: "We deliver comprehensive post-launch support and maintenance to ensure your solution remains efficient, secure, and adaptable to evolving business needs.",
      activities: [
        "24/7 Technical Support & Monitoring",
        "Regular Security Updates & Patches", 
        "Performance Optimization & Scaling",
        "Feature Enhancements & Improvements",
        "Bug Fixes & Issue Resolution",
        "Training & Documentation Updates"
      ]
    }
  ];

  const methodology = [
    {
      icon: Target,
      title: "Agile Methodology",
      description: "We follow agile practices with regular sprints, daily standups, and continuous feedback loops to ensure timely, efficient project delivery."
    },
    {
      icon: Clock,
      title: "Timely Delivery", 
      description: "Our structured approach and skilled team guarantee projects are completed on time, within budget, and without compromising quality."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing, code reviews, and quality checkpoints at every stage ensure bug-free, high-performance, reliable solutions."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "Transparent communication, progress updates, and client involvement throughout development ensure alignment with your vision and project goals."
    }
  ];

  const tools = [
    { name: "Project Management", tools: ["Jira", "Trello", "Asana", "Monday.com"] },
    { name: "Communication", tools: ["Slack", "Microsoft Teams", "Zoom", "Discord"] },
    { name: "Version Control", tools: ["Git", "GitHub", "GitLab", "Bitbucket"] },
    { name: "CI/CD", tools: ["Jenkins", "GitHub Actions", "CircleCI", "Docker"] },
    { name: "Testing", tools: ["Jest", "Cypress", "Selenium", "Postman"] },
    { name: "Monitoring", tools: ["New Relic", "DataDog", "CloudWatch", "Sentry"] }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: 'rgb(244,240,255)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-32 h-32 sm:w-72 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="inline-block px-3 sm:px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
              Our Process
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 px-2">
              From Concept to{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Deployment
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              Our structured three-phase process guarantees successful project delivery, from initial planning and development to ongoing support and maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Process Phases */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={index} className="relative">
                  {/* Connection Line - Hidden on mobile */}
                  {index < phases.length - 1 && (
                    <div className="hidden md:block absolute left-16 top-32 w-0.5 h-16 bg-gradient-to-b from-blue-600 to-purple-600 opacity-30" />
                  )}
                  
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                    <div className="grid lg:grid-cols-3 gap-0">
                      {/* Phase Header */}
                      <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 sm:p-8 text-white">
                        <div className="space-y-4">
                          <span className="inline-block px-3 py-1 bg-gradient-to-br from-blue-500 to-purple-600  bg-opacity-20 text-white border border-white border-opacity-30 rounded-full text-xs sm:text-sm font-medium">
                            {phase.phase}
                          </span>
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 bg-opacity-20 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{phase.title}</h3>
                            <div className="flex items-center space-x-2 text-white text-opacity-80">
                              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span className="text-xs sm:text-sm">{phase.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Phase Content */}
                      <div className="lg:col-span-2 p-6 sm:p-8">
                        <div className="space-y-4 sm:space-y-6">
                          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{phase.description}</p>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Key Activities:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                              {phase.activities.map((activity, actIndex) => (
                                <div key={actIndex} className="flex items-start space-x-2 sm:space-x-3">
                                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">{activity}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Proven Methodology</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              We adhere to industry best practices and structured methodologies, delivering consistent, high-quality,
               and reliable results for every project we undertake.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {methodology.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center p-4 sm:p-6 border border-gray-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Advanced Tools & Technologies</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              We leverage industry-leading tools and technologies to optimize development, streamline workflows, and ensure efficient, 
              high-quality project delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {tools.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Typical Project Timeline</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Project timelines vary based on complexity, but here’s an overview of what to expect for a standard development lifecycle.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              {phases.map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 relative z-10 hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm sm:text-base">{index + 1}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-blue-600 font-medium mb-2 text-sm sm:text-base">{phase.duration}</p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed px-2">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: 'rgb(244,240,255)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-20 h-20 sm:w-40 sm:h-40 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-30 h-30 sm:w-60 sm:h-60 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
            Ready to Start Your Project?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
           Share your project requirements, and we’ll demonstrate how our proven process efficiently transforms your vision into reality.
          </p>
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium flex items-center mx-auto text-sm sm:text-base"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default Process;
