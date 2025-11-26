import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 animate-fade-in">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
          
          <div className="glass-card p-8 md:p-12 rounded-3xl animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:shaili@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                  shaili@example.com
                </a>
              </div>
              
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-secondary transition-colors">
                  +91 (123) 456-7890
                </a>
              </div>
              
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">
                  India
                </p>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="text-muted-foreground">
              © 2024 Shaili Chaudhary. Crafted with passion and code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
