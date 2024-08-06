import { motion, AnimatePresence } from "framer-motion";
export default function Judgement({ judgement }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        enter={{ opacity: 0 }}
      >
        <p className="judgement">{judgement}</p>
      </motion.div>
    </AnimatePresence>
  );
}
