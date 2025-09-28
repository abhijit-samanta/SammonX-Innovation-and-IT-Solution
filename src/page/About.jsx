import React from 'react';
import { Link } from 'react-router';
import abhijit from "../assets/team/abhijit.png"
import sujon from "../assets/team/sujon1.png"
import roni from "../assets/team/roni.jpeg"
import aditi from "../assets/team/aditi.png"

import {
  ArrowRight,
  Users,
  Target,
  Award,
  Globe,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  Building,
  MapPin,
  Linkedin,
  Twitter,
  Mail,
  Star,
  Zap
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Target, label: "Projects Completed", value: "1200+" },
    { icon: Award, label: "Awards Won", value: "25+" },
    { icon: Globe, label: "Countries Served", value: "15+" },
  ];

  const values = [
    {
      icon: TrendingUp,
      title: "Innovation First",
      description: "We embrace the latest technology trends to create advanced solutions that drive business growth, enhance efficiency, and provide our clients with a strong competitive advantage."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: " We implement rigorous testing and quality control processes to ensure every project is reliable, high-performing, and meets the highest standards of excellence."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: " We implement rigorous testing and quality control processes to ensure every project is reliable, high-performing, and meets the highest standards of excellence."
    },
    {
      icon: CheckCircle,
      title: "Client Success",
      description: "We focus on building long-term partnerships, ensuring client satisfaction, and delivering solutions that drive mutual growth and measurable business success."
    }
  ];

  const team = [
    {
      name: "Abhijit Samanta",
      position: "CEO & Founder",
      image: abhijit,
      bio: "5+ years in technology leadership with expertise in scaling tech companies.",
      gradientFrom: "from-blue-400",
      gradientTo: "to-cyan-400",
      specialty: "Strategy & Vision",
      experience: "5+ Years",
      location: "Kolkata",
      social: {
        linkedin: "https://www.linkedin.com/in/abhijit-samanta-b93033217",
        email: "mailto:samantaabhijit134@gmail.com",
        twitter: "https://x.com/Abhijit99649"
      }
    },
    {
      name: "Sujon Mondal",
      position: "CTO & Co-Founder",
      image: sujon,
      bio: "Former software engineer with extensive experience in Full-stack developmen, delivering innovative, scalable, and high-performance solutions.",
      gradientFrom: "from-purple-400",
      gradientTo: "to-pink-400",
      specialty: " Full-Stack Dev",
      experience: "5+ Years",
      location: "Kolkata",
      social: {
        linkedin: "https://www.linkedin.com/in/sujon-mondal-a7947125b/",
        email: "mailto:sujonm7586@gmail.com",
        twitter: null
      }
    },
    {
      name: "Roni Shil",
      position: " UI & UX Design Director",
      image: roni,
      bio: "Full-stack development expert with 4+ years building scalable applications.",
      gradientFrom: "from-emerald-400",
      gradientTo: "to-teal-400",
      specialty: "Full-Stack Dev",
      experience: "4+ Years",
      location: "Kolkata",
      social: {
        linkedin: "https://www.linkedin.com/in/ronishil/",
        email: "mailto:roniyouknow@gmail.com",
        twitter: "https://x.com/ronishi85665650"
      }
    },
    {
      name: "Aditi Roy",
      position: "Digital Marketing Head",
      image: aditi,
      bio: "Digital Marketing Specialist with 5 years' experience in SEO, social media, content strategy, and PPC campaigns.",
      gradientFrom: "from-orange-400",
      gradientTo: "to-red-400",
      specialty: "Digital Marketing",
      experience: "5+ Years",
      location: "Kolkata",
      social: {
        linkedin: "https://www.linkedin.com/in/aditi-dinda-2731b3348/",
        email: null,
        twitter: null
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: 'rgb(244,240,255)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              About SammonX Innovation & IT Solution 
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Building the Future of{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a leading technology company delivering innovative software solutions and advanced digital experiences. 
              Our expertise helps businesses transform, grow, and stay competitive in the digital era.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center space-y-4 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Founded in 2021, we started as a small team of passionate developers dedicated to delivering innovative software solutions.
                 Our goal is to empower businesses of all sizes with cutting-edge technology.
              </p>
              <p>
                From humble beginnings, we have grown into a global IT solutions provider. 
                With expertise in web development, mobile apps, and cloud services, 
                we help clients achieve digital transformation and business growth.
              </p>
              <p>
               Our journey focuses on continuous innovation, strategic partnerships, and client success. Leveraging AI, cloud computing, and modern technologies,
                we deliver scalable solutions that enhance efficiency, performance, and competitive advantage worldwide.
              </p>

              <div>
                <Link to="/">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 px-8 py-4 rounded-xl font-medium flex items-center">
                    See More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              What Drives Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We uphold integrity, innovation, and excellence, guiding every project to deliver reliable, impactful solutions for clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modern Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-pulse delay-3000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-purple-700 font-medium text-sm mb-6">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Meet Our Team
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              The Minds Behind{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders shaping our mission to deliver innovative software solutions and drive digital transformation across industries
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group relative"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Main Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-6 hover:rotate-2 transition-all duration-500 border border-white/50 relative overflow-hidden">
                  
                  {/* Gradient Background Element */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500 -translate-y-12 translate-x-12 group-hover:scale-125`}></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>

                  {/* Profile Image Container */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} rounded-2xl p-0.5 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    
                    {/* Floating Badge */}
                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} rounded-xl flex items-center justify-center group-hover:animate-bounce`}>
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center space-y-3 relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h3>
                    <div className={`text-sm font-semibold bg-gradient-to-r ${member.gradientFrom} ${member.gradientTo} bg-clip-text text-transparent`}>
                      {member.position}
                    </div>
                    
                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-3 text-xs text-gray-600 bg-gray-50/50 rounded-xl p-3">
                      <div>
                        <div className="font-medium text-gray-900">{member.specialty}</div>
                        <div>Specialty</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{member.experience}</div>
                        <div>Experience</div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Location */}
                    <div className="flex items-center justify-center text-xs text-gray-500">
                      <MapPin className="w-3 h-3 mr-1" />
                      {member.location}
                    </div>

                    {/* Social Links - Always show all 3 icons */}
                    <div className="flex justify-center space-x-3 pt-2">
                      {/* LinkedIn - Always visible */}
                      {member.social.linkedin ? (
                        <a 
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-8 h-8 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 opacity-70 hover:opacity-100`}
                        >
                          <Linkedin className="w-4 h-4 text-white" />
                        </a>
                      ) : (
                        <div className={`w-8 h-8 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} rounded-lg flex items-center justify-center opacity-30 cursor-not-allowed`}>
                          <Linkedin className="w-4 h-4 text-white" />
                        </div>
                      )}
                      
                      {/* Twitter - Always visible */}
                      {member.social.twitter ? (
                        <a 
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-8 h-8 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 opacity-70 hover:opacity-100`}
                        >
                          <Twitter className="w-4 h-4 text-white" />
                        </a>
                      ) : (
                        <div className={`w-8 h-8 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} rounded-lg flex items-center justify-center opacity-30 cursor-not-allowed`}>
                          <Twitter className="w-4 h-4 text-white" />
                        </div>
                      )}
                      
                      {/* Email - Always visible */}
                      {member.social.email ? (
                        <a 
                          href={member.social.email}
                          className={`w-8 h-8 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 opacity-70 hover:opacity-100`}
                        >
                          <Mail className="w-4 h-4 text-white" />
                        </a>
                      ) : (
                        <div className={`w-8 h-8 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} rounded-lg flex items-center justify-center opacity-30 cursor-not-allowed`}>
                          <Mail className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Floating Decorative Elements */}
                <div className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} rounded-full opacity-20 group-hover:scale-125 group-hover:opacity-30 transition-all duration-500 pointer-events-none`}></div>
                <div className={`absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} rounded-full opacity-10 group-hover:scale-110 group-hover:opacity-20 transition-all duration-700 pointer-events-none`}></div>
                
                {/* Connecting Lines (for larger screens) */}
                {index < team.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-gray-600 font-medium">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">15+</div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Global Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: 'rgb(244,240,255)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-8">
            <div className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
              Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Empowering Digital Transformation</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
             We help businesses worldwide achieve growth and efficiency through innovative software and technology solutions.
              Our mission is to deliver impactful digital transformation that drives success.
            </p>

            <div>
              <Link to="/career">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 px-8 py-4 rounded-xl font-medium flex items-center mx-auto">
                  View Open Positions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
