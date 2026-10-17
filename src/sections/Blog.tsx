import type { Profile } from '../types';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';

export default function Blog({ blog }: { blog: Profile['blog'] }) {
  return (
    <Section id="blog" title="Blog" subtitle={blog.tagline}>
      <div className="card-grid">
        {blog.posts.map((post, i) => (
          <Reveal key={`${post.title}-${i}`} delay={i * 80} className="card">
            {post.coverImage && <img className="card__image" src={post.coverImage} alt="" loading="lazy" />}
            <div className="card__body">
              <span className="card__meta">
                <Icon name="calendar" size={14} /> {post.date}
              </span>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <div className="card__links">
                <a href={post.url} target="_blank" rel="noreferrer">
                  Read more <Icon name="external" size={14} />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
