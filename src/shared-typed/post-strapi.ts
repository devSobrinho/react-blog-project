import { Author } from './author';
import { Category } from './category';
import { StrapiImage } from './strapi-image';
import { PostTag } from './tag';

export type PostStrapi = {
  createdAt: string;
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  allowComments: boolean;
  cover: StrapiImage;
  categories: Category[];
  tags: PostTag[];
  author: Author;
};
