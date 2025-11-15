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
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground" data-testid="text-recent-posts">
            All Posts
          </h2>
          <div style={{color: 'red', fontWeight: 'bold'}}>DEBUG: Home page rendered</div>
        </div>

        <div>
          {posts?.map((post) => (
            <BlogCard 
              key={post.id} 
              id={post.id}
              title={post.title}
              date={post.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
