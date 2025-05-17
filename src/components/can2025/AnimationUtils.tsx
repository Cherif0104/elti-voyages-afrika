
import { CSSProperties } from "react";

// Animations d'entrée
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

export const fadeInDown = {
  hidden: {
    y: -50,
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

export const fadeInLeft = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export const fadeInRight = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

// Conteneurs séquentiels
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const staggerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const staggerSlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

// Animations de mise à l'échelle
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

export const scaleInFast = {
  hidden: {
    scale: 0.95,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const popIn = {
  hidden: {
    scale: 0.85,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 25,
    },
  },
};

// Animations de glissement
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

// Animations au survol
export const hoverScale = {
  scale: 1.03,
  transition: { duration: 0.3 },
};

export const hoverScaleSmall = {
  scale: 1.015,
  transition: { duration: 0.2 },
};

export const hoverElevate = {
  y: -5,
  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  transition: { duration: 0.3 },
};

export const hoverElevateSmall = {
  y: -3,
  boxShadow: "0 6px 12px rgba(0,0,0,0.08)",
  transition: { duration: 0.2 },
};

export const hoverRotate = {
  rotate: 5,
  transition: { duration: 0.3 },
};

export const hoverBounce = {
  y: [0, -8, 0],
  transition: { 
    duration: 0.6, 
    times: [0, 0.5, 1],
    repeat: 0
  },
};

// Variants pour différents types de composants
export const glassCardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

export const iconVariants = {
  rest: { rotate: 0 },
  hover: { rotate: 15, transition: { duration: 0.3, type: "spring" } },
};

// Animations de scroll et d'apparition progressive
export const scrollReveal = {
  hidden: { opacity: 0, y: 75 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Animations pour texte
export const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    }
  }
};

export const letterReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  }
};

export const sentenceReveal = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    }
  }
};

// Classes CSS utilitaires
export const cardContentClass = "bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100";
export const gradientCardClass = "bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100";
export const glassCardClass = "backdrop-blur-md bg-white/80 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-white/20";
export const primaryCardClass = "bg-primary/5 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-primary/10";

// Effets de parallaxe
export const parallaxEffect = (strength: number = 0.1) => ({
  initial: {},
  animate: {
    y: [`${-strength * 10}%`, `${strength * 10}%`],
    transition: {
      repeat: Infinity,
      repeatType: "mirror" as const,
      duration: 10,
      ease: "easeInOut",
    },
  },
});
