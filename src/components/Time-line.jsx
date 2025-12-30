import React from "react";
import { HiBriefcase, HiAcademicCap } from "react-icons/hi2";
import { motion } from "framer-motion";

const TimelineItem = ({ item, type, index, isLast }) => {
  const isExperience = type === "experience";

  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative pl-8 pb-8"
    >
      {/* Vertical Line */}
      {!isLast && (
        <div className="absolute left-[11px] top-10 w-px h-[calc(100%-20px)] bg-gradient-to-b from-base-700 to-transparent" />
      )}

      {/* Timeline Dot */}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-base-900 border border-base-700 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-accent" />
      </div>

      {/* Card */}
      <div className="glass p-5 hover:border-base-700/50 transition-all duration-300 group">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-accent text-sm">
              {isExperience ? <HiBriefcase /> : <HiAcademicCap />}
            </span>
            <h4 className="font-display font-medium text-white group-hover:text-accent transition-colors">
              {item?.title}
            </h4>
          </div>
          <span className="text-xs text-base-500">
            {isExperience ? (
              <>
                {item?.from} — {item?.to}
              </>
            ) : (
              item?.to || item?.from
            )}
          </span>
        </div>

        {/* Company & Location */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
          <span className="text-base-300 text-sm font-medium">{item?.company}</span>
          {item?.location && (
            <span className="text-base-500 text-xs">📍 {item?.location}</span>
          )}
        </div>

        {/* Description */}
        {item?.description && (
          <p className="text-base-500 text-sm leading-relaxed">{item?.description}</p>
        )}
      </div>
    </motion.div>
  );
};

function TimeLine({ data, type }) {
  return (
    <div className="max-w-2xl mx-auto">
      {data?.map((item, index) => (
        <TimelineItem
          key={index}
          item={item}
          type={type}
          index={index}
          isLast={index === data.length - 1}
        />
      ))}
    </div>
  );
}

export default TimeLine;
