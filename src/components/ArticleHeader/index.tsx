import * as Styled from './styles';
import { Heading } from '../Heading';
import { ArticleMeta, ArticleMetaProps } from '../ArticleMeta';

export type ArticleHeaderProps = {
  id: string;
  title: string;
  excerpt: string;
  cover: string;
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
      <Styled.Cover src={cover} alt={title} />
      <ArticleMeta
        categories={categories}
        author={author}
        createdAt={createdAt}
      />
    </Styled.Wrapper>
  );
};
