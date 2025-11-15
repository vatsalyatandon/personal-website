import BlogCard from '../BlogCard';
import workspaceImg from '@assets/generated_images/Clean_workspace_desk_scene_f67ba356.png';

export default function BlogCardExample() {
  return (
    <div className="max-w-md">
      <BlogCard
        id="1"
        title="The Art of Minimalist Design in Modern Workspaces"
        excerpt="Exploring how simplicity and thoughtful design create productive environments that inspire creativity and focus."
        author="Sarah Chen"
        date="March 15, 2024"
        readTime="5 min read"
        featuredImage={workspaceImg}
      />
    </div>
  );
}
