import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { HtmlContent } from '.';

describe('<HtmlContent />', () => {
  it('should render a text', () => {
    renderTheme(<HtmlContent html="Children" />);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<HtmlContent html="Children" />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      .c0 p {
        margin: 4.0rem 0;
      }

      .c0 a,
      .c0 a:visited,
      .c0 a:link {
        color: #dc143c;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0 a:hover {
        -webkit-filter: brightness(50%);
        filter: brightness(50%);
      }

      .c0 pre {
        background: #000000;
        padding: 2.4rem;
        font-family: monospace;
        color: #FFFFFF;
        margin: 4.0rem 0;
        border-radius: 5px;
        width: 100%;
        overflow-x: auto;
        font-size: 1.6rem;
      }

      .c0 img {
        max-width: 100%;
      }

      .c0 .image {
        background: #DDDDDD;
        border-radius: 5px;
        line-height: 0;
        margin: 4.0rem 0;
      }

      .c0 .image figcaption {
        font-size: 1.6rem;
        padding: 0.8rem;
        text-align: center;
        line-height: 1.3;
      }

      .c0 .image-style-side {
        float: right;
        max-width: 50%;
        margin: 2.4rem;
      }

      .c0 hr {
        border: none;
        border-bottom: 0.1rem solid #DDDDDD;
      }

      .c0 ul,
      .c0 ol {
        margin: 4.0rem 0;
      }

      .c0 .table {
        width: 100%;
        overflow: hidden;
        overflow-x: auto;
      }

      .c0 table {
        width: 100%;
        border-collapse: collapse;
      }

      .c0 table th,
      .c0 table td {
        padding: 1.6rem;
        border: 0.1rem solid #DDDDDD;
      }

      @media (max-width:768px) {
        .c0 {
          font-size: 2rem;
        }

        .c0 .image-style-side {
          float: none;
          max-width: 100%;
        }
      }

      <div
        class="c0"
      >
        Children
      </div>
    `);
  });
});
