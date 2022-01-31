import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ArticleMeta, ArticleMetaProps } from '.';
import mock from './mock';

const props: ArticleMetaProps = mock;

describe('<ArticleMeta />', () => {
  it('should render author and category links', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(
      screen.getByRole('link', { name: props.author.displayName }),
    ).toHaveAttribute('href', '/author/daniel-sobrinho');
    expect(screen.getByRole('link', { name: 'JS' })).toHaveAttribute(
      'href',
      '/category/javascript',
    );
    expect(screen.getByRole('link', { name: 'React' })).toHaveAttribute(
      'href',
      '/category/react',
    );
  });

  it('should format date', () => {
    renderTheme(<ArticleMeta createdAt={props.createdAt} categories={[]} />);

    expect(screen.getByText('2 de mar. de 2021')).toHaveAttribute(
      'datetime',
      props.createdAt,
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<ArticleMeta {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot with not author and not categories', () => {
    const { container } = renderTheme(
      <ArticleMeta
        createdAt={props.createdAt}
        author={undefined}
        categories={undefined}
      />,
    );

    expect(
      screen.queryByRole('link', { name: 'React' }),
    ).not.toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
