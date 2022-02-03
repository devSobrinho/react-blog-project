import { useContext, useEffect, useState } from 'react';
import { BlogThemeContext } from '../../context/BlogThemeContext';
import * as Styled from './styles';

export const ToggleTheme = () => {
  const { setTheme } = useContext(BlogThemeContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
    const newTheme = JSON.parse(localTheme);

    if (newTheme.name === 'inverted') {
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    setTheme(checked ? 'inverted' : 'default');
  }, [checked, setTheme]);

  const handleChange = () => {
    setChecked((s) => !s);
    setTheme(checked ? 'inverted' : 'default');
  };

  return (
    <Styled.Wrapper>
      <Styled.Label>
        Toogle light and dark modes
        <Styled.Input
          type={'checkbox'}
          onChange={handleChange}
          checked={checked}
        />
        <Styled.Slider />
      </Styled.Label>
    </Styled.Wrapper>
  );
};
