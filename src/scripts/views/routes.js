import Detail from './detail';
import Landing from './landing';
import Favourites from './favourites';

const routes = {
  '/': Landing,
  '/restaurants': Landing,
  '/favourites': Favourites,
  '/detail/:id': Detail,
};

export default routes;
