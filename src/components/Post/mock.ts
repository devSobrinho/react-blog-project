import { PostProps } from '.';
import mockArticleHeader from '../ArticleHeader/mock';
import mockHtmlContent from '../HtmlContent/mock';

export default {
  ...mockArticleHeader,
  content: mockHtmlContent,
} as PostProps;
