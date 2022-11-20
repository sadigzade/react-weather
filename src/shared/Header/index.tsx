import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';

import styles from './Header.module.scss';

type Props = {};

const options = [
  { value: 'city-1', label: 'Москва' },
  { value: 'city-2', label: 'Санкт-Петербург' },
  { value: 'city-3', label: 'Новгород' },
];

const Header = (props: Props) => {
  const [theme, setTheme] = useState('light');

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme === 'dark' ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
      width: 194,
      height: 37,
      border: 'none',
      borderRadius: 10,
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme === 'dark' ? '#ffffff' : '#000000',
    }),
  };

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const root = document.querySelector(':root') as HTMLElement;

    const components = [
      'body-background',
      'components-background',
      'card-background',
      'card-box-shadow',
      'text-color',
    ];

    components.forEach((component) => {
      root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`);
    });
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={styles.title}>React weather</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select defaultValue={options[0]} options={options} styles={colourStyles} />
      </div>
    </header>
  );
};

export default Header;
