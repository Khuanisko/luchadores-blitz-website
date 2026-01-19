import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const navItems = [
  { label: "Home", href: "#", active: true },
  { label: "Fighters", href: "#fighters", active: false },
  { label: "FAQ", href: "#faq", active: false },
  { label: "Alpha", href: "#alpha", active: false },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl tracking-wide text-gradient-fire">
              LUCHADORES BLITZ
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="nav"
                size="sm"
                className={item.active ? "text-primary" : ""}
                asChild
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </nav>
        </div>

        {/* Discord Button */}
        <Button variant="discord" size="sm" className="gap-2" asChild>
          <a href="https://discord.gg" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Discord</span>
          </a>
        </Button>
      </div>
    </header>
  );
}
