import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.a
            href="/"
            className="inline-block text-2xl font-bold text-foreground mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Portcase
          </motion.a>

          <p className="text-muted-foreground mb-2">
            Built by students, for students.
          </p>
          <p className="text-sm text-muted-foreground">
            Educational tool only. Not a medical record system.
          </p>

      

          <p className="text-xs text-muted-foreground/60 mt-8">
            © {new Date().getFullYear()} Portcase. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
