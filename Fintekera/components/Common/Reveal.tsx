import React from "react";
import { motion } from "framer-motion";

const Reveal = ({ children, y }: { children: React.ReactNode; y: number }) => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: y,
        },

        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
