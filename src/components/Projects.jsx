import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRocket, FaLock, FaCog, FaTruck } from 'react-icons/fa';
import styles from './Projects.module.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: 'Ultimatix Authentication Services',
      shortDesc: 'Enterprise-grade authentication system with Azure AD integration',
      description: 'Developed a comprehensive secure authentication system for enterprise-level access management using Spring Security, JWT, and OAuth2. Implemented advanced role-based access control with multi-factor authentication, integrated with Azure Active Directory for seamless user authentication, and deployed on cloud infrastructure with high availability and scalability.',
      tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Azure AD', 'Redis', 'PostgreSQL'],
      github: 'https://github.com/nambhi-amarnath/ultimatix-auth',
      demo: '#',
      icon: <FaLock />,
      category: 'Enterprise',
      status: 'Production',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: [
        'Multi-factor authentication',
        'Role-based access control',
        'Azure AD integration',
        'JWT token management',
        'Audit logging',
        'High availability deployment'
      ]
    },
    {
      id: 2,
      title: 'Role-Based Management System',
      shortDesc: 'Dynamic permission management with real-time updates',
      description: 'Built a sophisticated RBAC (Role-Based Access Control) system with dynamic permission management, real-time user role assignments, and comprehensive audit logging. Features include granular permission controls, hierarchical role structures, and secure API endpoints with rate limiting and monitoring.',
      tech: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'JWT', 'Redis', 'Docker'],
      github: 'https://github.com/nambhi-amarnath/rbac-system',
      demo: '#',
      icon: <FaCog />,
      category: 'Security',
      status: 'Completed',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      features: [
        'Dynamic permission management',
        'Hierarchical role structures',
        'Real-time updates',
        'Comprehensive audit logs',
        'API rate limiting',
        'Docker containerization'
      ]
    },
    {
      id: 3,
      title: 'Parcel Management System (TCS ILP)',
      shortDesc: 'Full-stack parcel tracking with real-time notifications',
      description: 'Developed a comprehensive parcel tracking and management system during TCS Industrial Learning Program. Implemented real-time GPS tracking, automated delivery notifications, admin dashboard with analytics, and mobile-responsive interfaces. Features include route optimization, delivery scheduling, and customer communication portals.',
      tech: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Redis', 'WebSocket', 'React'],
      github: 'https://github.com/nambhi-amarnath/parcel-management',
      demo: '#',
      icon: <FaTruck />,
      category: 'Full-Stack',
      status: 'Completed',
      gradient: 'linear-gradient(135deg, #38ef7d 0%, #11998e 100%)',
      features: [
        'Real-time GPS tracking',
        'Automated notifications',
        'Route optimization',
        'Admin analytics dashboard',
        'Mobile-responsive design',
        'WebSocket integration'
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production': return '#38ef7d';
      case 'Completed': return '#667eea';
      case 'In Progress': return '#f093fb';
      default: return '#94a3b8';
    }
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.backgroundElements}>
        <div className={styles.bgOrb1}></div>
        <div className={styles.bgOrb2}></div>
        <div className={styles.bgGrid}></div>
      </div>

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className={styles.titleContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <FaRocket className={styles.titleIcon} />
            <h2 className={styles.title}>Featured Projects</h2>
          </motion.div>
          <motion.div
            className={styles.titleUnderline}
            initial={{ width: 0 }}
            whileInView={{ width: "140px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <motion.div className={styles.grid} variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              variants={itemVariants}
              whileHover={{
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedProject(project)}
              custom={index}
              style={{ '--project-gradient': project.gradient }}
            >
              <div className={styles.cardGlow}></div>

              <div className={styles.cardHeader}>
                <motion.div
                  className={styles.projectIcon}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {project.icon}
                </motion.div>
                <div className={styles.cardMeta}>
                  <span
                    className={styles.statusBadge}
                    style={{ backgroundColor: getStatusColor(project.status) }}
                  >
                    {project.status}
                  </span>
                  <span className={styles.category}>{project.category}</span>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectShortDesc}>{project.shortDesc}</p>

                <div className={styles.techStack}>
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className={styles.techTag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + (index * 0.1) + (techIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className={styles.techMore}>+{project.tech.length - 4}</span>
                  )}
                </div>
              </div>

              <div className={styles.cardActions}>
                <motion.button
                  className={styles.viewDetailsBtn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                >
                  View Details
                </motion.button>
              </div>

              <div className={styles.cardShine}></div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className={styles.modal}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <div className={styles.modalIcon}>
                  {selectedProject.icon}
                </div>
                <div className={styles.modalMeta}>
                  <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                  <div className={styles.modalBadges}>
                    <span
                      className={styles.modalStatus}
                      style={{ backgroundColor: getStatusColor(selectedProject.status) }}
                    >
                      {selectedProject.status}
                    </span>
                    <span className={styles.modalCategory}>{selectedProject.category}</span>
                  </div>
                </div>
                <motion.button
                  className={styles.closeBtn}
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </motion.button>
              </div>

              <div className={styles.modalContent}>
                <p className={styles.modalDescription}>{selectedProject.description}</p>

                <div className={styles.modalFeatures}>
                  <h4>Key Features:</h4>
                  <ul>
                    {selectedProject.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className={styles.modalTech}>
                  <h4>Technologies Used:</h4>
                  <div className={styles.techGrid}>
                    {selectedProject.tech.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        className={styles.modalTechTag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.modalActions}>
                <motion.a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.actionBtn} ${styles.githubBtn}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                  View Code
                </motion.a>
                <motion.a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.actionBtn} ${styles.demoBtn}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
