import '../components/likeButton';
import { renderComponent } from './component-maker';

const likeButtonInitiator = {
  async init(likeButtonContainer, favoriteCafe, cafe) {
    this._cafe = cafe;
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteCafe = favoriteCafe;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._cafe;
    if (await this._isCafeExist(id)) {
      await this._renderLiked();
    } else {
      await this._renderLike();
    }
  },

  _renderLike() {
    renderComponent('like-button', this._likeButtonContainer, 'isLiked', false);

    const likeButton = document.querySelectorAll('.btn-like');
    likeButton.forEach((btn) => {
      btn.addEventListener('click', async () => {
        await this._favoriteCafe.putCafe(this._cafe);
        btn.remove();
        this._renderButton();
      });
    });
  },

  _renderLiked() {
    renderComponent('like-button', this._likeButtonContainer, 'isLiked', true);

    const likeButton = document.querySelectorAll('.btn-like');
    likeButton.forEach((btn) => {
      btn.addEventListener('click', async () => {
        await this._favoriteCafe.deleteCafe(this._cafe.id);
        btn.remove();
        this._renderButton();
      });
    });
  },

  async _isCafeExist(id) {
    const cafe = await this._favoriteCafe.getCafe(id);
    return !!cafe;
  },
};

export default likeButtonInitiator;
