import { render, RenderResult } from '@testing-library/react';
import { BlogThemeProvider } from '../context/BlogThemeContext';

export const renderTheme = (children: React.ReactNode): RenderResult => {
  return render(<BlogThemeProvider>{children}</BlogThemeProvider>);
};
