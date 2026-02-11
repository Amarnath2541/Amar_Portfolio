import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaShieldAlt, FaNetworkWired, FaKey, FaDatabase, FaCloud, FaTerminal, FaGitAlt, FaLinux, FaBrain } from 'react-icons/fa';
import styles from './Skills.module.css';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
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

  const skills = [
    { name: 'Java', icon: <FaCode />, level: 95, color: '#ED8B00' },
    { name: 'Spring Boot', icon: <FaServer />, level: 90, color: '#6DB33F' },
    { name: 'Spring Security', icon: <FaShieldAlt />, level: 85, color: '#6DB33F' },
    { name: 'REST APIs', icon: <FaNetworkWired />, level: 90, color: '#61DAFB' },
    { name: 'JWT / OAuth2', icon: <FaKey />, level: 85, color: '#FF6B6B' },
    { name: 'Redis', icon: <FaDatabase />, level: 80, color: '#DC382D' },
    { name: 'Azure', icon: <FaCloud />, level: 75, color: '#0078D4' },
    { name: 'SQL', icon: <FaDatabase />, level: 85, color: '#336791' },
    { name: 'Git', icon: <FaGitAlt />, level: 90, color: '#F05032' },
    { name: 'Linux', icon: <FaLinux />, level: 80, color: '#FCC624' },
    { name: 'DSA', icon: <FaBrain />, level: 85, color: '#8B5CF6' }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.backgroundElements}>
        <div className={styles.bgShape1}></div>
        <div className={styles.bgShape2}></div>
        <div className={styles.bgShape3}></div>
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
            <FaCode className={styles.titleIcon} />
            <h2 className={styles.title}>Technical Skills</h2>
          </motion.div>
          <motion.div
            className={styles.titleUnderline}
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <motion.div className={styles.grid} variants={containerVariants}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={styles.skillCard}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              custom={index}
              style={{ '--skill-color': skill.color }}
            >
              <div className={styles.cardGlow}></div>
              <div className={styles.skillContent}>
                <motion.div
                  className={styles.skillIcon}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className={styles.skillName}>{skill.name}</h3>
                <div className={styles.skillLevel}>
                  <div className={styles.levelBar}>
                    <motion.div
                      className={styles.levelFill}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                  <span className={styles.levelText}>{skill.level}%</span>
                </div>
              </div>

              <div className={styles.cardShine}></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.statsContainer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>2+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Projects Completed</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Students Trained</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>4.7★</span>
              <span className={styles.statLabel}>Trainer Rating</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
