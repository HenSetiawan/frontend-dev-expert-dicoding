import FavoriteCafeIdb from '../src/scripts/services/favorite-services';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Like A Cafe', () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the cafe has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({ id: 1 });
    expect(
      document.querySelector('[aria-label="like this cafe"]'),
    ).toBeTruthy();
  });

  it('should not show the unlike button when the cafe has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({ id: 1 });
    expect(
      document.querySelector('[aria-label="unlike this cafe"]'),
    ).toBeFalsy();
  });

  it('should be able to like the cafe', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({ id: 1 });
    document.querySelector('.btn-like').dispatchEvent(new Event('click'));
    const cafe = await FavoriteCafeIdb.getCafe(1);
    expect(cafe).toEqual({ id: 1 });
    await FavoriteCafeIdb.deleteCafe(1);
  });

  it('should not add a cafe again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({ id: 1 });
    FavoriteCafeIdb.putCafe({ id: 1 });
    document.querySelector('.btn-like').dispatchEvent(new Event('click'));
    const allCafes = await FavoriteCafeIdb.getAllCafes();
    expect(allCafes).toEqual([{ id: 1 }]);
    await FavoriteCafeIdb.deleteCafe(1);
  });

  it('should not add a cafe when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({ });
    document.querySelector('.btn-like').dispatchEvent(new Event('click'));
    expect(await FavoriteCafeIdb.getAllCafes()).toEqual([]);
  });
});
