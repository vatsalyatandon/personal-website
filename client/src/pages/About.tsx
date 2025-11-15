export default function About() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <article className="max-w-prose mx-auto px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-8" data-testid="text-about-title">
          About Clarity
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground/90 leading-relaxed">
          <p className="text-lg" data-testid="text-about-intro">
            In a world overwhelmed by noise, complexity, and constant demands on our attention, Clarity exists as a quiet space for thoughtful reflection on what truly matters.
          </p>

          <p>
            This blog explores the intersection of minimalist design, intentional living, and creative work. Each essay is crafted with care, focusing on depth over frequency, quality over quantity. The goal isn't to add more content to the internet—it's to create something worth your time.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mt-12 mb-4">
            Our Philosophy
          </h2>

          <p>
            We believe that the most profound ideas are often the simplest. That elegance emerges from restraint. That white space is not empty, but full of possibility. These principles guide not just our writing, but the design of this site itself.
          </p>

          <p>
            Every word is considered. Every element has purpose. Every design decision asks: does this serve the reader, or does it serve itself? In choosing the former, we create space for ideas to breathe and thoughts to develop.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mt-12 mb-4">
            The Writers
          </h2>

          <p>
            Clarity is written by Sarah Chen and Marcus Thompson, two designers and thinkers who share a commitment to intentional work and mindful living. Sarah brings a background in architectural design and spatial thinking. Marcus approaches questions of technology and human experience through the lens of systems design.
          </p>

          <p>
            Together, they explore how we can create work that matters, environments that support our best thinking, and lives that reflect our deepest values. Their writing draws on research, personal experience, and the wisdom of others who have walked similar paths.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mt-12 mb-4">
            Get in Touch
          </h2>

          <p>
            We'd love to hear from you. Whether you have thoughts on an essay, questions about our approach, or simply want to connect, reach out via email at{' '}
            <a
              href="mailto:hello@clarity.blog"
              className="text-primary hover:underline"
              data-testid="link-about-email"
            >
              hello@clarity.blog
            </a>
            .
          </p>

          <p className="text-muted-foreground italic mt-8 pt-8 border-t border-border">
            Thank you for being here. Your attention is precious, and we don't take it for granted.
          </p>
        </div>
      </article>
    </div>
  );
}
