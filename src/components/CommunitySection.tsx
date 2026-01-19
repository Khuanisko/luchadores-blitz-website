import { MessageCircle, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  {
    name: "Discord",
    icon: MessageCircle,
    href: "https://discord.gg",
    hoverClass: "hover:bg-discord hover:text-primary-foreground hover:border-discord",
  },
  {
    name: "X",
    icon: Twitter,
    href: "https://x.com",
    hoverClass: "hover:bg-foreground hover:text-background hover:border-foreground",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com",
    hoverClass: "hover:bg-[hsl(0_100%_50%)] hover:text-primary-foreground hover:border-[hsl(0_100%_50%)]",
  },
];

export function CommunitySection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Section header */}
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
          Join the <span className="text-gradient-fire">Community</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
          Connect with fellow luchadores, share strategies, and be the first to know about updates.
        </p>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-16 h-16 rounded-xl border-2 border-border bg-background flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.hoverClass}`}
              aria-label={social.name}
            >
              <social.icon className="w-7 h-7" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
