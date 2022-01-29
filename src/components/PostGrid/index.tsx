import { PostCard, PostCardProps } from '../PostCard';
import * as Styled from './styles';

export type PostGridProps = { posts?: PostCardProps[] };

export const PostGrid = ({ posts = [] }: PostGridProps) => {
  return (
    <Styled.Wrapper>
      {!posts.length && (
        <Styled.NotFound>Nenhum post encontrado aqui</Styled.NotFound>
      )}

      {posts.length > 0 && (
        <Styled.Grid>
          {posts.map((post) => (
            <PostCard
              key={`post-card-${post.id}`}
              {...post}
              aria-description={post.title}
            />
          ))}
        </Styled.Grid>
      )}
    </Styled.Wrapper>
  );
};
