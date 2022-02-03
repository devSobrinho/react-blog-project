import * as Styled from './styles';
import { PrimsWrapper } from './prims-vscode-dark';
import { useEffect } from 'react';
import Prism from 'prismjs';

export type HtmlContentProps = {
  html: string;
};

export const HtmlContent = ({ html }: HtmlContentProps) => {
  useEffect(() => {
    let removeAds = null;
    if (typeof window !== 'undefined') {
      Prism.highlightAll();

      removeAds = setTimeout(() => {
        document
          .querySelectorAll('iframe[src*=ads]')
          .forEach((el) => el.remove);
      }, 100000);
    }
    return () => clearInterval(removeAds);
  }, []);

  return (
    <PrimsWrapper>
      <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />;
    </PrimsWrapper>
  );
};
