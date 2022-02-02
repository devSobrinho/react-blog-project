import * as Styled from './styles';
import { PostStrapi } from '../../shared-types/post-strapi';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../Base';
import { PostGrid } from '../../components/PostGrid';
import { useState } from 'react';
import { loadPosts, LoadPostsVariables } from '../../api/load-posts';

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
  variables?: LoadPostsVariables;
};

export const PostsTemplate = ({
  settings,
  posts = [],
  variables,
}: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState(posts);
  const [stateVariables, setStateVariables] = useState(variables);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  // const [startPost, setStartPost] = useState(2);

  // useEffect(() => {
  //   setStartPost(statePosts.length + 1);
  //   if (!noMorePosts) {
  //     loadPosts({ limit: startPost, start: startPost - 1 }).then((data) => {
  //       console.log('aqqqs');

  //       if (data.posts.length <= 0 || !data.posts) {
  //         setButtonDisabled(true);
  //         setNoMorePosts(true);
  //       }
  //     });
  //   }
  //   console.log(startPost);
  // }, [posts, statePosts, startPost, noMorePosts]);

  // const handleLoadMorePosts = async () => {
  //   const data = await loadPosts({ limit: startPost, start: 0 });
  //   setStatePosts(data.posts);
  // };

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true);

    const newVariables: LoadPostsVariables = {
      ...stateVariables,
      start: stateVariables.start + stateVariables.limit,
      limit: stateVariables.limit,
    };
    const morePosts = await loadPosts(newVariables);

    if (!morePosts || !morePosts.posts || !morePosts.posts.length) {
      setNoMorePosts(true);
      return;
    }
    setButtonDisabled(false);
    setStateVariables(newVariables);
    setStatePosts((p) => [...p, ...morePosts.posts]);
  };

  return (
    <BaseTemplate settings={settings}>
      <PostGrid posts={statePosts} />
      <Styled.ButtonContainer>
        <Styled.Button onClick={handleLoadMorePosts} disabled={buttonDisabled}>
          {noMorePosts ? 'Sem mais posts' : 'Carregar posts'}
        </Styled.Button>
      </Styled.ButtonContainer>
    </BaseTemplate>
  );
};
