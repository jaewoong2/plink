import React from 'react'
import { Variants, motion } from 'framer-motion'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
  }),
}

// Variants for each letter
const child = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
  hidden: {
    opacity: 0,
    x: -20,
    y: 10,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
}

const TextAnimation = ({ text }: { text: string }) => {
  // splitting text into letters
  const letters = Array.from(text)

  // Variants for Container

  return (
    <motion.div variants={container} initial='hidden' animate='visible' className='relative flex'>
      <div className='absolute -left-3 top-3 z-0'>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={{ ...child }}
            className='font-sans text-primary-400 text-opacity-50 underline underline-offset-2'
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>
      <div className='z-10'>
        {letters.map((letter, index) => (
          <motion.span variants={child} key={index} className='font-sans text-primary-800 underline underline-offset-2'>
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>
      <div className='absolute -top-3 left-3 z-0'>
        {letters.map((letter, index) => (
          <motion.span
            variants={{ ...child, exit: { opacity: 0, y: -20, transition: { duration: 0.5 } } }}
            key={index}
            className='font-sans text-primary-900 text-opacity-50 underline underline-offset-2'
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default TextAnimation
