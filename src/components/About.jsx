import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaCloud, FaChalkboardTeacher, FaRocket } from 'react-icons/fa';
import styles from './About.module.css';

const About = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const highlights = [
    {
      icon: <FaCode />,
      title: "Professional Experience",
      items: [
        "Java Backend Developer at TCS",
        "Worked on Ultimatix Authentication Services",
        "Expertise in Spring Boot and Spring Security",
        "Experience with cloud technologies (Azure)"
      ],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      icon: <FaCloud />,
      title: "Technical Skills",
      items: [
        "Java, Spring Boot, REST APIs",
        "JWT, OAuth2, Redis",
        "SQL, Git, Linux",
        "Secure system management"
      ],
      gradient: "linear-gradient(135deg, #38ef7d 0%, #11998e 100%)"
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Teaching & Mentorship",
      items: [
        "Freelance Technical Trainer",
        "4.7/5 Average Trainer Rating",
        "Subjects: Java, Python, C, DSA",
        "Trained across multiple platforms"
      ],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.backgroundElements}>
        <div className={styles.bgBlob1}></div>
        <div className={styles.bgBlob2}></div>
      </div>

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className={styles.header} variants={itemVariants}>
          <motion.div
            className={styles.titleContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaRocket className={styles.titleIcon} />
            <h2 className={styles.title}>About Me</h2>
          </motion.div>
          <motion.div
            className={styles.titleUnderline}
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <motion.div className={styles.content} variants={itemVariants}>
          <motion.div
            className={styles.descriptionCard}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <p className={styles.description}>
              I am a passionate <span className={styles.highlight}>Java Backend Developer</span> at TCS, specializing in building secure and scalable backend systems using modern technologies. With expertise in <span className={styles.highlight}>Spring Boot</span>, <span className={styles.highlight}>Spring Security</span>, and <span className={styles.highlight}>REST APIs</span>, I have worked on critical projects like the Ultimatix Authentication Services.
            </p>

            <p className={styles.description}>
              My technical toolkit includes <span className={styles.highlight}>Java</span>, <span className={styles.highlight}>Spring Boot</span>, <span className={styles.highlight}>Spring Security</span>, <span className={styles.highlight}>JWT/OAuth2</span>, <span className={styles.highlight}>Redis</span>, <span className={styles.highlight}>Azure</span>, <span className={styles.highlight}>SQL</span>, and <span className={styles.highlight}>Git</span>. I am proficient with Linux environments, PuTTY, and CyberArk for secure system management.
            </p>

            <p className={styles.description}>
              Beyond my professional role, I am a dedicated <span className={styles.highlight}>Freelance Technical Trainer</span> with a <span className={styles.highlight}>4.7/5 average rating</span>. I have trained students across multiple institutes and freelancing platforms in <span className={styles.highlight}>Java</span>, <span className={styles.highlight}>Python</span>, <span className={styles.highlight}>C</span>, and <span className={styles.highlight}>Data Structures & Algorithms (DSA)</span>.
            </p>
          </motion.div>
        </motion.div>

        <motion.div className={styles.highlights} variants={itemVariants}>
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className={styles.highlightCard}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{ '--hover-gradient': highlight.gradient }}
            >
              <motion.div
                className={styles.cardIcon}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {highlight.icon}
              </motion.div>

              <h3 className={styles.cardTitle}>{highlight.title}</h3>

              <ul className={styles.cardList}>
                {highlight.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    className={styles.cardItem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + (index * 0.1) + (itemIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <span className={styles.bullet}></span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className={styles.cardGlow}></div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
