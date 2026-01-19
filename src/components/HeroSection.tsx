import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      {/* Decorative elements */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
          The Main Event is{" "}
          <span className="text-gradient-fire">Almost Here!</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto mb-10 leading-relaxed">
          Assemble the ultimate squad. Unleash powerful combos. Dominate the arena.
          Step into the world's most explosive lucha autobattler and blitz your way
          to championship glory.
        </p>

        <Button variant="hero" size="xl" className="animate-pulse-glow">
          Alpha SOON!
        </Button>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
