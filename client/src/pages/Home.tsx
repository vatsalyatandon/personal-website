import { useQuery } from '@tanstack/react-query';
import { blogPosts } from '@shared/blogData';
import BlogCard from '@/components/BlogCard';

export default function Home() {
  const { data: posts } = useQuery({
    queryKey: ['/api/blog/posts'],
    queryFn: () => Promise.resolve(blogPosts),
  });

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground" data-testid="text-recent-posts">
            All Posts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts?.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
