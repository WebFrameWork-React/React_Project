// ScrollSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImageList from './ImageList' ;
import ScrollHint from './ScrollHint'; // Import ScrollHint

const ScrollSection = ({ title, description, images, isLastSection }) => {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  return (
    <div
      ref={ref}
      style={{
        height: '100vh',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {title === '나만의 휴가 일정 계획하기' && (
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 1,
        }}>
          <img src="/images/tree.png" alt="Tree" style={{
            width: '50px',
            height: 'auto',
          }} />
        </div>
      )}
      <motion.span
        initial={{ opacity: 0.1 }}
        animate={inView ? { opacity: 1 } : { opacity: 0.1 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '20px',
        }}
      >
        {title}
      </motion.span>
      <motion.p
        initial={{ opacity: 0.1 }}
        animate={inView ? { opacity: 1 } : { opacity: 0.1 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '1.5rem',
          color: '#666',
          textAlign: 'center',
          maxWidth: '600px',
          marginBottom: '20px',
        }}
      >
        {description}
      </motion.p>
      <ImageList images={images} title={title} /> {/* Use ImageList */}
      <ScrollHint isLastSection={isLastSection} /> {/* Use ScrollHint */}
    </div>
  );
};

export default ScrollSection;
