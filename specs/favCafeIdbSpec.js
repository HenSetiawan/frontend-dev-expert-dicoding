import { itActsAsFavoriteCafeModel } from './contract/favoriteCafeContract';
import FavoriteCafeIdb from '../src/scripts/services/favorite-services';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteCafeIdb.getAllCafes()).forEach(async (cafe) => {
      await FavoriteCafeIdb.deleteCafe(cafe.id);
    });
  });

  itActsAsFavoriteCafeModel(FavoriteCafeIdb);
});
