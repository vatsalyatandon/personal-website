import BlogPost from '../../pages/BlogPost';
import { Route } from 'wouter';

export default function BlogPostExample() {
  return (
    <Route path="/blog/:id">
      <BlogPost />
    </Route>
  );
}
