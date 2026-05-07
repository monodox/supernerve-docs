import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="supernerve Documentation"
    >
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h3>Intelligent Agents</h3>
                <p>
                  Build autonomous AI agents with memory, skills, and
                  connectors that work together seamlessly.
                </p>
              </div>
              <div className="col col--4">
                <h3>Powerful Skills</h3>
                <p>
                  Summarize, extract, classify, generate, search, compare,
                  and format — all out of the box.
                </p>
              </div>
              <div className="col col--4">
                <h3>Seamless Integrations</h3>
                <p>
                  Connect to Slack, Notion, GitHub, Google Drive, and more
                  with built-in connectors.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
