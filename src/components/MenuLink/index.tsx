import * as Styled from './styles';
import Link from 'next/link';

export type MenuLinkProps = {
  id: string;
  children: React.ReactNode;
  link: string;
  newTab?: boolean;
};

export const MenuLink = ({
  children,
  link,
  newTab = false,
  id,
}: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self';
  const nextLink = link.match(/^\//) ? true : false;

  if (nextLink) {
    return (
      <Link href={link} passHref>
        <Styled.Container key={id} target={target}>
          {children}
        </Styled.Container>
      </Link>
    );
  }

  return (
    <Styled.Container key={id} href={link} target={target}>
      {children}
    </Styled.Container>
  );
};
