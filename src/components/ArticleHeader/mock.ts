import { ArticleHeaderProps } from '.';
import mockArticleMeta from '../ArticleMeta/mock';
import mockHeader from '../Header/mock';

const header = {
  ...mockHeader,
  showText: false,
};

export default {
  header: header,
  title: 'Ipsum movet liberavisse an mea, diceret vituperata',
  excerpt:
    'Abhorreant reformidans eum an, per equidem repudiandae no, ex cum elitr argumentum persequeris.',
  cover:
    'https://res.cloudinary.com/dlizakp2a/image/upload/v1614696630/Frozen_sunset_on_the_lake_by_Manuel_Arslanyan_9f9cd8ea10.jpg',
  articleMeta: mockArticleMeta,
} as ArticleHeaderProps;
