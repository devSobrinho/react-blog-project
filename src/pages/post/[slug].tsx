import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { loadPosts, StrapiPostAndSettings } from '../../api/load-posts';
import { PostTemplate } from '../../templates/PostTemplate';

export default function PostPage({ posts, setting }: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>LOADING</h1>;
  }

  return (
    <>
      <Head>
        <title>{posts[0].title}</title>
        <meta name="description" content={posts[0].excerpt} />
      </Head>
      <PostTemplate settings={setting} post={posts[0]} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let data: StrapiPostAndSettings | null = null;
  let paths = [];

  try {
    data = await loadPosts();
    paths = data.posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    }));
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    paths = [];
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async (
  ctx,
) => {
  let data: StrapiPostAndSettings | null = null;

  try {
    data = await loadPosts({
      postSlug: ctx.params.slug as string,
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
      posts: data.posts,
      setting: data.setting,
    },

    revalidate: 24 * 60 * 60,
  };
};
