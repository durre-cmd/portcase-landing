import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-secondary/50 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="container container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
         

          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground bg-secondary rounded-full border border-border">
            The Solution
          </span>
        
          <br></br>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
           A Simple Tool Built Only for Students
          </h2>
<br></br>
          <div className="space-y-6 text-left max-w-xl mx-auto">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed pl-6 border-l-2 border-foreground"
            >
              Portcase helps medical students capture essential patient history quickly using a <span className="text-foreground font-medium">structured clinical template</span>.
            </motion.p>
            <br></br>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground leading-relaxed pl-6 border-l-2 border-border"
            >
              It is designed purely as an <span className="text-foreground font-medium">educational tool</span> and does not replace hospital records or medical systems.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
