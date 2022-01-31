import Link from 'next/link';
import { StrapiImage } from '../../shared-types/strapi-image';
import { Heading } from '../Heading';
import * as Styled from './styles';

export type PostCardProps = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  cover: StrapiImage;
};

export const PostCard = ({ title, excerpt, cover, slug }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`} passHref>
        <a aria-label={'post-photo'}>
          <Styled.Cover src={cover.url} alt={cover.alternativeText} />
        </a>
      </Link>

      <Styled.Content>
        <Heading as="h2" size="small">
          <Link href={`/post/${slug}`} passHref>
            <a>{title}</a>
          </Link>
        </Heading>
        <Styled.Excerpt>{excerpt}</Styled.Excerpt>
      </Styled.Content>
    </Styled.Wrapper>
  );
};
