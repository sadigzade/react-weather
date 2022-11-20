import { useState, useEffect, ReactNode } from 'react';

import { Theme, ThemeContext } from '../context/ThemeContext';
import { changeCssRootVariables } from '../model/ChangeCssRootVariables';
import { storeg } from '../model/Storeg';

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(storeg.getItem('theme') || Theme.LIGHT);

  useEffect(() => {
    changeCssRootVariables(theme);
  }, []);

  const changeTheme = (theme: Theme) => {
    storeg.setItem('theme', theme);
    setTheme(theme);
    changeCssRootVariables(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
