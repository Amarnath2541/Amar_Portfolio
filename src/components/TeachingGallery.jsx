import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import styles from './TeachingGallery.module.css';

const TeachingGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const teachingImages = [
    { src: '/images/teach1.jpeg' },
    { src: '/images/teach2.jpeg' },
    { src: '/images/teach3.jpeg' },
    { src: '/images/teach4.jpeg' },
    { src: '/images/teach5.jpg' },
    { src: '/images/teach6.jpg' },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="teaching" className={styles.teaching}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className={styles.header} variants={itemVariants}>
          <h2 className={styles.title}>Teaching & Mentorship Impact</h2>
          <div className={styles.badge}>
            ⭐ 4.7/5 Average Trainer Rating
          </div>
        </motion.div>

        <motion.p className={styles.description} variants={itemVariants}>
          As a passionate Technical Trainer and DSA Mentor, I have trained students across multiple institutes and freelancing platforms. My expertise spans Java, Python, C, and Data Structures & Algorithms, helping students build strong foundations in programming and problem-solving.
        </motion.p>

        <motion.div className={styles.gallery} variants={itemVariants}>
          {teachingImages.map((image, index) => (
            <motion.div
              key={index}
              className={styles.imageCard}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal(image)}
            >
              <div className={styles.imageWrapper}>
                <img src={image.src} alt="Teaching image" className={styles.image} />
                <div className={styles.overlay}>
                  <span className={styles.viewText}>Click to view</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Modal
        isOpen={!!selectedImage}
        onClose={closeModal}
        image={selectedImage?.src}
        caption=""
      />
    </section>
  );
};

export default TeachingGallery;
