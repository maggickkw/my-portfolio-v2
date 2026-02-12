import React from "react";
import { motion } from "framer-motion";

const TimelineItem = ({ item, type, index }) => {
  const isExperience = type === "experience";
  let dateLabel = "";
  if (isExperience) {
    dateLabel = `${item?.from} — ${item?.to}`;
  } else {
    if (item?.from && item?.to) {
      dateLabel = `${item.from} — ${item.to}`;
    } else {
      dateLabel = item?.to || item?.from || "";
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-1 sm:gap-6 p-4 sm:p-5 -mx-4 sm:-mx-5 rounded-lg hover:bg-base-850/50 transition-all duration-200 cursor-default"
    >
      <div className="text-xs font-mono text-base-500 uppercase tracking-wide sm:pt-1 mb-1 sm:mb-0 whitespace-nowrap">
        {dateLabel}
      </div>
      <div>
        <h4 className="font-display font-medium text-base-200 group-hover:text-accent transition-colors text-[15px] leading-snug">
          {item?.title}
          <span className="text-accent"> · </span>
          <span className="text-accent/80 text-sm font-body">
            {item?.company}
          </span>
        </h4>

        {item?.location && (
          <p className="text-xs text-base-500 mt-1.5">{item.location}</p>
        )}

        {item?.description && (
          <p className="text-sm text-base-400 leading-relaxed mt-2">
            {item.description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

function TimeLine({ data, type }) {
  return (
    <div className="max-w-3xl">
      {data?.map((item, index) => (
        <TimelineItem
          key={index}
          item={item}
          type={type}
          index={index}
        />
      ))}
    </div>
  );
}

export default TimeLine;
