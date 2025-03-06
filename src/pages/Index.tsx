
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Section from '@/components/Section';
import Timeline from '@/components/Timeline';
import SkillBar from '@/components/SkillBar';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Download, Briefcase, GraduationCap, Award, Code, Languages, Heart } from 'lucide-react';

const Index = () => {
  // Activate reveal animations on scroll
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((reveal, index) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full mb-6 animate-fade-in">
              <span className="font-medium">Senior Software Programmer</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Hi, I'm <span className="text-primary">John Doe</span> 
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8 animate-fade-in delay-100">
              Creating elegant solutions for complex problems with clean, efficient code.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in delay-200">
              <a href="#contact" className="btn-primary">
                Let's Talk
              </a>
              <a href="/resume.pdf" className="btn-outline" download>
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-pulse-slow">
          <a href="#about" className="flex flex-col items-center text-secondary hover:text-primary transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <Section
        id="about"
        title="About Me"
        subtitle="I'm a passionate software developer with 2 years of experience at a Japan-based company, focused on building high-quality web applications."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="reveal">
            <h3 className="text-xl font-semibold mb-4">Who I am</h3>
            <p className="text-muted-foreground mb-4">
              I'm a senior software programmer with a passion for developing innovative solutions that deliver exceptional user experiences. Currently based in Tokyo, Japan, I specialize in full-stack development with a focus on performance and scalability.
            </p>
            <p className="text-muted-foreground mb-4">
              My journey in software development started during my university years, and I've since grown to become a versatile developer comfortable with multiple technologies and frameworks.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or enjoying the unique blend of traditional and modern culture that Japan offers.
            </p>
          </div>
          <div className="reveal delay-200">
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="font-semibold w-28">Name:</span>
                <span className="text-muted-foreground">John Doe</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-28">Email:</span>
                <span className="text-muted-foreground">hello@johndoe.com</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-28">Location:</span>
                <span className="text-muted-foreground">Tokyo, Japan</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-28">Experience:</span>
                <span className="text-muted-foreground">2+ Years</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-28">Languages:</span>
                <span className="text-muted-foreground">English (Fluent), Japanese (Business Level)</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-28">Availability:</span>
                <span className="text-primary font-medium">Available for new projects</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section
        id="experience"
        title="Work Experience"
        subtitle="My professional journey in the software development industry."
        className="bg-muted/50"
      >
        <div className="flex items-center mb-6 reveal">
          <Briefcase size={20} className="text-primary mr-2" />
          <h3 className="text-xl font-semibold">Professional Experience</h3>
        </div>
        <Timeline
          items={[
            {
              title: "Senior Software Programmer",
              organization: "Tech Innovate Japan",
              location: "Tokyo, Japan",
              date: "Jan 2022 - Present",
              description: "Lead developer for enterprise-level applications, managing a team of 5 developers. Implemented microservices architecture that improved system performance by 40%. Collaborated with cross-functional teams to deliver projects on schedule.",
              tags: ["React", "Node.js", "AWS", "Docker", "Kubernetes"]
            },
            {
              title: "Software Developer",
              organization: "Global Solutions Inc.",
              location: "Osaka, Japan",
              date: "Jun 2021 - Dec 2021",
              description: "Developed and maintained web applications for international clients. Implemented responsive design principles and optimized code for performance. Conducted code reviews and mentored junior developers.",
              tags: ["JavaScript", "TypeScript", "Vue.js", "Express"]
            }
          ]}
        />

        <div className="flex items-center mb-6 mt-12 reveal">
          <Award size={20} className="text-primary mr-2" />
          <h3 className="text-xl font-semibold">Internships</h3>
        </div>
        <Timeline
          items={[
            {
              title: "Software Engineering Intern",
              organization: "StartUp Labs",
              location: "Remote",
              date: "Jan 2021 - May 2021",
              description: "Contributed to the development of a fintech application. Implemented new features and fixed bugs in existing codebase. Participated in Agile development cycles with daily stand-ups and sprint planning.",
              tags: ["React", "Redux", "Firebase"]
            },
            {
              title: "Web Development Intern",
              organization: "Creative Digital Agency",
              location: "Virtual Internship",
              date: "Sep 2020 - Dec 2020",
              description: "Designed and developed responsive websites for small business clients. Collaborated with designers to implement UI/UX improvements. Created documentation for content management systems.",
              tags: ["HTML/CSS", "JavaScript", "WordPress"]
            }
          ]}
        />
      </Section>

      {/* Education Section */}
      <Section
        id="education"
        title="Education"
        subtitle="My academic background and qualifications."
      >
        <div className="flex items-center mb-6 reveal">
          <GraduationCap size={20} className="text-primary mr-2" />
          <h3 className="text-xl font-semibold">Academic Qualifications</h3>
        </div>
        <Timeline
          items={[
            {
              title: "Master of Science in Computer Science",
              organization: "Tokyo Technical University",
              location: "Tokyo, Japan",
              date: "2019 - 2021",
              description: "Specialized in Software Engineering and Artificial Intelligence. Thesis on "Optimizing Machine Learning Algorithms for Real-time Applications". GPA: 3.8/4.0",
              tags: ["AI/ML", "Algorithms", "Software Engineering"]
            },
            {
              title: "Bachelor of Science in Computer Engineering",
              organization: "National University",
              location: "Boston, USA",
              date: "2015 - 2019",
              description: "Focus on Computer Architecture and Software Development. Completed capstone project on distributed systems. Graduated with honors.",
              tags: ["Programming", "Data Structures", "Networking"]
            }
          ]}
        />

        <div className="flex items-center mb-6 mt-12 reveal">
          <Award size={20} className="text-primary mr-2" />
          <h3 className="text-xl font-semibold">Certificates & Training</h3>
        </div>
        <Timeline
          items={[
            {
              title: "AWS Certified Solutions Architect",
              organization: "Amazon Web Services",
              date: "2022",
              description: "Professional certification for designing distributed systems on AWS."
            },
            {
              title: "Full Stack Development Bootcamp",
              organization: "Tech Academy",
              date: "2020",
              description: "Intensive 12-week program covering modern web development technologies and practices."
            },
            {
              title: "Machine Learning Specialization",
              organization: "Coursera",
              date: "2019",
              description: "Series of courses covering ML algorithms, deep learning, and practical applications."
            }
          ]}
        />
      </Section>

      {/* Skills Section */}
      <Section
        id="skills"
        title="Skills"
        subtitle="Technical and professional skills I've developed throughout my career."
        className="bg-muted/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center mb-6 reveal">
              <Code size={20} className="text-primary mr-2" />
              <h3 className="text-xl font-semibold">Technical Skills</h3>
            </div>
            <SkillBar name="JavaScript/TypeScript" percentage={95} delay={100} />
            <SkillBar name="React.js" percentage={90} delay={200} />
            <SkillBar name="Node.js" percentage={85} delay={300} />
            <SkillBar name="HTML5/CSS3" percentage={90} delay={400} />
            <SkillBar name="Python" percentage={75} delay={500} />
            <SkillBar name="AWS Cloud" percentage={80} delay={600} />
          </div>
          <div>
            <div className="flex items-center mb-6 reveal">
              <Languages size={20} className="text-primary mr-2" />
              <h3 className="text-xl font-semibold">Languages & Frameworks</h3>
            </div>
            <SkillBar name="Vue.js" percentage={85} delay={100} />
            <SkillBar name="Express.js" percentage={80} delay={200} />
            <SkillBar name="PostgreSQL" percentage={75} delay={300} />
            <SkillBar name="MongoDB" percentage={70} delay={400} />
            <SkillBar name="Docker/Kubernetes" percentage={65} delay={500} />
            <SkillBar name="GraphQL" percentage={60} delay={600} />
          </div>
        </div>
        
        <div className="mt-16">
          <div className="flex items-center mb-6 reveal">
            <Heart size={20} className="text-primary mr-2" />
            <h3 className="text-xl font-semibold">Extracurricular Activities</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card reveal">
              <h4 className="text-lg font-semibold mb-2">Hackathon Winner</h4>
              <p className="text-muted-foreground">1st place at Tokyo Tech Hackathon 2022 for developing an innovative accessibility solution for visually impaired users.</p>
            </div>
            <div className="card reveal delay-100">
              <h4 className="text-lg font-semibold mb-2">Open Source Contributor</h4>
              <p className="text-muted-foreground">Active contributor to several open-source projects, including React libraries and developer tools.</p>
            </div>
            <div className="card reveal delay-200">
              <h4 className="text-lg font-semibold mb-2">Tech Community Mentor</h4>
              <p className="text-muted-foreground">Volunteer mentor for coding bootcamp graduates, helping new developers transition into professional roles.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section
        id="projects"
        title="Projects"
        subtitle="A selection of my recent work and personal projects."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="E-Commerce Platform"
            description="A fully functional e-commerce solution with inventory management, payment processing, and customer analytics."
            image="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            tags={["React", "Node.js", "MongoDB", "Stripe API"]}
            demoUrl="#"
            githubUrl="#"
          />
          <ProjectCard
            title="AI Task Manager"
            description="A productivity application that uses machine learning to prioritize tasks and suggest optimal times for completing work."
            image="https://images.unsplash.com/photo-1546146477-15a587cd5fcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            tags={["Python", "TensorFlow", "React", "Flask"]}
            demoUrl="#"
            githubUrl="#"
          />
          <ProjectCard
            title="Healthcare Dashboard"
            description="An interactive analytics dashboard for healthcare providers to monitor patient data and treatment outcomes."
            image="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
            tags={["Vue.js", "D3.js", "Express", "PostgreSQL"]}
            demoUrl="#"
            githubUrl="#"
          />
          <ProjectCard
            title="Blockchain Voting System"
            description="A secure, transparent voting platform built on blockchain technology for organizational elections."
            image="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            tags={["Solidity", "Ethereum", "Web3.js", "React"]}
            demoUrl="#"
            githubUrl="#"
          />
          <ProjectCard
            title="Language Learning App"
            description="A mobile application for language learning with speech recognition and adaptive learning algorithms."
            image="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=771&q=80"
            tags={["React Native", "Firebase", "TensorFlow Lite"]}
            demoUrl="#"
            githubUrl="#"
          />
          <ProjectCard
            title="Smart Home IoT Hub"
            description="A central management system for smart home devices with voice control and automation rules."
            image="https://images.unsplash.com/photo-1558002038-1055e2dae2c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            tags={["Node.js", "MQTT", "React", "Raspberry Pi"]}
            demoUrl="#"
            githubUrl="#"
          />
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        title="Contact Me"
        subtitle="Let's discuss how I can contribute to your project or team."
        className="bg-muted/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="reveal">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-6">
              I'm currently available for freelance work or full-time positions. If you have a project that needs expertise or are looking to add a developer to your team, please feel free to reach out.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:hello@johndoe.com" className="text-primary hover:underline">
                    hello@johndoe.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Linkedin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    linkedin.com/in/johndoe
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Github size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <a 
                    href="https://github.com/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    github.com/johndoe
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal delay-200">
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
};

export default Index;
