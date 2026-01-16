import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "For Students", href: "#for-students" },
    { name: "Ethics", href: "#ethics" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
    
    // Update URL hash without jumping
    window.history.pushState(null, '', href);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="font-bold text-xl text-foreground tracking-tight">
          Portcase
        </a>

        {/* Navigation - One line on bigger screens */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="default" size="sm" asChild>
           <a href="https://durre-cmd.github.io/portcase/" target="_blank">
              Try App Prototype For Free
            </a>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;