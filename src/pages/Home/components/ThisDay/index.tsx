import React from 'react';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';

import styles from './ThisDay.module.scss';

type Props = {};

const ThisDay = (props: Props) => {
  return (
    <div className={styles.this__day}>
      <div className={styles.top__block}>
        <div className={styles.wrapper}>
          <div className={styles.this__temp}>20°</div>
          <div className={styles.this__dn}>Сегодня</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={styles.bottom__block}>
        <div className={styles.this__time}>
          Время: <span>21:54</span>
        </div>
        <div className={styles.this__city}>Город: Москва</div>
      </div>
    </div>
  );
};

export default ThisDay;
