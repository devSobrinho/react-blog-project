import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer footerHtml={'<h1>Olá</h1>'} />);
    expect(screen.getByRole('heading', { name: 'Olá' })).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c2 {
        font-size: calc(1.6rem + 0.2rem);
        line-height: 1.5;
      }

      .c2 p {
        margin: 2.4rem 0;
      }

      .c2 a,
      .c2 a:visited,
      .c2 a:link {
        color: #dc143c;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c2 a:hover {
        -webkit-filter: brightness(50%);
        filter: brightness(50%);
      }

      .c2 code {
        font-family: monospace;
        color: #dc143c;
        font-size: 1.6rem;
        background: #DDDDDD;
        padding: 0.2rem;
        margin: 0.2rem;
      }

      .c2 pre {
        background: #000000;
        padding: 2.4rem;
        font-family: monospace;
        color: #FFFFFF;
        margin: 2.4rem 0;
        width: 100%;
        overflow-x: auto;
        font-size: 1.6rem;
      }

      .c2 pre code {
        color: inherit;
        background: inherit;
      }

      .c2 img {
        max-width: 100%;
      }

      .c2 .image {
        background: #DDDDDD;
        line-height: 0;
        margin: 2.4rem 0;
      }

      .c2 .image figcaption {
        font-size: 1.6rem;
        padding: 1.6rem;
        text-align: center;
        line-height: 1.3;
      }

      .c2 .image-style-side {
        max-width: 50%;
        float: right;
        margin: 2.4rem 0;
      }

      .c2 hr {
        border: none;
        border-bottom: 0.1rem solid #DDDDDD;
      }

      .c2 ul,
      .c2 ol {
        margin: 2.4rem 4.0rem;
      }

      .c2 .table {
        width: 100%;
        overflow: hidden;
        overflow-x: auto;
      }

      .c2 table {
        width: 100%;
        border-collapse: collapse;
        margin: 2.4rem 0;
      }

      .c2 table td,
      .c2 table th {
        padding: 1.6rem;
        border: 0.1rem solid #DDDDDD;
      }

      .c2 blockquote {
        border-left: 0.5rem solid #dc143c;
        color: #AAAAAA;
        -webkit-filter: brightness(80%);
        filter: brightness(80%);
        padding-left: 2.4rem;
        font-style: italic;
        margin: 2.4rem;
      }

      .c0 {
        text-align: center;
        border-top: 0.1rem solid #DDDDDD;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0 .c1 {
        font-size: 1.6rem;
      }

      @media (max-width:768px) {
        .c2 {
          font-size: 2rem;
        }

        .c2 .image-style-side {
          max-width: 100%;
          float: none;
          margin: 0;
        }
      }

      <div>
        <footer
          class="c0"
          style="margin-top: 50px;"
        >
          <div
            class="c1 c2"
          >
            <h1>
              Olá
            </h1>
          </div>
        </footer>
      </div>
    `);
  });
});
