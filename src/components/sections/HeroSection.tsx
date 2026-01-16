import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <div className="container container-narrow text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
         
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] text-balance mb-6"
        >
          Capture Patient History
          <br />
          <span className="relative">
            in Under One Minute
            <motion.svg
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="absolute -bottom-2 left-0 w-full h-3"
              viewBox="0 0 300 12"
              fill="none"
            >
              <motion.path
                d="M2 10C50 4 100 4 150 6C200 8 250 4 298 6"
                stroke="hsl(var(--foreground))"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                style={{ pathLength: 0 }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              />
            </motion.svg>
          </span>
        </motion.h1>
 <br />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto text-balance leading-relaxed"
        >
          A fast, structured clinical notes app built for medical students during ward rounds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
        >
          <Button variant="hero" asChild className="group">
            <a href="https://durre-cmd.github.io/portcase/" target="_blank">
              Try the App Prototype
              <motion.span
                className="inline-block ml-1"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </a>
          </Button>
            <Button variant="heroOutline" asChild>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfUQrYwFATigdV7usB4RbAS2oV_ygQgjlSKVyTuUpzMYrUHUA/viewform?usp=sharing" target="_blank" >Join the Early Access List</a>
          </Button>
        
         
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-sm text-muted-foreground"
        >
          Live prototype • Educational use only
        </motion.p>
      </div>

     
    </section>
  );
};

export default HeroSection;
