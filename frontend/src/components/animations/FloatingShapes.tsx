'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type FloatingImageProps = {
  src: string;
  className?: string;
  top: string;
  left: string;
  width: number;
  height: number;
  delay?: number;
};

const FloatingImage: React.FC<FloatingImageProps> = ({
  src,
  className,
  top,
  left,
  width,
  height,
  delay = 0,
}) => {
  return (
    <motion.div
      className={`absolute ${className || ''}`}
      style={{ top, left, width, height }}
      initial={{ y: 0 }}
      animate={{ y: [0, -12, 12, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        draggable={false}
        priority
      />
    </motion.div>
  );
};

const FloatingShapes = () => {
  return (
    <div className="relative w-full h-[600px]">
      {/* Pills (Large) */}
      <FloatingImage
        src="/pill-purple.png"
        top="2%"
        left="30%"
        width={400}
        height={400}
        delay={0}
      />
      <FloatingImage
        src="/pill-blue.png"
        top="5%"
        left="90%"
        width={250}
        height={250}
        delay={0.3}
      />
      <FloatingImage
        src="/pill-red.png"
        top="30%"
        left="85%"
        width={400}
        height={400}
        delay={0.6}
      />
      <FloatingImage
        src="/pill-yellow.png"
        top="60%"
        left="60%"
        width={180}
        height={180}
        delay={0.9}
      />

      {/* Circles / Ellipses (Small) */}
      <FloatingImage
        src="/purple.png"
        top="5%"
        left="10%"
        width={60}
        height={60}
        delay={0.1}
      />
      <FloatingImage
        src="/blue.png"
        top="20%"
        left="80%"
        width={40}
        height={40}
        delay={0.4}
      />
      <FloatingImage
        src="/yellow.png"
        top="50%"
        left="50%"
        width={45}
        height={45}
        delay={0.7}
      />
      <FloatingImage
        src="/purple.png"
        top="75%"
        left="70%"
        width={40}
        height={40}
        delay={1.2}
      />
    </div>
  );
};

export default FloatingShapes;
