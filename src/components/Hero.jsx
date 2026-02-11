import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaHackerrank, FaDownload } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Java Backend Developer | Spring Boot Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.5,
      },
    },
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/nambhi-amarnath',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/nambhi-amarnath',
      color: '#0077b5'
    },
    {
      name: 'HackerRank',
      icon: <FaHackerrank />,
      url: 'https://hackerrank.com/profile/nambhi_amarnath',
      color: '#00ea64'
    },
    {
      name: 'LeetCode',
      icon: <FaCode />,
      url: 'https://leetcode.com/nambhi_amarnath',
      color: '#ffa116'
    }
  ];

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      <div className={styles.blob3}></div>
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.content}>
          <motion.div className={styles.profileContainer} variants={itemVariants}>
            <motion.div className={styles.profileImageContainer} variants={itemVariants}>
              <img
                src="/images/profile.png"
                alt="Nambhi Amarnath - Profile Photo"
                className={styles.profileImage}
              />
            </motion.div>
          </motion.div>

          <motion.div className={styles.greeting} variants={itemVariants}>
            <span className={styles.greetingText}>Hello, I'm</span>
          </motion.div>

          <motion.h1 className={styles.name} variants={itemVariants}>
            <span className={styles.nameHighlight}>Nambhi</span> Amarnath
          </motion.h1>

          <motion.h2 className={styles.title} variants={itemVariants}>
            {displayText}
            <span className={styles.cursor}>|</span>
          </motion.h2>

          <motion.p className={styles.tagline} variants={itemVariants}>
            Building secure, scalable backend systems with modern technologies.
            Passionate about clean code, microservices, and cloud-native solutions.
          </motion.p>

          <motion.div className={styles.socialLinks} variants={socialVariants}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  boxShadow: `0 10px 30px ${social.color}40`
                }}
                whileTap={{ scale: 0.95 }}
                custom={index}
                style={{ '--hover-color': social.color }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div className={styles.buttons} variants={itemVariants}>
            <motion.a
              href="#projects"
              className={`${styles.btn} ${styles.btnPrimary}`}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(102, 126, 234, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className={styles.btnIcon} />
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className={`${styles.btn} ${styles.btnSecondary}`}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.15)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>


      </motion.div>
    </section>
  );
};

export default Hero;
