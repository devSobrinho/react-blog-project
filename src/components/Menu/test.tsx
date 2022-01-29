import { screen, fireEvent } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu, MenuProps } from '.';
import mock from './mock';

const props: MenuProps = mock;

describe('<Menu />', () => {
  it('should render and show menu button open', () => {
    renderTheme(<Menu {...props} />);

    expect(
      screen.getByRole('link', { name: 'Open or close menu' }),
    ).toHaveAttribute('href', '#');
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'menu' })).toHaveStyle({
      padding: '0.5rem',
    });
    expect(
      screen.getByRole('navigation', { name: 'menu' }).firstChild,
    ).not.toBeInTheDocument();
  });

  it('should open/close menu on button click ', () => {
    renderTheme(<Menu {...props} />);

    const buttonMenuClose = screen.getByRole('link', {
      name: 'Open or close menu',
    });
    fireEvent.click(buttonMenuClose);

    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
    expect(screen.queryByLabelText('Open menu')).not.toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'menu' })).toHaveStyle({
      padding: '2.4rem',
    });
    expect(
      screen.getByRole('img', { name: props.logoLink.text }),
    ).toHaveAttribute('src', props.logoLink.srcImg);
    expect(
      screen.getByRole('navigation', { name: 'menu' }).firstChild,
    ).toBeInTheDocument();
    expect(
      screen
        .getByRole('navigation', { name: 'menu' })
        .querySelectorAll('a:not([href="/"])'),
    ).toHaveLength(6);
    expect(screen.getAllByRole('link', { name: 'MenuLink1' })[0]);

    fireEvent.click(buttonMenuClose);
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'menu' })).toHaveStyle({
      padding: '0.5rem',
    });
    expect(
      screen.getByRole('navigation', { name: 'menu' }).firstChild,
    ).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Menu {...props} />);

    expect(container.firstChild).toMatchSnapshot();

    const buttonMenuClose = screen.getByRole('link', {
      name: 'Open or close menu',
    });
    fireEvent.click(buttonMenuClose);
    expect(container.firstChild).toMatchSnapshot();
  });
});
