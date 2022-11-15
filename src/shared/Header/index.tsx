import React from 'react';

import GlobalSvgSelector from '../../assets/images/icons/shared/global/GlobalSvgSelector';

import styles from './Header.module.scss';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={styles.title}>React weather</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.change_theme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
      </div>
    </header>
  );
};

export default Header;
