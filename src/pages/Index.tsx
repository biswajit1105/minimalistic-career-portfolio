import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Section from '@/components/Section';
import Timeline from '@/components/Timeline';
import SkillBar from '@/components/SkillBar';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import CertificateCard from '@/components/CertificateCard';
import { Download, Briefcase, GraduationCap, Award, Code, Languages, Heart, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const Index = () => {
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
      
      {/* Hero Section with Background Image */}
      <section 
        id="home" 
        className="min-h-screen flex flex-col justify-center pt-20 relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 30, 0.7), rgba(0, 0, 30, 0.7)), url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="max-w-3xl">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full mb-6 animate-fade-in backdrop-blur-sm">
                <span className="font-medium">Senior Programmer</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-white">
                Hi, I'm <span className="text-primary">Biswajit Mandal</span> 
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in delay-100">
                Creating elegant solutions for complex problems with clean, efficient code.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in delay-200">
                <a href="#contact" className="btn-primary">
                  Let's Talk
                </a>
                  <a href="/BiswajitMandal-SeniorProgrammer.pdf" className="btn-outline border-white/30 text-white hover:bg-white/10" download>
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary overflow-hidden animate-fade-in">
                <img 
                  src="/ProfilePic.png" 
                  alt="Biswajit Mandal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-pulse-slow">
          <a href="#about" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
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
              subtitle="I'm a Passionate Software Programmer over two years of professional experience in building Web Applications desktop applications"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="reveal">
            <h3 className="text-xl font-semibold mb-4">Who I am</h3>
            <p className="text-muted-foreground mb-4">
               I am a Software Programmer with a passion for building efficient and user-friendly applications that solve real-world problems. Currently based in Ahmedabad, India, I specialize in C# .NET development, DevExpress controls, and REST API development, delivering efficient and scalable solutions for diverse business needs.
            </p>
            <p className="text-muted-foreground mb-4">
                          My journey into software development started during my B.Tech at BIT Mesra, where I built a strong foundation in programming, algorithms, and problem-solving. After graduating, I joined a Japan-based company, where I gained valuable hands-on experience working on web and desktop applications and collaborating on projects that enhanced both my technical and analytical skills.
            </p>
            <p className="text-muted-foreground">
               When I am not coding, IÅfm exploring new technologies, learning best practices in software design, or participating in technical discussions that help me grow both technically and creatively.
            </p>
          </div>
          <div className="reveal delay-200">
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="font-semibold w-28">Name:</span>
                <span className="text-muted-foreground">Biswajit Mandal</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-28">Email:</span>
                <span className="text-muted-foreground">biswajitmandal012345@gmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-28">Location:</span>
                <span className="text-muted-foreground">Ahmedabad, India</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-28">Experience:</span>
                <span className="text-muted-foreground">2+ Years</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-28">Languages:</span>
                <span className="text-muted-foreground">English (Fluent), Hindi (Native), Bengoli (Fluent), Japanese (Basics)</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-28">Organization:</span>
                <span className="text-muted-foreground">Acty System India Pvt Ltd</span>
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
              organization: "Acty System India Pvt Ltd",
              location: "Ahmedabad, India",
              date: "Feb 2025 - Present",
              description: "Lead developer for enterprise-level applications, managing a team of 4 developers." ,
              tags: ["C#.NET Framework", "ASP.NET MVC", "ASP.NET WebAPI", "RESTful APIs", "DevExpress Controls", "SQL Server", "JSON", "XML", "Git Bucket", "Software Testing"]
            },
            {
              title: "Software Programmer",
              organization: "Acty System India Pvt Ltd",
              location: "Ahmedabad, India",
              date: "Aug 2023 - Feb 2025",
              description: "Developed and maintained web applications for international clients. Implemented responsive design principles and optimized code for performance. Conducted code reviews and mentored junior developers.",
              tags: ["C#.NET Framework", "ASP.NET MVC", "ASP.NET WebAPI", "RESTful APIs", "DevExpress Controls", "SQL Server", "JSON", "XML", "Git Bucket", "Software Testing"]
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
              title: "Project Trainee",
              organization: "Acty System India Pvt Ltd",
              location: "Ahmedabad, India",
              date: "Feb 2023 - Jul 2023",
              description: "Contributed to the development of a fintech application. Implemented new features and fixed bugs in existing codebase. Participated in Agile development cycles with daily stand-ups and sprint planning.",
              tags: ["C#.NET Framework", "HTML/CSS", "JavaScript", "jQuery", "Bootstrap", "AJAX", "Git Bucket", "Razor/Blazor", "Windows Forms", "RESTful APIs", "SQL Server"]
            },
            {
              title: "Intern",
              organization: "Bharat Coking Coal Limited (BCCL)",
              location: "Dhanbad, Jharkhand",
              date: "May 2022 - Jun 2022",
              description: "Designed and developed responsive websites for small business clients. Collaborated with designers to implement UI/UX improvements. Created documentation for content management systems.",
              tags: ["RFID", "Radio Communication", "EPABX(Electronic Private Automatic Branch Exchange)", "Vehicle Tracking System (VTS)", "RFID technology"]
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
              title: "Bachelor of Technology in Electronics and Communication with Minors Computer Engineering",
              organization: "Birla Institute of Technology, Mesra",
              location: "Ranchi, Jharkhand",
              date: "2019 - 2023",
              description: "CGPA: 8.1/10.0",
            },
            {
              title: "Higher Secondary (Class 12)",
              organization: "Dhanabd public School",
              location: "Dhanbad, Jharkhand",
              date: "2018",
              description: "Percentage: 75.6%",
            },
            {
              title: "Secondary (Class 10)",
              organization: "Dhanabd public School",
              location: "Dhanbad, Jharkhand",
              date: "2018",
              description: "CGPA: 9.8/10.0",
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
              title: "AWS For Beginners",
              organization: "Great learning Academy",
              date: "2024",
              tags: ["AWS", "AWS lambda", "AWS Elastic Beanstalk"]
            },
            {
              title: "Blockchain Basics",
              organization: "Great learning Academy",
              date: "2024",
              tags: ["Blockchain"]
            },
            {
              title: "Microsoft Excel 2013 Certification",
              organization: "Great Learning",
              date: "2024",
              tags: ["Microsoft Excel"]
            },
            {
              title: "Start-Up Bihar (NPTIS-2020)",
              organization: "Department of Industries, Government of Bihar",
              date: "2020",
              tags: ["Inovation Development", "Presentation Skills"]
            },
            {
              title: "SIH-2020",
              organization: "Smart India Hackathon",
              date: "2020",
              tags: ["Inovation Development", "Presentation Skills"]
            }
          ]}
        />
      </Section>

      {/* Certificate Showcase */}
      <Section
        id="certificates"
        title="Certification Showcase"
        subtitle="View my professional certifications and achievements."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CertificateCard 
            title="AWS For Beginners"
            organization="Great learning Academy"
            date="2024"
            image="\SourceFile\Certificate\AWS.jpg"
            certificateUrl="https://drive.google.com/file/d/12kx_nKXmM6MVXzDt9fbyUAvy_hnObTPM/view?usp=drive_link"
          />
          <CertificateCard 
            title= "Blockchain Basics"
            organization= "Great learning Academy"
            date= "2024"
            image="\SourceFile\Certificate\Blockchain.jpg"
            certificateUrl="https://drive.google.com/file/d/1nlIArYVgyDSQLVhDl6i8dhmLta-ap6mc/view?usp=drive_link"
            />
          <CertificateCard 
            title="Microsoft Excel 2013 Certification"
            organization="Great learning Academy"
            date="2024"
            image="\SourceFile\Certificate\Excel.jpg"
            certificateUrl="https://drive.google.com/file/d/1h5GAgUb6WcE6IHsjgs8REsq_l90wPC4x/view?usp=drive_link"
          />
          <CertificateCard 
            title="Start-Up Bihar (NPTIS-2020)"
            organization="Department of Industries, Government of Bihar"
            date="2020"
            image="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            certificateUrl="https://example.com/certificate2"
          />
          <CertificateCard 
            title="SIH-2020"
            organization="Smart India Hackathon"
            date="2020"
            image="\SourceFile\Certificate\BIT_SIH.jpg"
            certificateUrl="https://drive.google.com/file/d/1ZWv_z3ZYlpAP8ZmM1ZzRAMOwl0bLUyDF/view?usp=drive_link"
          />
        </div>
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
              <Languages size={20} className="text-primary mr-2" />
              <h3 className="text-xl font-semibold">Languages & Frameworks</h3>
              
            </div>
            <SkillBar name="C#" percentage={85} delay={100} />
            <SkillBar name="C++" percentage={80} delay={200} />
            <SkillBar name="Python" percentage={75} delay={300} />
            <SkillBar name="ASP.NET MVC" percentage={90} delay={400} />
            <SkillBar name="ASP.NET WebAPI" percentage={90} delay={500} />
            <SkillBar name="JavaScript/TypeScript" percentage={95} delay={600} />
            <SkillBar name="React.js" percentage={90} delay={700} />
            <SkillBar name="Node.js" percentage={85} delay={800} />
            <SkillBar name="HTML5/CSS3" percentage={90} delay={900} />
            <SkillBar name="Bootstrap" percentage={80} delay={1000} />
            <SkillBar name="AJAX" percentage={80} delay={1100} />
            <SkillBar name="JQuery" percentage={80} delay={1200} />
          </div>
          <div>
            <div className="flex items-center mb-6 reveal">
             <Code size={20} className="text-primary mr-2" />
              <h3 className="text-xl font-semibold">Technical Skills</h3>
            </div>
            <SkillBar name="DevExpress" percentage={90} delay={100} />
            <SkillBar name="RESTful APIs" percentage={90} delay={200} />
            <SkillBar name="SQL Server" percentage={80} delay={300} />
            <SkillBar name="Windows Forms" percentage={80} delay={400} />
            <SkillBar name="Software Testing" percentage={80} delay={500} />
            <SkillBar name="IIS" percentage={80} delay={600} />
            <SkillBar name="Microsoft Excel" percentage={80} delay={700} />
            <SkillBar name="AWS Cloud" percentage={80} delay={800} />
            <SkillBar name="Tortoise SVN" percentage={80} delay={900} />
            <SkillBar name="Git Bucket" percentage={80} delay={1000} />
            <SkillBar name="Object-Oriented Programming (OOP)" percentage={80} delay={1100} />
            <SkillBar name="Data Structure" percentage={80} delay={1200} />
          </div>
        </div>
        
        <div className="mt-16">
          <div className="flex items-center mb-6 reveal">
            <Heart size={20} className="text-primary mr-2" />
            <h3 className="text-xl font-semibold">Extracurricular Activities</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card reveal">
              <h4 className="text-lg font-semibold mb-2">Smart India Hackathon Winner</h4>
              <p className="text-muted-foreground">Secured 4th Position in a national-level hackathon by solving real-world problems with innovative solutions.</p>
            </div>
            <div className="card reveal delay-100">
              <h4 className="text-lg font-semibold mb-2">Treasurer and Steering Department Head</h4>
              <p className="text-muted-foreground">Managed team finances and collaborated with the steering department in a student-led motorsports Team Ashwa Racing.</p>
            </div>
            <div className="card reveal delay-200">
              <h4 className="text-lg font-semibold mb-2">NPTIS-2020</h4>
              <p className="text-muted-foreground">Participated in Bihar Start-Up 2020 and presented the project "Smart Emergency Care," receiving a Certificate of Recognition for innovative ideas.</p>
            </div>
            <div className="card reveal delay-200">
              <h4 className="text-lg font-semibold mb-2">National Cadet Corps - India</h4>
              <p className="text-muted-foreground">Awarded NCC 'A' Certificate by National Cadet Corps (NCC), India in January 2015 (Credential ID: B&J/JB/43819/13).</p>
            </div>
            <div className="card reveal delay-200">
              <h4 className="text-lg font-semibold mb-2">NCC Training Camp</h4>
              <p className="text-muted-foreground">Successfully completed Annual Training Camp under National Cadet Corps (NCC), India, in January 2015 (Credential ID: B&J/JD/43819/13).</p>
            </div>
            <div className="card reveal delay-200">
              <h4 className="text-lg font-semibold mb-2">District Wushu Championship Winner</h4>
              <p className="text-muted-foreground">Won the District Wushu Championship, organized by District Administration, Dhanbad in November 2012.</p>
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
            image="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
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
                     <a href="mailto:biswajitmandal012345@gmail.com" className="text-primary hover:underline">
                     biswajitmandal012345@gmail.com
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
                    href="https://www.linkedin.com/in/biswajit-mandal-6659111aa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    linkedin.com/biswajit-mandal
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
                    href="https://github.com/biswajit1105"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    github.com/biswajit1105
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
