import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { BaseTemplate, BaseTemplateProps } from '.';
import mock from './mock';

const props: BaseTemplateProps = mock;

describe('<BaseTemplate />', () => {
  it('should render base elements', () => {
    renderTheme(<BaseTemplate {...props} />);

    expect(screen.getByText('O texto da Footer')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to top')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<BaseTemplate {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
