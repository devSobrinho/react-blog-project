import * as Styled from './styles';
import { DiscussionEmbed } from 'disqus-react';
import config from '../../config';

export type CommentsProps = {
  id: string;
  slug: string;
  title: string;
  allowComments: boolean;
};

export function Comments({ id, slug, title, allowComments }: CommentsProps) {
  if (!allowComments) {
    return null;
  }

  return (
    <Styled.Wrapper>
      <DiscussionEmbed
        shortname={'blog-dev-sobrinho'}
        config={{
          url: `${config.url}/post/${slug}`,
          identifier: id,
          title: title,
          language: 'pt-BR',
        }}
      />
    </Styled.Wrapper>
  );
}
