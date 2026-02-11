import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const experiences = [
    {
      company: 'TCS',
      role: 'Java Backend Developer',
      period: 'June 2025 – Present',
      description: [
        'Developing secure backend systems using Spring Boot and Spring Security',
        'Working on Ultimatix Authentication Services for enterprise-level security',
        'Implementing REST APIs with JWT and OAuth2 authentication',
        'Managing data persistence with SQL databases and Redis caching',
        'Deploying applications on Azure cloud infrastructure',
        'Collaborating with cross-functional teams for system integration'
      ]
    },
    {
      company: 'Zestech',
      role: 'Freelance Technical Trainer',
      period: 'June 2024 – May 2025',
      description: [
        'Conducted training sessions in Java, Python, C, and Data Structures & Algorithms',
        'Mentored students across multiple institutes and freelancing platforms',
        'Achieved 4.7/5 average trainer rating through effective teaching methods',
        'Developed customized curriculum based on student learning needs',
        'Provided hands-on coding exercises and real-world project guidance'
      ]
    },
    {
      company: 'Campus Connection',
      role: 'Freelance Technical Trainer',
      period: '',
      description: [
        'Conducted training sessions in Java, Python, C, and Data Structures & Algorithms',
        'Mentored students across multiple institutes and freelancing platforms',
        'Achieved 4.7/5 average trainer rating through effective teaching methods',
        'Developed customized curriculum based on student learning needs',
        'Provided hands-on coding exercises and real-world project guidance'
      ]
    },
    {
      company: 'Softomatic',
      role: 'Freelance Technical Trainer',
      period: '',
      description: [
        'Conducted training sessions in Java, Python, C, and Data Structures & Algorithms',
        'Mentored students across multiple institutes and freelancing platforms',
        'Achieved 4.7/5 average trainer rating through effective teaching methods',
        'Developed customized curriculum based on student learning needs',
        'Provided hands-on coding exercises and real-world project guidance'
      ]
    },
    {
      company: 'Six Phrase',
      role: 'Freelance Technical Trainer',
      period: '',
      description: [
        'Conducted training sessions in Java, Python, C, and Data Structures & Algorithms',
        'Mentored students across multiple institutes and freelancing platforms',
        'Achieved 4.7/5 average trainer rating through effective teaching methods',
        'Developed customized curriculum based on student learning needs',
        'Provided hands-on coding exercises and real-world project guidance'
      ]
    },
    {
      company: 'Talentio',
      role: 'Freelance Technical Trainer',
      period: '',
      description: [
        'Conducted training sessions in Java, Python, C, and Data Structures & Algorithms',
        'Mentored students across multiple institutes and freelancing platforms',
        'Achieved 4.7/5 average trainer rating through effective teaching methods',
        'Developed customized curriculum based on student learning needs',
        'Provided hands-on coding exercises and real-world project guidance'
      ]
    },
    {
      company: 'Examate',
      role: 'Freelance Technical Trainer',
      period: '',
      description: [
        'Conducted training sessions in Java, Python, C, and Data Structures & Algorithms',
        'Mentored students across multiple institutes and freelancing platforms',
        'Achieved 4.7/5 average trainer rating through effective teaching methods',
        'Developed customized curriculum based on student learning needs',
        'Provided hands-on coding exercises and real-world project guidance'
      ]
    },
    {
      company: 'Ascends The Skills Hub',
      role: 'Freelance Technical Trainer',
      period: '',
      description: [
        'Conducted training sessions in Java, Python, C, and Data Structures & Algorithms',
        'Mentored students across multiple institutes and freelancing platforms',
        'Achieved 4.7/5 average trainer rating through effective teaching methods',
        'Developed customized curriculum based on student learning needs',
        'Provided hands-on coding exercises and real-world project guidance'
      ]
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Experience
        </h2>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={styles.timelineItem}
            >
              <div className={styles.dot}></div>
              <div className={styles.content}>
                <h3 className={styles.company}>{exp.company}</h3>
                <h4 className={styles.role}>{exp.role}</h4>
                <p className={styles.period}>{exp.period}</p>
                <div className={styles.description}>
                  <ul>
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
