// ImageList.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ImageList = ({ images, title }) => {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  return (
    <div ref={ref} style={{ display: 'flex', justifyContent: 'center' }}>
      {images.map((image, index) => {
        let width, maxWidth;
        // 조건에 따라 이미지 크기 조정
        if (image.includes('.gif')) {
          width = '40%';
          maxWidth = '300px';
        } else if (image.includes('2.png') || image.includes('3.png') || image.includes('4.png')) {
          width = '120%';  
          maxWidth = '1200px'; 
        } else {
          width = '80%';
          maxWidth = '750px';
        }

        return (
          <motion.img
            key={index}
            src={image}
            alt={title}
            initial={{ opacity: 0.1 }}
            animate={inView ? { opacity: 1 } : { opacity: 0.1 }}
            transition={{ duration: 0.8 }}
            style={{
              width: width,
              maxWidth: maxWidth,
              borderRadius: '20px',
              margin: '0 25px',
            }}
          />
        );
      })}
    </div>
  );
};

export default ImageList;
