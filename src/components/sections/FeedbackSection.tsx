import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FeedbackSection = () => {
  return (
    <section id="early-access" className="py-16 md:py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block mb-3 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-secondary rounded-full border border-border">
            Feedback
          </span>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
            Help Shape Portcase
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            Your input directly influences our roadmap.
          </p>
        </motion.div>

        {/* Centered Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="hero" 
            asChild 
            className="px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all"
          >
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfUQrYwFATigdV7usB4RbAS2oV_ygQgjlSKVyTuUpzMYrUHUA/viewform?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              
            >
              Share Your Thoughts
              <motion.span
                className="inline-block ml-1"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeedbackSection;