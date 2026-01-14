import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

const TryAppSection = () => {
  return (
    <section id="try-app" className="section-padding bg-secondary/50 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container container-narrow text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-foreground text-background mb-8"
          >
            <Sparkles className="w-7 h-7" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Try the Live Prototype
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            The app is already built and deployed. You can start using it immediately and share feedback to help improve it.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant="hero" asChild className="group shadow-lg hover:shadow-xl transition-shadow">
              <a href="https://durre-cmd.github.io/portcase/" target="_blank" rel="noopener noreferrer">
                Open Portcase App
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm text-muted-foreground mt-6"
          >
            No sign-up required • Feedback appreciated
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default TryAppSection;
