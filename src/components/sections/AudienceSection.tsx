import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, Users, BookOpen } from "lucide-react";

const AudienceSection = () => {
  const audiences = [
    {
      icon: GraduationCap,
      label: "MBBS / BDS students"
    },
    {
      icon: Stethoscope,
      label: "Clinical year rotations"
    },
    {
      icon: Users,
      label: "Ward rounds & case discussions"
    },
    {
      icon: BookOpen,
      label: "OSCE and exam preparation"
    },
  ];

  return (
    // 1. Added id="for-students" so the header link works
    // 2. Added scroll-mt-20 so the sticky header doesn't overlap the title
    // 3. Increased padding to py-24/32 for a "bigger" look
    <section id="for-students" className="py-24 md:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground bg-secondary rounded-full border border-border">
            For Students
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Who Portcase Is For
          </h2>
        </motion.div>

        {/* - grid-cols-1: stacked on mobile
            - sm:grid-cols-2: 2x2 on small tablets
            - lg:grid-cols-4: All on one line for bigger screens
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              // Larger padding (py-12) and rounded corners (rounded-3xl) for a premium feel
              className="group flex flex-col items-center text-center gap-6 p-8 py-12 rounded-3xl bg-secondary/40 border border-border hover:border-foreground/20 hover:bg-secondary transition-all duration-300 cursor-default"
            >
              <div className="p-4 rounded-2xl bg-background shadow-sm border border-border group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                <audience.icon className="w-8 h-8 text-foreground" />
              </div>
              <span className="text-base md:text-lg font-semibold text-foreground leading-tight px-2">
                {audience.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;