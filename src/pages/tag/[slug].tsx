import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { loadPosts, StrapiPostAndSettings } from '../../api/load-posts';
import { PostsTemplate } from '../../templates/PostsTemplate';

export default function TagPage({ setting, posts }: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <title>Loading</title>
        <h1>Loading...</h1>
      </>
    );
  }

  const tagName = posts[0].tags.filter(
    (tag) => tag.slug === router.query.slug,
  )[0].displayName;

  return (
    <>
      <Head>
        <title>
          Tag: {tagName} - {setting.blogName}
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
  //   data.posts.map(
  //     (post) =>
  //       (paths = post.tags.map((category) => ({
  //         params: {
  //           slug: category.slug,
  //         },
  //       }))),
  //   );
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
      tagSlug: ctx.params.slug as string,
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
    },
  };
};
