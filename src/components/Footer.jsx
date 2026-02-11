import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaCode, FaRocket, FaEnvelope, FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
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

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.backgroundElements}>
        <div className={styles.bgWave}></div>
        <div className={styles.bgParticles}></div>
      </div>

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={styles.content}>
          <motion.div className={styles.brandSection} variants={itemVariants}>
            <motion.div
              className={styles.logo}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaCode className={styles.logoIcon} />
              <span className={styles.logoText}>Nambhi Amarnath</span>
            </motion.div>
            <p className={styles.tagline}>
              Java Backend Developer & Technical Trainer
            </p>
            <p className={styles.description}>
              Passionate about creating robust backend solutions and sharing knowledge through teaching.
            </p>
          </motion.div>

          <motion.div className={styles.linksSection} variants={itemVariants}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.linksList}>
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={link.href} className={styles.link}>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div className={styles.socialSection} variants={itemVariants}>
            <h3 className={styles.sectionTitle}>Connect With Me</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    boxShadow: `0 8px 25px ${social.color}30`
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ '--social-color': social.color }}
                  variants={itemVariants}
                >
                  {social.icon}
                  <span className={styles.socialName}>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div className={styles.contactSection} variants={itemVariants}>
            <h3 className={styles.sectionTitle}>Get In Touch</h3>
            <motion.a
              href="mailto:nambiamar1234@gmail.com"
              className={styles.contactLink}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaEnvelope className={styles.contactIcon} />
              <span>nambiamar1234@gmail.com</span>
            </motion.a>
            <div className={styles.contactInfo}>
              <p>📍 Chennai, India</p>
              <p>💼 Open to opportunities</p>
            </div>
          </motion.div>
        </div>

        <motion.div className={styles.divider} variants={itemVariants}></motion.div>

        <motion.div className={styles.bottom} variants={itemVariants}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} Nambhi Amarnath. All rights reserved.
            </p>
            <motion.div
              className={styles.madeWith}
              whileHover={{ scale: 1.02 }}
            >
              <span>Made with</span>
              <motion.span
                className={styles.heart}
                animate={{
                  scale: [1, 1.2, 1],
                  color: ['#ff6b6b', '#ff4757', '#ff6b6b']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaHeart />
              </motion.span>
              <span>using React & Framer Motion</span>
              <FaRocket className={styles.rocketIcon} />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
