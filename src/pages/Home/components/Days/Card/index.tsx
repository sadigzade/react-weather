import React from 'react';

import { Day } from '..';
import GlobalSvgSelector from '../../../../../assets/icons/global/GlobalSvgSelector';

import styles from './Card.module.scss';

interface Props {
  dayItem: Day;
}

const Card = ({ dayItem }: Props) => {
  const { day, day_info, icon_id, temp_day, temp_night, info } = dayItem;

  return (
    <div className={styles.card}>
      <div className={styles.day}>{day}</div>
      <div className={styles.day__info}>{day_info}</div>
      <div className={styles.img}>
        <GlobalSvgSelector id={icon_id} />
      </div>
      <div className={styles.temp__day}>{temp_day}</div>
      <div className={styles.temp__night}>{temp_night}</div>
      <div className={styles.info}>{info}</div>
    </div>
  );
};

export default Card;
