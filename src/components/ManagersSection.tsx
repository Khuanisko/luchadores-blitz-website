interface ManagerCardProps {
  name: string;
  title: string;
  description: string;
  imageUrl?: string;
}

function ManagerCard({ name, title, description, imageUrl }: ManagerCardProps) {
  return (
    <div className="group relative bg-card rounded-xl p-6 shadow-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Avatar placeholder */}
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted border-2 border-primary/30 flex items-center justify-center overflow-hidden">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="font-display text-3xl text-primary">{name[0]}</span>
          )}
        </div>

        {/* Name and title */}
        <h3 className="font-display text-2xl text-foreground text-center mb-1">
          {name}
        </h3>
        <p className="text-primary text-sm text-center font-medium mb-3">
          {title}
        </p>

        {/* Description */}
        <p className="text-muted-foreground text-center text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

const managers = [
  {
    name: "David King",
    title: "The Underdog's Champion",
    description: "A passionate manager who believes in the power of heart over raw strength. Specializes in turning underdogs into legends.",
  },
  {
    name: "The Promoter",
    title: "Master of Spectacle",
    description: "Every match is a show, every fighter a star. The Promoter knows how to make crowds roar and champions rise.",
  },
  {
    name: "Don Casino",
    title: "The High Roller",
    description: "Fortune favors the bold - and those who know when to bet big. Don Casino turns every fight into a jackpot opportunity.",
  },
];

export function ManagersSection() {
  return (
    <section className="py-24 bg-background relative">
      {/* Section decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
            Meet the <span className="text-gradient-gold">Managers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose your path to glory. Each manager brings a unique strategy to dominate the arena.
          </p>
        </div>

        {/* Manager cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {managers.map((manager) => (
            <ManagerCard
              key={manager.name}
              name={manager.name}
              title={manager.title}
              description={manager.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
