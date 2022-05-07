import FavoriteCafeIdb from '../src/scripts/services/favorite-services';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Cafe', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteCafeIdb.putCafe({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteCafeIdb.deleteCafe(1);
  });

  it('should show the unlike button when the cafe has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({ id: 1 });
    expect(
      document.querySelector('[aria-label="unlike this cafe"]'),
    ).toBeTruthy();
  });

  it('should not show the unlike button when the cafe has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({ id: 1 });
    expect(
      document.querySelector('[aria-label="like this cafe"]'),
    ).toBeFalsy();
  });

  it('should be able to remove liked cafe from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({ id: 1 });
    document
      .querySelector('[aria-label="unlike this cafe"]')
      .dispatchEvent(new Event('click'));
    expect(await FavoriteCafeIdb.getAllCafes()).toEqual([]);
  });

  it('should not throw error if the unliked cafe is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({ id: 1 });
    // hapus dulu cafe dari daftar cafe yang disukai
    await FavoriteCafeIdb.deleteCafe(1);

    // kemudian, simulasikan pengguna menekan widget batal menyukai cafe
    document
      .querySelector('[aria-label="unlike this cafe"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteCafeIdb.getAllCafes()).toEqual([]);
  });
});
