import { Link } from 'wouter';

interface BlogCardProps {
  id: string;
  title: string;
  date: string;
}

export default function BlogCard({
  id,
  title,
  date
}: BlogCardProps) {
  return (
    <Link href={`/post/${id}`} data-testid={`link-blog-${id}`}>
      <div className="hover-elevate active-elevate-2 transition-all duration-200 cursor-pointer group py-6 border-b border-border">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
          <h3 className="text-lg md:text-xl font-serif font-semibold text-foreground leading-tight" data-testid={`text-title-${id}`}>
            {title}
          </h3>
          <span className="text-sm text-muted-foreground whitespace-nowrap" data-testid={`text-date-${id}`}>
            {date}
          </span>
        </div>
      </div>
    </Link>
  );
}
