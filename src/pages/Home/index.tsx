import React from 'react';

import ThisDay from './components/ThisDay';
import ThisDayInfo from './components/ThisDayInfo';
import Days from './components/Days';

import styles from './Home.module.scss';

type Props = {};

const Home = (props: Props) => {
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};

export default Home;
