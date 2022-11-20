import { ReactNode, useState } from 'react';

import { Theme, ThemeContext } from '../context/ThemeContext';
import { changeCssRootVariables } from '../model/ChangeCssRootVariables';

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const changeTheme = (theme: Theme) => {
    setTheme(theme);
    changeCssRootVariables(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
