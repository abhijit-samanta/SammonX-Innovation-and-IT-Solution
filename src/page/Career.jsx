import React from 'react';
import { 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp, 
  ArrowRight,
  Building,
  Heart,
  Coffee,
  GraduationCap
} from 'lucide-react';

const Career = () => {
  // Google Form link
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScNWPkEZm9lhMcfnUNAVE9VLuE_H88tX-HgKKvnsrtNIlvEgQ/viewform?usp=header";

  const handleApplyClick = () => {
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  const jobOpenings = [
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Kolkata, WB",
      type: "Full-time",
      experience: "0-1 years",
      description: "Seeking a passionate full stack developer to build scalable, high-performance web applications with our engineering team."
    },
    {
      title: "Frontend Developer",
      department: "Engineering", 
      location: "Kolkata, WB",
      type: "Full-time",
      experience: "0-1 years",
      description: "Join our frontend team to design responsive, user-friendly interfaces using React and modern web technologies."
    },
    {
      title: "Web Developer Intern",
      department: "Engineering",
      location: "Remote",
      type: "Internship",
      experience: "0-1 years",
      description: "  Gain hands-on web development experience with mentorship from senior developers, ideal for students or graduates."
    },
    {
      title: "App Developer Intern",
      department: "Mobile",
      location: "Kolkata, WB",
      type: "Internship", 
      experience: "0-1 years",
      description: "Learn iOS and Android app development by working on real projects with our experienced mobile team."
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Kolkata, WB",
      type: "Full-time",
      experience: "0-1 years",
      description: "Design and maintain scalable cloud infrastructure while implementing CI/CD pipelines and automation tools efficiently."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Kolkata, WB",
      type: "Full-time",
      experience: "0-2 years",
      description: "Design intuitive, engaging web and mobile user experiences focused on user-centered design principles."
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Wellness & Benefits",
      description: "Comprehensive health, dental, vision, and mental wellness support to ensure employees’ well-being and productivity."
    },
    {
      icon: TrendingUp,
      title: "Professional Growth",
      description: "Structured training programs, development opportunities, and clear career paths empower employees to grow professionally and succeed."
    },
    {
      icon: Coffee,
      title: "Flexible Work-Life",
      description: "Flexible schedules, remote work options, and generous leave policies help maintain work-life balance effectively."
    },
    {
      icon: GraduationCap,
      title: "Learning Opportunities",
      description: "Access learning budgets, conferences, and online platforms to continuously enhance skills and professional expertise."
    }
  ];

  const culture = [
    {
      title: "Driving Innovation Forward",
      description: "We foster creative thinking and provide resources to transform innovative ideas into practical, impactful technology solutions."
    },
    {
      title: "Team Collaboration",
      description: "Join talented professionals in a supportive, collaborative environment that fosters creativity, learning, and shared success."
    },
    {
      title: "Diversity & Belonging",
      description: "We embrace diversity, promoting an inclusive workplace where every individual can contribute, grow, and thrive."
    },
    {
      title: "Worldwide Impact",
      description: "Work on innovative projects that reach millions globally, delivering meaningful technology solutions and real-world impact."
    }
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
              Join Our Team
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 px-2">
            Shape Your Future with{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              Join a talented, passionate team creating innovative digital solutions that drive impact and business growth.
            </p>
            <div className="pt-2">
              <button 
                onClick={handleApplyClick}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium flex items-center mx-auto text-sm sm:text-base"
              >
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Our Culture</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
             Innovative, collaborative workplace fostering professional growth and impactful technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {culture.map((item, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center p-4 sm:p-6 border border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Join Our Innovative Team</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Skilled, motivated employees drive innovation, creating exceptional products and solutions.
            </p>
          </div>
          
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

      {/* Current Openings */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Current Openings</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Explore exciting career opportunities that match your skills and interests perfectly..
            </p>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                        {job.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium flex-shrink-0">
                      {job.department}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 flex-shrink-0" />
                        <span className="text-gray-600 truncate">{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 flex-shrink-0" />
                        <span className="text-gray-600">{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 flex-shrink-0" />
                        <span className="text-gray-600">{job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Building className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 flex-shrink-0" />
                        <span className="text-gray-600">{job.department}</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={handleApplyClick}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center text-sm sm:text-base"
                    >
                      View Details & Apply
                      <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
           Explore Opportunities with Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
           We welcome talented individuals passionate about innovation. Share your resume, and let’s discover potential roles together.
          </p>
          <button 
            onClick={handleApplyClick}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium flex items-center mx-auto text-sm sm:text-base"
          >
            Submit Your Application
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Career;
