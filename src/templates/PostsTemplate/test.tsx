import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostsTemplate, PostsTemplateProps } from '.';
import mock from './mock';

const props: PostsTemplateProps = mock;

describe('<PostsTemplate />', () => {
  it('should render without posts', () => {
    renderTheme(<PostsTemplate {...props} posts={undefined} />);

    expect(screen.getByText('Nenhum post encontrado aqui')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostsTemplate {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
