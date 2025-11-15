import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { blogPosts } from '@shared/blogData';
import BlogCard from '@/components/BlogCard';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const { data: posts } = useQuery({
    queryKey: ['/api/blog/posts'],
    queryFn: () => Promise.resolve(blogPosts.slice(0, 2)),
  });

  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6 leading-tight" data-testid="text-hero-title">
            Clarity in Thought,
            <br />
            Simplicity in Design
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto" data-testid="text-hero-subtitle">
            A collection of thoughtful essays on minimalism, intentional living, and the art of creating meaningful work in a distracted world.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground" data-testid="text-recent-posts">
              Recent Posts
            </h2>
            <Link href="/blog">
              <Button variant="ghost" className="gap-2" data-testid="button-view-all">
                View all
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts?.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
