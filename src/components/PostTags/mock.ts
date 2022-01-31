import { data } from '../../api/dados.json';
import { PostTag } from '../../shared-types/tag';

export default data.posts[0].tags as PostTag[];
