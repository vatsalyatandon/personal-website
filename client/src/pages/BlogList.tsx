import { useQuery } from '@tanstack/react-query';
import { blogPosts } from '@shared/blogData';
import BlogCard from '@/components/BlogCard';

export default function BlogList() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['/api/blog/posts'],
    queryFn: () => Promise.resolve(blogPosts),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-48"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-96 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4" data-testid="text-blog-title">
            All Posts
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="text-blog-subtitle">
            Thoughts on design, creativity, and intentional living
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts?.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
