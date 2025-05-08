import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Layers, 
  Smartphone, 
  Zap, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  ArrowDown,
  ExternalLink,
  Palette,
  LineChart,
  Coffee,
  Sprout
} from 'lucide-react';
import profilePhoto from './assets/images/foto.png';

import Header from './components/Header';
import MouseParallax from './components/MouseParallax';
import TiltCard from './components/TiltCard';
import FadeInSection from './components/FadeInSection';
import { useLanguage } from './hooks/useLanguage';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  
  // Parallax effect values
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const accessKey = import.meta.env.VITE_WEB3FORMS_API_KEY;
  
  useEffect(() => {
    // Initialize GSAP animations
    if (heroRef.current) {
      gsap.fromTo(
        '.hero-text',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2 }
      );
      
      gsap.fromTo(
        '.hero-cta',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.8 }
      );
    }
    
    // Set up scroll animations
    gsap.utils.toArray('.animate-on-scroll').forEach((element: any) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const techStack = [
    { name: 'HTML/CSS', icon: <Code size={24} />, color: 'bg-blue-500' },
    { name: 'JavaScript', icon: <Zap size={24} />, color: 'bg-yellow-500' },
    { name: 'React', icon: <Layers size={24} />, color: 'bg-cyan-500' },
    { name: 'Responsive Design', icon: <Smartphone size={24} />, color: 'bg-green-500' },
    { name: 'Java', icon: <Coffee size={24} />, color: 'bg-orange-500' },
    { name: 'Spring', icon: <Sprout size={24} />, color: 'bg-emerald-500' },
  ];

  const projects = [
    {   
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with animations and smooth transitions.',
      image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'GSAP', 'Tailwind CSS'],
    },
    {
      title: 'Jira',
      description: 'Flexible project management system with tasks, statuses and team analytics.',
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
      tags: ['Framer Motion', 'Three.js', 'Next.js'],
    },
    {
      title: 'SaaS Dashboard',
      description: 'An animated dashboard with data visualization and user interactions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'D3.js', 'Styled Components'],
    },
  ];

  const services = [
    {
      title: t('services.webDev.title'),
      description: t('services.webDev.description'),
      icon: <Code size={32} />,
    },
    {
      title: t('services.animations.title'),
      description: t('services.animations.description'),
      icon: <Zap size={32} />,
    },
    {
      title: t('services.responsive.title'),
      description: t('services.responsive.description'),
      icon: <Smartphone size={32} />,
    },
    {
      title: t('services.uiux.title'),
      description: t('services.uiux.description'),
      icon: <Palette size={32} />,
    },
    {
      title: t('services.performance.title'),
      description: t('services.performance.description'),
      icon: <LineChart size={32} />,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        id="hero" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <MouseParallax>
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
          </div>
        </MouseParallax>
        
        <motion.div 
          className="container mx-auto px-4 z-10 text-center"
          style={{ y, opacity }}
        >
          <motion.h1 
            className="hero-text text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p 
            className="hero-text text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div 
            className="hero-cta flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#contact" className="btn-primary">{t('nav.contact')}</a>
            <a href="#portfolio" className="btn-outline">{t('nav.portfolio')}</a>
          </motion.div>
        </motion.div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator">
          <ArrowDown size={32} className="text-gray-600" />
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="section-title text-center mb-16">{t('about.title')}</h2>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="flex justify-center">
                <img 
                  src={profilePhoto} 
                  alt="Profile Photo" 
                  className="rounded-full w-[144px] h-[139px] object-cover shadow-lg"
                />
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <div className="animate-on-scroll text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">{t('about.greeting')}</h3>
                <p className="text-gray-700 mb-6">{t('about.description1')}</p>
                <p className="text-gray-700 mb-6">{t('about.description2')}</p>
                <p className="text-gray-700 mb-6">{t('about.description3')}</p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <TiltCard key={index}>
                    <div className={`card h-full flex flex-col items-center justify-center p-6 border border-gray-100 hover:shadow-xl`}>
                      <div className={`${tech.color} p-3 rounded-full text-white mb-4`}>
                        {tech.icon}
                      </div>
                      <h4 className="font-bold" translate="no">{tech.name}</h4>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="section-title text-center mb-16">{t('portfolio.title')}</h2>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <TiltCard>
                  <div className="card group overflow-hidden h-full flex flex-col">
                    <div className="relative overflow-hidden h-48">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <a href="#" className="text-white flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            {t('portfolio.viewProject')} <ExternalLink size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded" translate="no">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="section-title text-center mb-16">{t('services.title')}</h2>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="card hover:shadow-xl border border-gray-100 h-full group">
                  <div className="mb-4 text-primary-500 group-hover:text-primary-600 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="section-title text-center mb-16">{t('contact.title')}</h2>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <FadeInSection>
              <div>
                <h3 className="text-2xl font-bold mb-4">{t('contact.subtitle')}</h3>
                <p className="text-gray-700 mb-6">
                  {t('contact.description')}
                </p>
                
                <div className="flex gap-4 mb-8">
                  <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">
                    <Github size={24} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">
                    <Twitter size={24} />
                  </a>
                  <a href="mailto:example@example.com" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <form className="card" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value={accessKey}/>
                <input type="hidden" name="email" value="mihailnadia27@gmail.com" />
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.name')}
                  </label>
                  <input 
                    name="name"
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.email')}
                  </label>
                  <input 
                    name="email"
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.message')}
                  </label>
                  <textarea 
                    name="message"
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder={t('contact.form.messagePlaceholder')}
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  {t('contact.form.submit')}
                </button>
              </form>
            </FadeInSection>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Yatskevich Mikhail. {t('footer.rights')}</p>
          <p className="text-gray-400 mt-2">{t('footer.madeWith')}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;