import Link from 'next/link';
import { PostTag } from '../../shared-typed/tag';
import * as Styled from './styles';

export type PostTagsProps = {
  tags?: PostTag[];
};

export const PostTags = ({ tags = [] }: PostTagsProps) => {
  return (
    <Styled.Wrapper>
      {/* {!tags.length && <p>sem tag</p>} */}
      {tags.length > 0 && 'tags:'}
      {tags.length > 0 &&
        tags.map((tag) => {
          return (
            <span key={`tag-${tag.id}`}>
              <Link href={`/tag/${tag.slug}`} passHref>
                <a>{tag.displayName}</a>
              </Link>
            </span>
          );
        })}
    </Styled.Wrapper>
  );
};
