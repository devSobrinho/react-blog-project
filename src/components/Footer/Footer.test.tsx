import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer footerHtml={'<h1>Olá</h1>'} />);
    expect(screen.getByRole('heading', { name: 'Olá' })).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c2 {
        font-size: 2.4rem;
      }

      .c2 p {
        margin: 4.0rem 0;
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

      .c2 pre {
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

      .c2 img {
        max-width: 100%;
      }

      .c2 .image {
        background: #DDDDDD;
        border-radius: 5px;
        line-height: 0;
        margin: 4.0rem 0;
      }

      .c2 .image figcaption {
        font-size: 1.6rem;
        padding: 0.8rem;
        text-align: center;
        line-height: 1.3;
      }

      .c2 .image-style-side {
        float: right;
        max-width: 50%;
        margin: 2.4rem;
      }

      .c2 hr {
        border: none;
        border-bottom: 0.1rem solid #DDDDDD;
      }

      .c2 ul,
      .c2 ol {
        margin: 4.0rem 0;
      }

      .c2 .table {
        width: 100%;
        overflow: hidden;
        overflow-x: auto;
      }

      .c2 table {
        width: 100%;
        border-collapse: collapse;
      }

      .c2 table th,
      .c2 table td {
        padding: 1.6rem;
        border: 0.1rem solid #DDDDDD;
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
          float: none;
          max-width: 100%;
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
