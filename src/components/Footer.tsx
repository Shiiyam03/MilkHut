import { Factory, Milk } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Meat Division", id: "meat-division" },
    { label: "Dairy Division", id: "dairy-division" },
    { label: "Vision & Mission", id: "vision-mission" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">BARAK MILKHUT</h3>
            <p className="text-primary-foreground/80 mb-4">
              Integrated Meat & Dairy Processing Excellence in Tamil Nadu
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <Factory className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <Milk className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Tamil Nadu, India</li>
              <li>info@barakmilkhut.com</li>
              <li>+91 XXXXX XXXXX</li>
              {/* EDIT: Update contact information */}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} BARAK MILKHUT. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-xs mt-2">
            In collaboration with Tamil Nadu Livestock Development Corporation (TNLDC)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
