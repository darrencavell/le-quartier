import Detail from '../src/scripts/views/detail';
import FavouriteIdb from '../src/scripts/globals/favouriteIdb';
import { detailResponse, addReviewResponse, restaurantResponse } from './testFactories/detailFactories';

describe('Detail integration testing', () => {
  let spyFetch;

  beforeEach(async () => {
    document.body.innerHTML = await Detail.render();

    window.location.hash = '/detail/rqdv5juczeskfw1e867';
    spyFetch = spyOn(window, 'fetch').and.callFake(() => {
      return {
        json: () => detailResponse
      };
    });
  });

  it('should render component correctly', async () => {
    await Detail.componentDidMount();

    const header = document.getElementById('header');
    expect(header).not.toBeNull();

    const content = document.getElementById('content');
    expect(content).not.toBeNull();

    const carousel = document.getElementById('carousel');
    expect(carousel).not.toBeNull();

    const review = document.getElementById('add-review');
    expect(review).not.toBeNull();

    const favourites = document.getElementById('favourites');
    expect(favourites).not.toBeNull();

    const footer = document.getElementById('footer');
    expect(footer).not.toBeNull();
  });

  it('should render title correctly', async () => {
    await Detail.componentDidMount();

    const title = document.getElementsByClassName('story-title').item(0).children.item(0).textContent;
    expect(title).toEqual('Melting Pot, Medan');
  });

  it('should render subtitle correctly', async () => {
    await Detail.componentDidMount();

    const subtitle = document.getElementsByClassName('story-subtitle').item(0).textContent;
    expect(subtitle).toEqual('(Rating: 4.2), Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.');
  });

  it('should render header correctly', async () => {
    await Detail.componentDidMount();

    const header = document.getElementById('navigation-hamburger-icon').innerHTML.trim();
    expect(header).toContain(`<span class="icon-line black line-1">`);
    expect(header).toContain(`<span class="icon-line black line-2">`);
    expect(header).toContain(`<span class="icon-line black line-3">`);
  });

  it('should render first active carousel correctly', async () => {
    await Detail.componentDidMount();

    const carousel = document.getElementsByClassName('carousel-item active').item(0).children.item(2).textContent;
    expect(carousel).toEqual('Tidak rekomendasi untuk pelajar!');
  });

  it('should trigger changing carousel to next correctly', async () => {
    await Detail.componentDidMount();

    const rightButton = document.getElementById('carousel-right-button');
    rightButton.dispatchEvent(new Event('click'));

    const carousel = document.getElementsByClassName('carousel-item active').item(0).children.item(2).textContent;
    expect(carousel).toEqual('Luar Biasa');
  });

  it('should trigger changing carousel to prev correctly', async () => {
    await Detail.componentDidMount();

    const leftButton = document.getElementById('carousel-left-button');
    leftButton.dispatchEvent(new Event('click'));

    const carousel = document.getElementsByClassName('carousel-item active').item(0).children.item(2).textContent;
    expect(carousel).toEqual('Comment1');
  });

  it('should trigger add review correctly', async () => {
    await Detail.componentDidMount();

    const name = document.getElementById('add-review-name');
    name.value = 'Darren';

    const data = document.getElementById('add-review-data');
    data.value = 'Good Food';

    const button = document.getElementById('add-review-button');
    button.dispatchEvent(new Event('click'));

    spyFetch.and.callFake(() => {
      return {
        json: () => addReviewResponse
      };
    });

    const alert = document.getElementById('add-review-alert').textContent.trim();
    expect(alert).toEqual('Thank you for inserting your review, this message will be dismiss in 3 seconds.');
  });

  it('should render full heart if restaurant has been added to favourite', async () => {
    await FavouriteIdb.putRestaurant(restaurantResponse.restaurant);

    await Detail.componentDidMount();

    const favourites = document.getElementById('favourites').children.item(0).children.item(0).outerHTML;
    expect(favourites).toBe('<i class="fa fa-heart" aria-hidden="true"></i>');

    await FavouriteIdb.deleteRestaurant(restaurantResponse.restaurant.id);
  });

  it('should render empty heart if restaurant has not been added to favourite', async () => {
    await FavouriteIdb.deleteRestaurant(restaurantResponse.restaurant.id);

    await Detail.componentDidMount();

    const favourites = document.getElementById('favourites').children.item(0).children.item(0).outerHTML;
    expect(favourites).toBe('<i class="fa fa-heart-o" aria-hidden="true"></i>');
  });

  it('should be able to trigger like button if restaurant has not been added to favorite', async () => {
    await FavouriteIdb.deleteRestaurant(restaurantResponse.restaurant.id);

    let restaurant = await FavouriteIdb.getRestaurant(restaurantResponse.restaurant.id);
    expect(restaurant).toBe(undefined);

    await Detail.componentDidMount();

    let button = document.getElementById('favourites-heart-button');
    button.dispatchEvent(new CustomEvent('click', {
      detail: (response) => {
        expect(response).toBe('<i class="fa fa-heart" aria-hidden="true"></i>');
      }
    }));
  });

  it('should be able to trigger unlike button if restaurant has been added to favorite', async () => {
    await FavouriteIdb.putRestaurant(restaurantResponse.restaurant);

    let restaurant = await FavouriteIdb.getRestaurant(restaurantResponse.restaurant.id);
    expect(restaurant).not.toBe(undefined);

    await Detail.componentDidMount();

    let button = document.getElementById('favourites-heart-button');
    button.dispatchEvent(new CustomEvent('click', {
      detail: (response) => {
        expect(response).toBe('<i class="fa fa-heart-o" aria-hidden="true"></i>');
      }
    }));
  });
});
