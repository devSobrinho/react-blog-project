import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostCard, PostCardProps } from '.';
import mock from './mock';

const props: PostCardProps = mock;

describe('<PostCard />', () => {
  it('should render a heading, cover and excerpt', () => {
    renderTheme(<PostCard {...props} />);

    expect(screen.getByRole('link', { name: 'post-photo' })).toHaveAttribute(
      'href',
      `/post/${props.slug}`,
    );
    expect(
      screen.getByRole('img', { name: props.cover.alternativeText }),
    ).toHaveAttribute('src', props.cover.url);
    expect(
      screen.getByRole('heading', { name: props.title }).parentElement,
    ).toHaveStyleRule('display', 'flex');
    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/post/${props.slug}`,
    );
    expect(screen.getByText(props.excerpt)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostCard {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
