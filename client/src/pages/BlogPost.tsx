import { useParams, Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { blogPosts } from '@shared/blogData';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BlogPost() {
  const params = useParams();
  const postId = params.id;

  const { data: post, isLoading } = useQuery({
    queryKey: ['/api/blog/posts', postId],
    queryFn: () => {
      const foundPost = blogPosts.find(p => p.id === postId);
      return Promise.resolve(foundPost);
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-prose mx-auto px-6 lg:px-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-muted rounded w-24"></div>
            <div className="h-12 bg-muted rounded w-full"></div>
            <div className="h-6 bg-muted rounded w-3/4"></div>
            <div className="aspect-video bg-muted rounded"></div>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen py-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-semibold text-foreground mb-4">
            Post not found
          </h1>
          <Link href="/blog">
            <Button variant="ghost" className="gap-2" data-testid="button-back-to-blog">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 md:py-16">
      <article className="max-w-prose mx-auto px-6 lg:px-8">
        <Link href="/blog">
          <Button variant="ghost" className="gap-2 mb-8" data-testid="button-back">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6 leading-tight" data-testid="text-post-title">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground uppercase tracking-wide">
            <div className="flex items-center gap-2" data-testid="text-post-author">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2" data-testid="text-post-date">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2" data-testid="text-post-readtime">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {post.content.paragraphs.map((paragraph, index) => {
            const contentImage = post.content.images?.find(img => img.position === index);
            
            return (
              <div key={index}>
                <p className="text-foreground/90 leading-relaxed mb-6" data-testid={`text-paragraph-${index}`}>
                  {paragraph}
                </p>
                
                {contentImage && (
                  <figure className="my-8 md:my-12" data-testid={`img-content-${index}`}>
                    <img
                      src={contentImage.src}
                      alt={contentImage.caption}
                      className="w-full rounded-md"
                    />
                    <figcaption className="text-sm text-muted-foreground text-center mt-3 italic">
                      {contentImage.caption}
                    </figcaption>
                  </figure>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/blog">
            <Button variant="ghost" className="gap-2" data-testid="button-back-bottom">
              <ArrowLeft className="h-4 w-4" />
              Back to all posts
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}
