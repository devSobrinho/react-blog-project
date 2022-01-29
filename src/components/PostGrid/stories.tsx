import { Meta, Story } from '@storybook/react/types-6-0';
import { PostGrid, PostGridProps } from '.';
import mock from './mock';

export default {
  title: 'PostGrid',
  component: PostGrid,
  args: mock,
} as Meta<PostGridProps>;

export const Template: Story<PostGridProps> = (args) => {
  return (
    <div style={{ maxWidth: '75vw', margin: '20px auto' }}>
      <PostGrid {...args} />
    </div>
  );
};

export const NoPosts: Story<PostGridProps> = () => {
  return (
    <div style={{ maxWidth: '75vw', margin: '20px auto' }}>
      <PostGrid posts={[]} />
    </div>
  );
};
