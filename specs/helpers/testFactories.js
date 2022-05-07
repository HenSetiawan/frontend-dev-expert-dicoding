import LikeButtonInitiator from '../../src/scripts/utils/like-button-presenter';
import FavoriteCafeIdb from '../../src/scripts/services/favorite-services';

const createLikeButtonPresenterWithCafe = async (cafe) => {
  await LikeButtonInitiator.init('#likeButtonContainer', FavoriteCafeIdb, cafe);
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithCafe };
