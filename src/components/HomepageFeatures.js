import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Core Developer of AutoInfra Project',
    Svg: require('../../static/img/code.svg').default,
    description: (
      <>
        Why Re-Invent the Wheel when you can use AutoInfra.
      </>
    ),
  },
  {
    title: 'Focuses on What Matters',
    Svg: require('../../static/img/analytics.svg').default,
    description: (
      <>
        Our Customized Reporting utilites provide you all Insights.
      </>
    ),
  },
  {
    title: 'Always Chooses The Right Framework',
    Svg: require('../../static/img/choose.svg').default,
    description: (
      <>
        Check my GitHUb for Available Framework List.
      </>
    ),
  },
  {
    title: 'Always Stays Relaxed',
    Svg: require('../../static/img/meditation.svg').default,
    description: (
      <>
        Never worry about Task, Cool...
      </>
    ),
  },
  {
    title: 'Any Cloud',
    Svg: require('../../static/img/cloud.svg').default,
    description: (
      <>
        Choose any Cloud Platform, I can adopt the Technology
      </>
    ),
  },
  {
    title: 'Learn from Articles',
    Svg: require('../../static/img/learn.svg').default,
    description: (
      <>
        Check my Articles sections to grab some Knowledge
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
