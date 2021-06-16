const assert = require('assert');

Feature('Like Restaurant Testing');

Scenario('like restaurant on Detail page', async ({ I }) => {
  I.amOnPage('/#/detail/rqdv5juczeskfw1e867');

  I.seeElement('#favourites-heart-button');
  I.click('#favourites-heart-button');

  const currentLikedRestaurantTitle = await I.grabTextFrom('.story-title');

  I.amOnPage('/#/favourites');

  const latestLikedRestaurant = locate('.story-title').first();
  const latestLikedRestaurantTitle = await I.grabTextFrom(latestLikedRestaurant);

  assert.strictEqual(currentLikedRestaurantTitle, latestLikedRestaurantTitle);
});
