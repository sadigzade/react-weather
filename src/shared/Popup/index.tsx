import React, { Fragment } from 'react';

import ThisDayItem from '../../pages/Home/components/ThisDayInfo/ThisDayItem';

import { Item } from '../../pages/Home/components/ThisDayInfo';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import styles from './Popup.module.scss';

type Props = {};

const Popup = (props: Props) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°',
    },
    {
      icon_id: 'pressure',
      name: 'Давление ',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },

    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },
  ];

  return (
    <Fragment>
      <div className={styles.blur}></div>
      <div className={styles.popup}>
        <div className={styles.day}>
          <div className={styles.day__temp}>12°</div>
          <div className={styles.day__name}>Среда</div>
          <div className={styles.day__img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={styles.day__time}>Время: 01:54</div>
          <div className={styles.day__city}>Город: Москва</div>
        </div>
        <div className={styles.day__info}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={styles.img}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </Fragment>
  );
};

export default Popup;
