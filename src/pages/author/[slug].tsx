import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { loadPosts, StrapiPostAndSettings } from '../../api/load-posts';
import { PostsTemplate } from '../../templates/PostsTemplate';

export default function AuthorPage({ setting, posts }: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Head>
        <title>
          Author: {posts[0].author.displayName} | {setting.blogName}
        </title>
        <meta name="description" content={setting.blogDescription} />
      </Head>
      <PostsTemplate settings={setting} posts={posts} />;
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // let data: null | StrapiPostAndSettings;
  // let paths = [];

  // try {
  //   data = await loadPosts();
  //   paths = data.posts.map((post) => ({
  //     params: {
  //       slug: post.author.slug,
  //     },
  //   }));
  // } catch (e) {
  //   data = null;
  //   paths = [];
  // }

  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async (
  ctx,
) => {
  let data: null | StrapiPostAndSettings;

  try {
    data = await loadPosts({
      authorSlug: ctx.params.slug as string,
    });
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      setting: data.setting,
      posts: data.posts,
      author: ctx.params.slug,
    },
  };
};
