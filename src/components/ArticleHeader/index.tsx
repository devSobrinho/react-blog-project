import * as Styled from './styles';
import { Heading } from '../Heading';
import { ArticleMeta, ArticleMetaProps } from '../ArticleMeta';
import { StrapiImage } from '../../shared-typed/strapi-image';

export type ArticleHeaderProps = {
  id: string;
  title: string;
  excerpt: string;
  cover: StrapiImage;
} & ArticleMetaProps;

export const ArticleHeader = ({
  title,
  excerpt,
  cover,
  createdAt,
  author,
  categories,
}: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="big">{title}</Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
      <Styled.Cover src={cover.url} alt={title} />
      <ArticleMeta
        categories={categories}
        author={author}
        createdAt={createdAt}
      />
    </Styled.Wrapper>
  );
};
