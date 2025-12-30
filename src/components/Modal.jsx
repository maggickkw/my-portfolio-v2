import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiCheckCircle, HiXMark } from "react-icons/hi2";

function Modal({ name, handleClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-base-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="glass p-8 max-w-sm w-full relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-base-500 hover:text-white transition-colors"
          >
            <HiXMark className="text-xl" />
          </button>

          {/* Content */}
          <div className="text-center">
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", damping: 15 }}
              className="w-16 h-16 mx-auto mb-5 rounded-full bg-accent/10 flex items-center justify-center"
            >
              <HiCheckCircle className="text-4xl text-accent" />
            </motion.div>

            <h3 className="text-xl font-display font-semibold text-white mb-2">
              Message Sent
            </h3>

            <div className="text-base-400 space-y-2 text-sm">
              <p>
                Thanks <span className="text-accent font-medium">{name}</span>,
              </p>
              <p className="leading-relaxed">
                I'll get back to you as soon as possible.
              </p>
            </div>

            <button
              onClick={handleClose}
              className="btn-primary mt-6"
            >
              Got it
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Modal;
