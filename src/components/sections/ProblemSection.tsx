import { motion } from "framer-motion";
import { Clock, FileX, Layout, Building2 } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Too Fast",
      description: "Ward rounds move too fast for detailed notes"
    },
    {
      icon: FileX,
      title: "Easily Lost",
      description: "Paper notes are easily lost or forgotten"
    },
    {
      icon: Layout,
      title: "No Structure",
      description: "General note apps lack clinical structure"
    },
    {
      icon: Building2,
      title: "Too Complex",
      description: "Hospital systems are too complex for students"
    },
  ];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground bg-background rounded-full border border-border">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Every Day, Medical Students Face This
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Medical students are expected to observe patients, take histories, and recall cases — often under severe time pressure.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-2xl bg-background border border-border hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4 p-3 rounded-xl bg-secondary w-fit group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                <problem.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
