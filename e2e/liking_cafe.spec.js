const assert = require('assert');

Feature('liking a cafe');
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('should show empty favorite cafe', ({ I }) => {
  I.seeElement('.favorite-page');
  I.see("You don't have any favorite Cafe", '.favorite-page');
});

Scenario('liking one cafe', async ({ I }) => {
  I.amOnPage('/#/home');
  I.wait(3);
  I.seeElement('list-cafe');

  const firstCard = locate('.cafe-name').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.wait(3);
  I.seeElement('.btn-like');
  I.click('.btn-like');

  I.wait(3);
  I.amOnPage('/#/favorite');
  I.seeElement('list-cafe');
  const firstCardLikedTitle = await I.grabTextFrom('.cafe-name');

  assert.strictEqual(firstCardTitle, firstCardLikedTitle);
});

Scenario('unliking one cafe', async ({ I }) => {
  // like cafe first
  I.amOnPage('/#/home');
  I.wait(3);
  I.seeElement('list-cafe');
  const firstCard = locate('.cafe-name').first();
  I.click(firstCard);
  I.wait(3);
  I.seeElement('.btn-like');
  I.click('.btn-like');

  // unlike the cafe
  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('list-cafe');
  const firstLikedCard = locate('.cafe-name').first();
  I.click(firstLikedCard);
  I.wait(3);
  I.seeElement('.btn-like');
  I.click('.btn-like');

  // check if favorite page is empty
  I.amOnPage('/#/favorite');
  I.wait(3);
  I.see("You don't have any favorite Cafe", '.favorite-page');
});
