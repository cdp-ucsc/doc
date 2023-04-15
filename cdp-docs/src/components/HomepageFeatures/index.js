import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Business Process',
    Svg: require('@site/static/img/business_process.svg').default,
    description: (
      <>
        Documentation related to Business Process that have been analyzed, mapped and documented.
      </>
    ),
  },
  {
    title: 'Project Resources',
    Svg: require('@site/static/img/project_resources.svg').default,
    description: (
      <>
        Documentation for project resources, including onboarding, sytle guides, workflow processes and procedures.
      </>
    ),
  },
  {
    title: 'Program Updates',
    Svg: require('@site/static/img/project_status.svg').default,
    description: (
      <>
        Official communication channels for program updates and status.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
