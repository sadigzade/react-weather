import React from 'react';
import Select from 'react-select';

import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import { Theme } from '../../context/ThemeContext';
import { useTheme } from '../../hooks/useTheme';

import styles from './Header.module.scss';

type Props = {};

const options = [
  { value: 'city-1', label: 'Москва' },
  { value: 'city-2', label: 'Санкт-Петербург' },
  { value: 'city-3', label: 'Новгород' },
];

const Header = (props: Props) => {
  const theme = useTheme();

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
      width: 194,
      height: 37,
      border: 'none',
      borderRadius: 10,
      zIndex: 100,
      transition: 'none',
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? '#ffffff' : '#000000',
    }),
  };

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

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
