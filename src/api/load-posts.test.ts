import request from 'graphql-request';
import config from '../config';

import { defaultLoadPostsVariables, loadPosts } from './load-posts';

//mock module
jest.mock('graphql-request');
//mock module and return document
jest.mock('../graphql/queries', () => {
  return {
    GRAPHQL_QUERY: 'MY_QUERY',
  };
});

describe('<ToggleTheme />', () => {
  it('should call requests with default variables ', async () => {
    await loadPosts();
    expect(request).toHaveBeenCalledWith(
      config.graphqlURL,
      'MY_QUERY',
      defaultLoadPostsVariables,
    );
  });

  it('should call requests with custom variables ', async () => {
    await loadPosts({
      authorSlug: 'AUTHOR_TEST',
      categorySlug: 'categorySlugggg',
      postSlug: 'postSlugggg',
      postSearch: 'postSearchhhh',
      tagSlug: 'tagSlugggg',
      sort: 'sortttt',
      start: 1,
      limit: 3,
    });
    expect(request).toHaveBeenCalledWith(config.graphqlURL, 'MY_QUERY', {
      ...defaultLoadPostsVariables,
      authorSlug: 'AUTHOR_TEST',
      categorySlug: 'categorySlugggg',
      postSlug: 'postSlugggg',
      postSearch: 'postSearchhhh',
      tagSlug: 'tagSlugggg',
      sort: 'sortttt',
      start: 1,
      limit: 3,
    });
  });
});
