import React from 'react';

import styles from './Tabs.module.scss';

interface Props {}

type Tabs = {
  value: string;
};

const Tabs = (props: Props) => {
  const tabs: Tabs[] = [
    {
      value: 'На неделю',
    },
    {
      value: 'На месяц',
    },
    {
      value: 'На 10 дней',
    },
  ];

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__wrapper}>
        {tabs.map((tab) => (
          <div className={styles.tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={styles.cancle}>Отменить</div>
    </div>
  );
};

export default Tabs;
