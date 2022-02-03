import { screen, fireEvent } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ToggleTheme } from '.';
import { theme } from '../../styles/theme';

describe('<ToggleTheme />', () => {
  beforeEach(() => {
    localStorage.setItem(
      'theme',
      JSON.stringify({ ...theme, name: 'inverted' }),
    );
  });

  afterEach(() => {
    localStorage.removeItem('theme');
  });

  it('should render input without theme', () => {
    localStorage.removeItem('theme');

    renderTheme(<ToggleTheme />);

    const inputCheckbox = screen.getByRole('checkbox', { checked: false });

    expect(inputCheckbox).not.toBeChecked();
  });

  it('should render input with default theme', () => {
    localStorage.removeItem('theme');

    localStorage.setItem(
      'theme',
      JSON.stringify({ ...theme, name: 'default' }),
    );

    renderTheme(<ToggleTheme />);

    const inputCheckbox = screen.getByRole('checkbox', { checked: false });

    expect(inputCheckbox).not.toBeChecked();
  });

  it('should render input checked with inverted theme', () => {
    renderTheme(<ToggleTheme />);
    const inputCheckbox = screen.getByRole('checkbox', { checked: true });

    expect(inputCheckbox).toBeChecked();
  });

  it('should render input and toggle between theme when toggling input', () => {
    const { container } = renderTheme(<ToggleTheme />);
    const inputCheckbox = screen.getByRole('checkbox', { checked: true });

    expect(inputCheckbox).toBeChecked();
    //input checkbox clicked and active attribute checked
    fireEvent.click(inputCheckbox);
    expect(inputCheckbox).not.toBeChecked();

    fireEvent.click(inputCheckbox);
    expect(inputCheckbox).toBeChecked();

    expect(container.firstChild).toMatchSnapshot();
  });
});
