import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { useReducedMotion } from 'framer-motion';
import { useWindowSize } from '~/hooks';
import { useState, useEffect } from 'react';
import { useLoaderData } from '@remix-run/react';
import { formatYear, formatYearRange } from '~/utils/date';
import { classes } from '~/utils/style';
import styles from './articles.module.css';

export function MdxWrapper({ children }) {
  return (
    <div className={styles.mdxContainer}>
      <div className={styles['mdx-content']}>{children}</div>
    </div>
  );
}

function ArticlesPost({ slug, frontmatter = {}, index, image, isFirst }) {
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title, abstract, date, type, projects } = frontmatter;

  useEffect(() => {
    if (!date) {
      setDateTime('');
      return;
    }
    if (typeof date === 'object') {
      setDateTime(formatYearRange(date.start, date.end));
    } else {
      setDateTime(formatYear(date));
    }
  }, [date]);

  return (
    <article
      className={classes(styles.post, isFirst && styles.firstPost)}
      data-featured="false"
      style={{ '--delay': `${index * 100 + 200}ms` }}
    >
      <div className={styles.postLink}>
        <div className={styles.postDetails}>
          <div className={styles.postDate}>
            <Divider notchWidth="40px" notchHeight="4px" />
            <div>{dateTime}</div>
          </div>
          <Heading as="h2" level={4}>
            {title || 'Untitled'}
          </Heading>
          <Text size="s" as="p" className={styles.inlineText}>
            {abstract || 'No description provided.'}
          </Text>
          
          {type === 'experience' && projects && (
            <div className={styles.projectsContainer}>
              {projects.map((project, i) => (
                <div key={i} className={styles.project}>
                  <Heading as="h3" level={5} className={styles.projectTitle}>
                    {project.title}
                  </Heading>
                  <ul className={styles.projectPoints}>
                    {project.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
        {image && (
          <div className={styles.postImageRight}>
            <img src={image} alt={title || 'Image'} />
          </div>
        )}
      </div>
    </article>
  );
}

export function Articles() {
  const { posts, mdxContent } = useLoaderData();
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;

  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = a.frontmatter?.date || '';
    const dateB = b.frontmatter?.date || '';
    return new Date(dateB) - new Date(dateA);
  });

  const postsHeader = (
    <header className={styles.header}>
      <Heading className={styles.heading} level={5} as="h1">
        <DecoderText text="My Journey" />
      </Heading>
    </header>
  );

  const postList = (
    <div className={styles.list}>
      {!isSingleColumn && postsHeader}
      {mdxContent && (
        <div className={styles.mdxContainer}>
          <MdxWrapper>{mdxContent}</MdxWrapper>
        </div>
      )}
      {sortedPosts.map(({ slug, frontmatter, image }, index) =>
        frontmatter ? (
          <ArticlesPost
            key={slug}
            slug={slug}
            index={index}
            frontmatter={frontmatter}
            image={image}
            isFirst={index === 0}
          />
        ) : null
      )}
    </div>
  );

  return (
    <article className={styles.articles}>
      <Section className={styles.content}>
        <div className={styles.grid}>
          {isSingleColumn && postsHeader}
          {postList}
        </div>
      </Section>
      <Footer />
    </article>
  );
}