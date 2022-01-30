import { data } from '../../api/dados.json';
import { PostTag } from '../../shared-typed/tag';

export default data.posts[0].tags as PostTag[];
