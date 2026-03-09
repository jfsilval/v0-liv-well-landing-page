export function AboutPurpose() {
  return (
    <section className="py-24 bg-[#0a2351] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              Our <span className="text-secondary">Purpose</span>
            </h2>
            <div className="flex justify-center mb-6" aria-hidden="true">
              <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
            </div>
            <p className="text-lg text-white/70">What drives us forward</p>
          </div>

          {/* Pull quote */}
          <div className="mb-16 py-10 px-8 border-l-4 border-secondary bg-white/5 rounded-r-lg">
            <p className="text-2xl md:text-3xl font-light text-white leading-relaxed text-balance italic">
              {'"'}To make high-quality, affordable medicines available to the people who need them most — wherever
              they may be.{'"'}
            </p>
          </div>

          {/* Body paragraphs */}
          <div className="space-y-6 max-w-4xl">
            <p className="text-lg text-white/80 leading-relaxed">
              At Liv Well Pharmaceuticals, our purpose is not a statement on a wall. It is the lens through which we
              evaluate every decision we make — from the products we develop to the partners we choose to work with.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              We work closely with healthcare institutions, government bodies, and private sector partners to bridge the
              gap between pharmaceutical excellence and real-world access. We don{"'"}t just supply medicines — we build
              lasting partnerships rooted in trust, transparency, and a shared commitment to better health outcomes.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Our vision is to be a globally recognised leader in accessible generic pharmaceuticals — a company that
              sets the standard not only for product quality, but for the integrity and reliability with which we
              operate. Hand-in-hand with our partners, we are making world-class medicines a reality for more
              communities every year.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
