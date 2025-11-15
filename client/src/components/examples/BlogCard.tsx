import BlogCard from '../BlogCard';

export default function BlogCardExample() {
  return (
    <div className="max-w-2xl">
      <BlogCard
        id="1"
        title="The Art of Minimalist Design in Modern Workspaces"
        date="March 15, 2024"
      />
      <BlogCard
        id="2"
        title="Finding Clarity Through Digital Simplification"
        date="March 8, 2024"
      />
    </div>
  );
}
