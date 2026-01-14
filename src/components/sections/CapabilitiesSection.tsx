import { motion } from "framer-motion";
import { FileText, LayoutTemplate, Search, Download } from "lucide-react";

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: FileText,
      title: "Single Screen Entry",
      description: "Add a complete patient case on a single screen"
    },
    {
      icon: LayoutTemplate,
      title: "Clinical Templates",
      description: "Use a structured clinical history template"
    },
    {
      icon: Search,
      title: "Quick Search",
      description: "Instantly search and review past cases"
    },
    {
      icon: Download,
      title: "PDF Export",
      description: "Export cases as PDF for revision"
    },
  ];

  return (
    // ADDED id="features" and scroll-mt-20 for smooth navigation
    <section id="features" className="py-20 md:py-32 bg-foreground text-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground bg-background/10 rounded-full">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What You Can Do
          </h2>
          <p className="text-background/60 text-lg max-w-xl mx-auto">
            Everything you need to capture and organize clinical notes efficiently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 hover:border-background/20 transition-all duration-300"
            >
              <div className="flex flex-col items-start gap-4 h-full">
                <div className="p-2.5 rounded-xl bg-background/10 group-hover:bg-background group-hover:text-foreground transition-colors duration-300">
                  <capability.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{capability.title}</h3>
                  <p className="text-sm text-background/60 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;