import * as Styled from './styles';
import { HtmlContent } from '../HtmlContent';

export type FooterProps = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Styled.Container style={{ marginTop: '50px' }}>
      <HtmlContent html={footerHtml} />
    </Styled.Container>
  );
};
