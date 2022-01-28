import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Post, PostProps } from '.';
import mock from './mock';
import { formatDate } from '../../utils/format-data';

const props: PostProps = mock;

describe('<Post />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Post {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.cover,
    );
    expect(screen.getByText(props.excerpt)).toHaveStyleRule(
      'font-size',
      '2.4rem',
    );
    expect(screen.getByText(formatDate(props.createdAt))).toBeInTheDocument();

    expect(screen.getByText(/^Blockquote: Et sed/i)).toBeInTheDocument();
    const htmlElements = container.firstChild.lastChild;
    expect(htmlElements).toBeInTheDocument();
  });
});
