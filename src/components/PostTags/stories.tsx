import { Meta, Story } from '@storybook/react/types-6-0';
import { PostTags, PostTagsProps } from '.';
import mock from './mock';

export default {
  title: 'PostTags',
  component: PostTags,
  args: {
    tags: mock,
  },
} as Meta<PostTagsProps>;

export const Template: Story<PostTagsProps> = (args) => {
  return (
    <div>
      <PostTags {...args} />
    </div>
  );
};

export const NotTag: Story<PostTagsProps> = () => {
  return (
    <div>
      <PostTags tags={[]} />
    </div>
  );
};
