import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import './index.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import party from "party-js";

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">前端，开了个发！</h1>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/📖 文档">
            快速开始🚀
          </Link>
        </div>
      </div>
    </header >
  );
}
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout >
  );
}

// document.querySelector("div").addEventListener("click", function (e) {
//   party.confetti(this, {
//     count: party.variation.range(60, 60),
//     size: party.variation.range(0.6, 0.4),
//   });
// });