import { useState, useEffect, type FC } from 'react'
import { motion } from 'framer-motion'

interface ScrollProgressBarProps {}

const ScrollProgressBar: FC<ScrollProgressBarProps> = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollTop = window.scrollY
      const scrollFraction = scrollTop / totalScrollHeight
      setScrollProgress(scrollFraction * 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <motion.div
        className="h-1 bg-accent"
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.2 }}
      />
    </div>
  )
}

export default ScrollProgressBar
