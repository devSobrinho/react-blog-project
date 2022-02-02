import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  defaultLoadPostsVariables,
  loadPosts,
  StrapiPostAndSettings,
} from '../../api/load-posts';
import { PostsTemplate } from '../../templates/PostsTemplate';

export default function SearchPage({
  setting,
  posts,
  variables,
}: StrapiPostAndSettings) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Search: {router.query.post} - {setting.blogName}
        </title>
        <meta name="description" content={setting.blogDescription} />
      </Head>
      <PostsTemplate settings={setting} posts={posts} variables={variables} />;
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  StrapiPostAndSettings
> = async (ctx) => {
  let data: null | StrapiPostAndSettings;
  const query = (ctx.query.post as string) || '';

  if (!query) {
    return {
      notFound: true,
    };
  }

  const variables = {
    postSearch: query as string,
  };

  try {
    data = await loadPosts(variables);
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      setting: data.setting,
      posts: data.posts,
      variables: { ...defaultLoadPostsVariables, ...variables },
    },
  };
};
