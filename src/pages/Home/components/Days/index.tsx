import React, { Fragment } from 'react';

import Card from './Card';
import Tabs from './Tabs';

import styles from './Days.module.scss';

interface Props {}

export type Day = {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
};

const Days = (props: Props) => {
  const days: Day[] = [
    {
      day: 'Сегодня',
      day_info: '28 авг',
      icon_id: 'd_sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day: 'Завтра',
      day_info: '29 авг',
      icon_id: 'd_small_rain_sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Небольшой дождь и солнце',
    },
    {
      day: 'Ср',
      day_info: '30 авг',
      icon_id: 'd_small_rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Небольшой дождь',
    },
    {
      day: 'Чт',
      day_info: '28 авг',
      icon_id: 'd_mainly_cloudy',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day: 'Пт',
      day_info: '28 авг',
      icon_id: 'd_rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day: 'Сб',
      day_info: '28 авг',
      icon_id: 'd_sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day: 'Вс',
      day_info: '28 авг',
      icon_id: 'd_sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
  ];

  return (
    <Fragment>
      <Tabs />
      <div className={styles.days}>
        {days.map((day: Day) => (
          <Card dayItem={day} />
        ))}
      </div>
    </Fragment>
  );
};

export default Days;
