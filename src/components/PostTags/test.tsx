import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostTags, PostTagsProps } from '.';
import mock from './mock';

const props: PostTagsProps = {
  tags: mock,
};

describe('<PostTags />', () => {
  it('should render 4 tags', () => {
    renderTheme(<PostTags {...props} />);

    expect(screen.getByText(/Tags:/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')[0]).toHaveAttribute(
      'href',
      '/tag/object-destructuring',
    );
    expect(screen.getAllByRole('link')).toHaveLength(4);
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<PostTags {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
  it('should match snapshot with not tag', () => {
    const { container } = renderTheme(<PostTags {...props} tags={undefined} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
