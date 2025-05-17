
import { CSSProperties } from "react";

export const fadeInUp = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const scaleIn = {
  hidden: {
    scale: 0.9,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const slideIn = (direction: "left" | "right" | "up" | "down", delay: number = 0) => {
  return {
    hidden: {
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
};

export const hoverScale = {
  scale: 1.03,
  transition: { duration: 0.3 },
};

export const hoverElevate = {
  y: -5,
  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  transition: { duration: 0.3 },
};

export const glassCardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export const cardContentClass = "bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100";
export const gradientCardClass = "bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100";
