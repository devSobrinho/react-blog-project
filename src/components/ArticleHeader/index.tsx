import * as Styled from './styles';
import { Heading } from '../Heading';
import { ArticleMeta, ArticleMetaProps } from '../ArticleMeta';
import { Header, HeaderProps } from '../Header';

export type ArticleHeaderProps = {
  id: string;
  header: HeaderProps;
  title: string;
  excerpt: string;
  cover: string;
  articleMeta: ArticleMetaProps;
};

export const ArticleHeader = ({
  header,
  title,
  excerpt,
  cover,
  articleMeta,
}: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Header {...header} />
      <Heading>{title}</Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
      <Styled.Cover src={cover} alt={title} />
      <ArticleMeta {...articleMeta} />
    </Styled.Wrapper>
  );
};
