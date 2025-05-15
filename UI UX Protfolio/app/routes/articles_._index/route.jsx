import { baseMeta } from '~/utils/meta';
import { getPosts } from './posts.server';
import { json } from '@remix-run/cloudflare';

export async function loader() {
  const allPosts = await getPosts();
  const featured = allPosts.find(post => post.frontmatter.featured);
  const posts = allPosts.filter(post => featured?.slug !== post.slug);

  return json({ posts, featured });
}

export function meta() {
  return baseMeta({
    title: 'Portfolio',
    description: 'Education, experience, and projects showcased here.',
  });
}

export { Articles as default } from './articles';