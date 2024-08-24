import { type FC } from 'react'
import { motion, useScroll } from 'framer-motion'

interface ScrollProgressBarProps {}

const ScrollProgressBar: FC<ScrollProgressBarProps> = () => {
  const { scrollYProgress } = useScroll()

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <motion.div
        className="h-1 bg-accent shadow-accent/20 shadow-md origin-left"
        style={{ scaleX: scrollYProgress }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  )
}

export default ScrollProgressBar
