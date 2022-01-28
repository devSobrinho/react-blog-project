import { Heading } from '../Heading';
import { LogoLink } from '../LogoLink';
import * as Styled from './styles';

export type HeaderProps = {
  logo: string;
  blogName: string;
  blogDescription: string;
  showText?: boolean;
};

export function Header({
  logo,
  blogName,
  blogDescription,
  showText = true,
}: HeaderProps) {
  return (
    <Styled.Wrapper>
      <LogoLink
        link={'/'}
        text={`${blogName} - ${blogDescription}`}
        srcImg={logo}
        newTab={false}
      />
      {showText && (
        <Styled.Content>
          <Heading as="h2" size="small" colorDark>
            {blogName}
          </Heading>
          <p>{blogDescription}</p>
        </Styled.Content>
      )}
    </Styled.Wrapper>
  );
}
