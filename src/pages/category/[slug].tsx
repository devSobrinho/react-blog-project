import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { loadPosts, StrapiPostAndSettings } from '../../api/load-posts';
import { PostsTemplate } from '../../templates/PostsTemplate';

export default function CategoryPage({
  setting,
  posts,
}: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const categoryName = posts[0].categories.filter(
    (category) => category.slug === router.query.slug,
  )[0].displayName;

  return (
    <>
      <Head>
        <title>
          Category: {categoryName} - {setting.blogName}
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
  //       (paths = post.categories.map((category) => ({
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
      categorySlug: ctx.params.slug as string,
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
