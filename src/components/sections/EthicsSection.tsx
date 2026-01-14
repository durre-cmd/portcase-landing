import { motion } from "framer-motion";
import { UserX, GraduationCap, Stethoscope, Shield } from "lucide-react";

const EthicsSection = () => {
  const principles = [
    {
      icon: UserX,
      text: "No patient names required"
    },
    {
      icon: GraduationCap,
      text: "Educational use only"
    },
    {
      icon: Stethoscope,
      text: "No diagnosis or treatment decisions"
    },
    {
      icon: Shield,
      text: "Clear medical disclaimer included"
    },
  ];

  return (
    // Added id="ethics" for the navigation link and scroll-margin for spacing
    <section id="ethics" className="py-24 md:py-32 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground bg-background rounded-full border border-border">
            Trust & Safety
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Ethics & Privacy First
          </h2>
        </motion.div>

        {/* Updated grid to grid-cols-4 for desktop single-line layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              // Changed to flex-col and items-center to center the icon over the text
              className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl bg-background border border-border hover:shadow-md transition-shadow"
            >
              <div className="p-3 rounded-full bg-secondary text-muted-foreground">
                <principle.icon className="w-6 h-6" />
              </div>
              <span className="text-sm md:text-base font-medium text-foreground leading-snug">
                {principle.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EthicsSection;