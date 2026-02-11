import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaPython, FaDatabase, FaRobot, FaCertificate, FaTrophy, FaMedal, FaStar } from 'react-icons/fa';
import styles from './Certifications.module.css';

const Certifications = () => {
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

  const certifications = [
    {
      id: 1,
      title: 'EPAM Java Full Stack',
      issuer: 'EPAM Systems',
      description: 'Comprehensive full-stack Java development certification covering modern web technologies, microservices architecture, and industry best practices.',
      icon: <FaAward />,
      color: '#667eea',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      category: 'Professional',
      date: '2024',
      skills: ['Java', 'Spring Boot', 'Microservices', 'Web Development']
    },
    {
      id: 2,
      title: 'HackerRank Python',
      issuer: 'HackerRank',
      description: 'Advanced Python programming certification demonstrating proficiency in Python development, data structures, and algorithmic problem-solving.',
      icon: <FaPython />,
      color: '#3776ab',
      gradient: 'linear-gradient(135deg, #3776ab 0%, #ffd43b 100%)',
      category: 'Technical',
      date: '2024',
      skills: ['Python', 'Algorithms', 'Data Structures', 'Problem Solving']
    },
    {
      id: 3,
      title: 'HackerRank SQL',
      issuer: 'HackerRank',
      description: 'Database management and SQL query optimization certification with advanced database concepts, query performance, and data modeling.',
      icon: <FaDatabase />,
      color: '#336791',
      gradient: 'linear-gradient(135deg, #336791 0%, #f093fb 100%)',
      category: 'Database',
      date: '2024',
      skills: ['SQL', 'Database Design', 'Query Optimization', 'Data Modeling']
    },
    {
      id: 4,
      title: 'TCS AI Hackathon Emerging Innovator Award',
      issuer: 'TCS (Tata Consultancy Services)',
      description: 'Recognition for innovative AI solutions and creative problem-solving in TCS AI Hackathon competition, showcasing cutting-edge technology implementation.',
      icon: <FaRobot />,
      color: '#ff6b6b',
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
      category: 'Achievement',
      date: '2023',
      skills: ['AI/ML', 'Innovation', 'Problem Solving', 'Team Collaboration']
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Professional': return <FaCertificate />;
      case 'Technical': return <FaStar />;
      case 'Database': return <FaDatabase />;
      case 'Achievement': return <FaTrophy />;
      default: return <FaAward />;
    }
  };

  return (
    <section id="certifications" className={styles.certifications}>
      <div className={styles.backgroundElements}>
        <div className={styles.bgOrb1}></div>
        <div className={styles.bgOrb2}></div>
        <div className={styles.bgParticles}></div>
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
            <FaCertificate className={styles.titleIcon} />
            <h2 className={styles.title}>Certifications & Achievements</h2>
          </motion.div>
          <motion.div
            className={styles.titleUnderline}
            initial={{ width: 0 }}
            whileInView={{ width: "160px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <motion.div className={styles.grid} variants={containerVariants}>
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className={styles.certCard}
              variants={itemVariants}
              whileHover={{
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              custom={index}
              style={{ '--cert-gradient': cert.gradient }}
            >
              <div className={styles.cardGlow}></div>

              <div className={styles.cardHeader}>
                <motion.div
                  className={styles.certIcon}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  style={{ color: cert.color }}
                >
                  {cert.icon}
                </motion.div>
                <div className={styles.cardMeta}>
                  <span
                    className={styles.categoryBadge}
                    style={{ backgroundColor: cert.color + '20', color: cert.color }}
                  >
                    {getCategoryIcon(cert.category)}
                    <span>{cert.category}</span>
                  </span>
                  <span className={styles.certDate}>{cert.date}</span>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certIssuer}>
                  <FaAward className={styles.issuerIcon} />
                  {cert.issuer}
                </p>
                <p className={styles.certDescription}>{cert.description}</p>

                <div className={styles.skillTags}>
                  {cert.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className={styles.skillTag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + (index * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className={styles.cardShine}></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.statsSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.stats}>
            <div className={styles.stat}>
              <FaCertificate className={styles.statIcon} />
              <span className={styles.statNumber}>4+</span>
              <span className={styles.statLabel}>Certifications</span>
            </div>
            <div className={styles.stat}>
              <FaTrophy className={styles.statIcon} />
              <span className={styles.statNumber}>1</span>
              <span className={styles.statLabel}>Award Won</span>
            </div>
            <div className={styles.stat}>
              <FaStar className={styles.statIcon} />
              <span className={styles.statNumber}>95%</span>
              <span className={styles.statLabel}>Avg. Score</span>
            </div>
            <div className={styles.stat}>
              <FaMedal className={styles.statIcon} />
              <span className={styles.statNumber}>2</span>
              <span className={styles.statLabel}>Years Active</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certifications;
