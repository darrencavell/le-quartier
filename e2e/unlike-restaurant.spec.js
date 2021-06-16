const assert = require('assert');

Feature('Unlike Restaurant Testing');

Scenario('unlike restaurant on Detail page', async ({ I }) => {
  I.amOnPage('/#/detail/rqdv5juczeskfw1e867');

  I.seeElement('#favourites-heart-button');
  I.click('#favourites-heart-button');

  const currentLikedRestaurantTitle = await I.grabTextFrom('.story-title');

  I.amOnPage('/#/favourites');

  const latestLikedRestaurant = locate('.story-title').first();
  const latestLikedRestaurantTitle = await I.grabTextFrom(latestLikedRestaurant);

  assert.strictEqual(currentLikedRestaurantTitle, latestLikedRestaurantTitle);

  I.click(latestLikedRestaurant);

  I.seeCurrentUrlEquals('/#/detail/rqdv5juczeskfw1e867');

  I.click('#favourites-heart-button');

  I.amOnPage('/#/favourites');

  I.dontSee(latestLikedRestaurantTitle);
});
