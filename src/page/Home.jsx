import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Cloud, 
  Smartphone, 
  Globe, 
  Search, 
  Brain, 
  Settings, 
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Palette,
  Blocks
} from 'lucide-react';
import heroImage from '../assets/hero-image.jpg';
import ContactModal from '../components/ui/ContactModal';
import sangita from "../assets/testonomial/Sangita_mondal.jpg"
import Amit from "../assets/testonomial/Amit_mahapatra.jpg"
import Apurba from "../assets/testonomial/Apurba_samanta.jpg"
import Sathi from "../assets/testonomial/Sathi_parai.jpg"
import Sujit from "../assets/testonomial/Sujit_bera.jpg"
import Subhajit from "../assets/testonomial/subhajit.jpg"

const Home = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0);
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const services = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Secure cloud services for migration, management, and optimization that reduce costs, increase flexibility, and keep your data safe, accessible, and scalable."
    },
    {
      icon: Search,
      title: "Digital Marketing",
      description: "Improve your online visibility with expert digital marketing strategies. We provide SEO, social media, content marketing, and PPC campaigns to reach your target audience and drive measurable results."
    },
    {
      icon: Brain,
      title: "AI and ML Service",
      description: "Transform your operations with custom artificial intelligence and machine learning solutions. Automate workflows, predict trends, and gain valuable insights to make smarter business decisions."
    },
    {
      icon: Settings,
      title: "SAAS Application Service",
      description: " Develop secure and scalable Software-as-a-Service applications tailored to your industry. Our solutions grow with your business, offering reliability, usability, and long-term performance."
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Design responsive, fast, and SEO-optimized websites that attract users and increase conversions. We combine modern technology and best practices for secure, visually appealing websites."
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Create innovative mobile apps for iOS and Android. We focus on user-friendly designs and seamless functionality to enhance engagement and provide real business value."
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "Ensure your software performs flawlessly with our comprehensive QA services. We use automated and manual testing to deliver reliable, bug-free applications that meet the highest quality standards."
    },
    {
      icon: Palette,
      title: "UI/UX Design Service",
      description: "Design engaging, user-friendly experiences with our UI/UX services. Our team creates intuitive interfaces that boost user satisfaction, drive engagement, and support business growth through smart design."
    },
    {
      icon: Blocks,
      title: "Blockchain Development",
      description: "Develop secure, decentralized applications with our blockchain expertise. We provide innovative blockchain solutions that enhance transparency, security, and efficiency for your digital transactions and business processes."
    }
  ];

  const testimonials = [
    {
      name: "Amit Mahaparta",
      // position: "CEO, InnovateTech",
      image: Amit,
      content: "With their innovative cloud services, our business saw a 40% efficiency improvement within the first quarter. The team delivered exceptional expertise and support.",
      rating: 5,
      // company: "InnovateTech",
      gradientFrom: "from-blue-400",
      gradientTo: "to-cyan-400"
    },
    {
      name: "Sujit Bera",
      // position: "CTO, StartupFlow",
      image: Sujit, 
      content:  "With their innovative mobile app, we improved user experience and saw customer engagement grow by 250%, delivering remarkable business results after launch.",
      rating: 5,
      // company: "StartupFlow",
      gradientFrom: "from-purple-400",
      gradientTo: "to-pink-400"
    },
    {
      name: "Sangita Mondal",
      // position: "Marketing Director, GrowthCo",
      image: sangita,
      content: " With their expert digital marketing, we reached new markets and tripled online sales. The team consistently provides innovative, results-driven solutions.",
      rating: 5,
      // company: "GrowthCo",
      gradientFrom: "from-emerald-400",
      gradientTo: "to-teal-400"
    },
    {
      name: "Apurba Samanta",
      // position: "Founder, TechStart",
      image: Apurba,
      content: "Their blockchain development services are exceptional. They built a secure, decentralized platform with flawless smart contracts, giving us a strong competitive advantage.",
      rating: 5,
      // company: "TechStart",
      gradientFrom: "from-amber-400",
      gradientTo: "to-orange-400"
    },
    {
      name: "Sathi Parai",
      // position: "VP Operations, DataFlow",
      image: Sathi,
      content: "Their AI and machine learning solutions transformed our data processing. We now predict market trends with 95% accuracy, improving decisions and boosting profitability.",
      rating: 5,
      // company: "DataFlow",
      gradientFrom: "from-rose-400",
      gradientTo: "to-pink-400"
    },
    {
      name: "Subhajit Maity",
      // position: "COO, CloudTech",
      image: Subhajit,
      content: "Their UI/UX team designed a stunning SaaS interface. User retention rose 180%, and the intuitive design earned widespread praise for seamless usability.",
      rating: 5,
      // company: "CloudTech",
      gradientFrom: "from-indigo-400",
      gradientTo: "to-purple-400"
    }
  ];

  // Get cards per slide for testimonials based on screen size
  const getTestimonialCardsPerSlide = () => {
    if (window.innerWidth >= 1024) return 3; // lg screens
    if (window.innerWidth >= 768) return 2;  // md screens
    return 1; // mobile
  };

  // Get total testimonial slides
  const getTotalTestimonialSlides = () => {
    return Math.ceil(testimonials.length / getTestimonialCardsPerSlide());
  };

  // Get cards per slide based on screen size
  const getCardsPerSlide = () => {
    return window.innerWidth >= 768 ? 3 : 1;
  };

  // Get total slides based on screen size
  const getTotalSlides = () => {
    return Math.ceil(services.length / getCardsPerSlide());
  };

  const nextServiceSlide = () => {
    const totalSlides = getTotalSlides();
    setCurrentServiceSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevServiceSlide = () => {
    const totalSlides = getTotalSlides();
    setCurrentServiceSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextTestimonial = () => {
    const totalSlides = getTotalTestimonialSlides();
    setCurrentTestimonialSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevTestimonial = () => {
    const totalSlides = getTotalTestimonialSlides();
    setCurrentTestimonialSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    // Check screen size on mount and resize
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      // Reset slide when screen size changes
      setCurrentServiceSlide(0);
      setCurrentTestimonialSlide(0);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    const serviceInterval = setInterval(nextServiceSlide, 5000);
    const testimonialInterval = setInterval(nextTestimonial, 6000);
    
    return () => {
      clearInterval(serviceInterval);
      clearInterval(testimonialInterval);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ backgroundColor: 'rgb(244,240,255)' }}>
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 transform transition-all duration-1000 ease-out">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Leading Software Development Company
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
                  Innovation
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-600 max-w-lg leading-relaxed">
                 we specialize in custom software development, web design, and digital transformation services.
                 Our expert team helps businesses enhance efficiency, scale faster, and achieve sustainable growth in today’s competitive digital world. 
                 </p>

              <div>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 px-6 py-3 rounded-xl flex items-center font-medium"
                >
                  Book a Call
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative transform transition-all duration-1000 ease-out delay-300">
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Professional software development team"
                  className="rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl"></div>
                
                {/* Floating cards */}
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-3 animate-bounce delay-1000">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs font-semibold">24/7 Support</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-3 animate-bounce delay-2000">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-xs font-semibold">5.0 Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver software development, web design, mobile apps, digital marketing, 
            and IT consulting to drive business growth and digital success.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentServiceSlide * 100}%)` }}
              >
                {Array.from({ length: getTotalSlides() }, (_, slideIndex) => {
                  const cardsPerSlide = getCardsPerSlide();
                  const startIndex = slideIndex * cardsPerSlide;
                  const endIndex = Math.min(startIndex + cardsPerSlide, services.length);
                  
                  return (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8 px-4`}>
                        {services.slice(startIndex, endIndex).map((service, index) => {
                          const Icon = service.icon;
                          return (
                            <div key={startIndex + index} className="group hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl bg-white rounded-2xl overflow-hidden">
                              <div className="p-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                  <Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                                  {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevServiceSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white shadow-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextServiceSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white shadow-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-12 space-x-3">
              {Array.from({ length: getTotalSlides() }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentServiceSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentServiceSlide 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Testimonials Section with Smooth Scrolling */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-purple-700 font-medium text-sm mb-6">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Client Success Stories
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Trusted by{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Innovators
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our solutions empower businesses to transform digitally, enhance performance, and achieve sustainable growth in today’s competitive market.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative mb-12">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonialSlide * 100}%)` }}
              >
                {Array.from({ length: getTotalTestimonialSlides() }, (_, slideIndex) => {
                  const cardsPerSlide = getTestimonialCardsPerSlide();
                  const startIndex = slideIndex * cardsPerSlide;
                  const endIndex = Math.min(startIndex + cardsPerSlide, testimonials.length);
                  
                  return (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className={`grid gap-8 px-4 ${
                        cardsPerSlide === 3 ? 'lg:grid-cols-3' : 
                        cardsPerSlide === 2 ? 'md:grid-cols-2' : 
                        'grid-cols-1'
                      }`}>
                        {testimonials.slice(startIndex, endIndex).map((testimonial, index) => (
                          <div key={startIndex + index} className="group relative">
                            {/* Main Card */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-white/50 relative overflow-hidden h-full">
                              
                              {/* Gradient Background */}
                              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${testimonial.gradientFrom} ${testimonial.gradientTo} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 -translate-y-16 translate-x-16`}></div>
                              
                              {/* Quote Icon */}
                              <div className="relative z-10">
                                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradientFrom} ${testimonial.gradientTo} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                  <Quote className="w-6 h-6 text-white" />
                                </div>

                                {/* Rating */}
                                <div className="flex items-center mb-6">
                                  {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                                  ))}
                                  <span className="ml-2 text-gray-600 font-medium">5.0</span>
                                </div>

                                {/* Content */}
                                <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
                                  "{testimonial.content}"
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center">
                                  <div className="relative">
                                    <img
                                      src={testimonial.image}
                                      alt={testimonial.name}
                                      className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-lg"
                                    />
                                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br ${testimonial.gradientFrom} ${testimonial.gradientTo} rounded-full flex items-center justify-center`}>
                                      <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                  </div>
                                  <div className="ml-4">
                                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                                    <div className="text-gray-600">{testimonial.position}</div>
                                    <div className="text-sm font-medium text-gray-500">{testimonial.company}</div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Floating Elements */}
                            <div className={`absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-br ${testimonial.gradientFrom} ${testimonial.gradientTo} rounded-full opacity-20 group-hover:scale-125 transition-transform duration-500`}></div>
                            <div className={`absolute -bottom-3 -left-3 w-16 h-16 bg-gradient-to-br ${testimonial.gradientFrom} ${testimonial.gradientTo} rounded-full opacity-10 group-hover:scale-110 transition-transform duration-700`}></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white shadow-lg border border-gray-200 hover:border-purple-500 hover:bg-purple-50 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white shadow-lg border border-gray-200 hover:border-purple-500 hover:bg-purple-50 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 z-10"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {Array.from({ length: getTotalTestimonialSlides() }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonialSlide 
                      ? 'bg-purple-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">1200+</div>
              <div className="text-gray-600 font-medium">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">4.9★</div>
              <div className="text-gray-600 font-medium">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: 'rgb(244,240,255)' }}>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 opacity-10 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Partner with our experts to achieve digital transformation, boost efficiency, and drive business growth.
          </p>
          
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 px-6 py-3 rounded-xl font-medium flex items-center mx-auto"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default Home;
