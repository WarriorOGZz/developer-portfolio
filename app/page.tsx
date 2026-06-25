'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Code2,
  Rocket,
  Users,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Menu,
  X,
} from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 backdrop-blur-md bg-dark/80 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            WarriorOGZz
          </motion.div>

          <div className="hidden md:flex gap-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-primary transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-gray-300 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl"
        style={{ y }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
            >
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm text-primary">Welcome to my portfolio</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="gradient-text">WarriorOGZz</span>
            </h1>

            <p className="text-xl text-gray-400 mb-4">
              Full Stack Developer | Problem Solver | Tech Enthusiast
            </p>

            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Creating beautiful and functional web experiences with cutting-edge technologies.
            </p>

            <div className="flex gap-4 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-64 h-64 mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl opacity-20 blur-2xl" />
              <div className="relative w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-3xl backdrop-blur-xl flex items-center justify-center">
                <Code2 size={80} className="text-primary/50" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm a passionate developer with a love for creating innovative solutions.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm constantly learning new technologies and best practices to stay ahead.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {[
              { icon: Code2, title: 'Clean Code', desc: 'Maintainable and efficient code' },
              { icon: Rocket, title: 'Performance', desc: 'Optimized for speed' },
              { icon: Users, title: 'Collaboration', desc: 'Working effectively with teams' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-6 bg-white/5 border border-white/10 rounded-xl group"
              >
                <div className="flex items-start gap-4">
                  <item.icon className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'REST APIs', 'GraphQL'] },
    { category: 'Tools & DevOps', items: ['Git', 'Docker', 'VS Code', 'GitHub Actions', 'Linux'] },
    { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis'] },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item, j) => (
                  <li key={j} className="text-gray-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Project One',
      desc: 'A modern web application built with React and Node.js.',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Project Two',
      desc: 'A responsive mobile app with intuitive design.',
      tags: ['Vue.js', 'Firebase', 'Mobile'],
    },
    {
      title: 'Project Three',
      desc: 'An enterprise-level backend system.',
      tags: ['Python', 'PostgreSQL', 'Docker'],
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Code2 size={24} className="text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-6">{project.desc}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xl text-gray-400 mb-12"
        >
          Have a project in mind? Let's collaborate!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {[
            { icon: Mail, href: 'mailto:your-email@example.com' },
            { icon: Github, href: 'https://github.com/WarriorOGZz' },
            { icon: Linkedin, href: 'https://linkedin.com' },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              whileHover={{ scale: 1.1 }}
              className="p-4 bg-white/5 border border-white/10 rounded-full group"
            >
              <social.icon size={28} className="text-primary" />
            </motion.a>
          ))}
        </motion.div>

        <p className="text-gray-600 text-sm">© 2026 WarriorOGZz. All rights reserved.</p>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="bg-dark min-h-screen">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
