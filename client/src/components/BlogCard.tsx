import { Link } from 'wouter';
import { Calendar, Clock, User } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  featuredImage: string;
}

export default function BlogCard({
  id,
  title,
  excerpt,
  author,
  date,
  readTime,
  featuredImage
}: BlogCardProps) {
  return (
    <Link href={`/blog/${id}`} data-testid={`link-blog-${id}`}>
      <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer group h-full flex flex-col">
        <div className="aspect-video overflow-hidden">
          <img
            src={featuredImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-testid={`img-blog-${id}`}
          />
        </div>

        <div className="p-6 flex flex-col flex-1 gap-4">
          <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-wide">
            <div className="flex items-center gap-1.5" data-testid={`text-date-${id}`}>
              <Calendar className="h-3.5 w-3.5" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1.5" data-testid={`text-readtime-${id}`}>
              <Clock className="h-3.5 w-3.5" />
              <span>{readTime}</span>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-3 leading-tight" data-testid={`text-title-${id}`}>
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed" data-testid={`text-excerpt-${id}`}>
              {excerpt}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t border-border" data-testid={`text-author-${id}`}>
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
