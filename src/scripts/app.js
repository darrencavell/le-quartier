import { urlSlicing, urlSplitting, urlGrouping } from './globals/utils';
import routes from './views/routes';

const App = {
  async render() {
    const slicedHashUrl = urlSlicing(window.location.hash);
    const splittedUrl = urlSplitting(slicedHashUrl);
    const url = urlGrouping(splittedUrl);

    const currentRoute = routes[url];
    const app = document.getElementById('app');
    app.innerHTML = await currentRoute.render();
    await currentRoute.componentDidMount();
  },
};

export default App;
