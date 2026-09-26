import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { profile } from "../data/profile";

export default function DownloadCVButton() {
  return (
    <motion.a
      href={profile.cvUrl}
      download
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Download CV"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-violet px-5 py-3 text-sm font-medium text-white shadow-lg shadow-accent-blue/20 transition-shadow hover:shadow-accent-violet/30 focus-visible:outline-none"
    >
      <Download size={18} aria-hidden="true" />
      {/* Teks disembunyikan di layar sangat kecil supaya tombol tetap ringkas,
          tapi tetap bisa dibaca screen reader lewat aria-label di atas. */}
      <span className="hidden sm:inline">Download CV</span>
    </motion.a>
  );
}