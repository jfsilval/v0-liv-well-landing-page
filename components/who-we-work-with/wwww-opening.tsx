export function WwwwOpening() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header - matching project standard */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              The Right <span className="text-primary">Partner</span>
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
            </div>
            <p className="text-base text-muted-foreground">
              We built our business around organisations like yours
            </p>
          </div>

          {/* Body copy */}
          <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
            <p>
              Procurement is never just a transaction. Behind every purchase order is a population relying on someone to
              get it right — to source the right product, at the right quality, with the confidence that what arrives is
              exactly what was promised, and delivered before the need becomes a crisis.
            </p>
            <p>
              That is the world our partners operate in every day. And it is the world Liv Well Pharmaceuticals was
              designed to serve. We understand the pressures that come with managing pharmaceutical supply chains in
              complex, fast-moving environments — because we have been navigating them alongside our partners for years.
            </p>
            <p>
              Whether you represent a government health authority, a private distributor, or an international
              organisation, if your work involves ensuring access to quality pharmaceutical products for the people who
              need them, you are exactly who we built this company for.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
