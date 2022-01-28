import { screen } from '@testing-library/react';
import { Header } from '.';
import { renderTheme } from '../../styles/render-theme';

import props from './mock';

describe('<Header />', () => {
  it('should render an image, a heading and text', () => {
    renderTheme(<Header {...props} showText={undefined} />);

    expect(
      screen.getByRole('heading', { name: props.blogName }),
    ).toBeInTheDocument();
    expect(screen.getByText(`${props.blogDescription}`)).toBeInTheDocument();
    expect(
      screen.getByAltText(`${props.blogName} - ${props.blogDescription}`),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: `${props.blogName} - ${props.blogDescription}`,
      }),
    ).toHaveAttribute('src', props.logo);
  });

  it('should render image only', () => {
    renderTheme(<Header {...props} showText={false} />);

    expect(
      screen.getByAltText(`${props.blogName} - ${props.blogDescription}`),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: props.blogName }),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(props.blogDescription)).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Header {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
