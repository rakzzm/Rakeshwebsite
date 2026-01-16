import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '../data';
import styles from './page.module.css';

export const dynamicParams = true;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <article className={styles.articleContainer}>
        <Link href="/blogs" className={styles.backLink}>
          ← Back to Blogs
        </Link>
        
        <header className={styles.articleHeader}>
          <div className={styles.iconWrapper}>{post.icon}</div>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.tags}>
            {post.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div 
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.fullContent }}
        />
      </article>
    </div>
  );
}
