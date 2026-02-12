import React from "react";
import { HiCheckCircle, HiXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

function Modal({ name, handleClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
      >
        <div
          className="absolute inset-0 bg-base-950/80 backdrop-blur-sm"
          onClick={handleClose}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative bg-base-900 border border-base-800 rounded-lg p-8 max-w-sm w-full text-center"
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-base-500 hover:text-base-300 transition-colors"
          >
            <HiXMark className="text-xl" />
          </button>
          <div className="flex justify-center mb-4">
            <HiCheckCircle className="text-5xl text-accent" />
          </div>

          <h3 className="font-display font-semibold text-xl text-base-200 mb-2">
            Message Sent
          </h3>

          <p className="text-base-400 text-sm leading-relaxed">
            Thanks{name ? `, ${name}` : ""}! I'll get back to you as soon as
            possible.
          </p>

          <button
            onClick={handleClose}
            className="btn-primary mt-6 text-xs"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Modal;
