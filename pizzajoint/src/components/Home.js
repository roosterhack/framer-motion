import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader } from "./Loader";

export const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0 0 8px rgb(255 255 255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.8,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      animate="visible"
      initial="hidden"
      exit="exit"
      variants={containerVariants}
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button whileHover="hover" variants={buttonVariants}>
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
