import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

// Judul section yang konsisten dipakai di About, Skills, dan Projects.
// Garis gradient kecil di bawah judul menjadi penanda visual section baru,
// bukan sekadar dekorasi.
export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-12"
    >
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-100">
        {title}
      </h2>
      <span className="mt-3 block h-[3px] w-14 rounded-full accent-underline" />
      {subtitle && (
        <p className="mt-4 max-w-xl text-ink-400 text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
