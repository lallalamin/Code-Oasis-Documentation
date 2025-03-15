import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { TbApi } from "react-icons/tb";
import { GrSystem } from "react-icons/gr";
import { FaRegBuilding } from "react-icons/fa";

type FeatureItem = {
  title: string;
  Icon: React.ComponentType;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'API Reference',
    Icon: TbApi,
    description: (
      <>
        Detailed documentation on API endpoints, request/response formats, and error handling.
      </>
    ),
  },
  {
    title: 'System Architecture',
    Icon: GrSystem,
    description: (
      <>
        Understand how data flows between frontend and backend, plus MongoDB schema details.
      </>
    ),
  },
  {
    title: 'Deployment & Contribution',
    Icon: FaRegBuilding,
    description: (
      <>
        Learn how to set up, deploy, and contribute to CodeOasis projects.
      </>
    ),
  },
];

function Feature({title, Icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Icon className={styles.icon} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
