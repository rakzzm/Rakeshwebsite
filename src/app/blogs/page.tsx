import Link from 'next/link';
import { blogPosts } from './data';
import styles from './page.module.css';
import { TypewriterTitle } from '@/components/TypewriterTitle';

export const metadata = {
  title: 'Blogs & Use Cases | Rakesh Mohan',
  description: 'Technical use cases and insights on SIP, VOIP, WebRTC, and Enterprise Communication Platforms.',
};

export default function BlogsPage() {
  return (
    <div className={styles.page}>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <TypewriterTitle text="Technical Insights & Use Cases" className={styles.sectionTitle} />
            <p className={styles.sectionDescription}>
              Exploring real-world applications and architectural patterns across the communication technology landscape.
            </p>
          </div>

          <div className={styles.timelineGrid}>
            {blogPosts.map((post, index) => (
              <Link 
                href={`/blogs/${post.slug}`}
                key={index} 
                className={styles.timelineItem}
                style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className={styles.itemHeader}>
                  <div className={styles.iconWrapper}>{post.icon}</div>
                  <h2 className={styles.itemTitle}>{post.title}</h2>
                </div>
                <p className={styles.itemDescription}>{post.summary}</p>
                <div className={styles.tags}>
                  {post.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

