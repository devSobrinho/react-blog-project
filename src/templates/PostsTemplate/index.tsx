import { PostStrapi } from '../../shared-typed/post-strapi';
import { SettingsStrapi } from '../../shared-typed/settings-strapi';
import { BaseTemplate } from '../Base';
import { PostGrid } from '../../components/PostGrid';

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
};

export const PostsTemplate = ({ settings, posts = [] }: PostsTemplateProps) => {
  return (
    <BaseTemplate settings={settings}>
      <PostGrid posts={posts} />
    </BaseTemplate>
  );
};
