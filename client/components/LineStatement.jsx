import { AnimatePresence, motion } from "framer-motion";

import getLineName from "../utils/getLineName.js";

export default function LineStatement({ type, selectedLine, statement }) {
  return (
    <AnimatePresence>
      <motion.div
        key={selectedLine}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="line-index text-center font-bold mb-0 md:mb-4 lg:mb-8">
          {getLineName(selectedLine, type)}
        </h3>
        <p className="line-statement mt-0">{statement}</p>
      </motion.div>
    </AnimatePresence>
  );
}
