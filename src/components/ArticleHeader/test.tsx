import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ArticleHeader, ArticleHeaderProps } from '.';
import mock from './mock';
import { formatDate } from '../../utils/format-data';

const props: ArticleHeaderProps = mock;

describe('<ArticleHeader />', () => {
  it('should render heading, excerpt, cover img and mueta', () => {
    renderTheme(<ArticleHeader {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(props.excerpt)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.cover.url,
    );
    expect(screen.getByText(formatDate(props.createdAt))).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<ArticleHeader {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
