class LikeButton extends HTMLElement {
  set isLiked(isLiked) {
    this._isLiked = isLiked;
    this.render();
  }

  async render() {
    if (this._isLiked) {
      this.innerHTML = `
        <button aria-label="unlike this cafe" class="btn-like" id="like-btn">
           <i class="fa fa-heart" aria-hidden="true"></i>
        </button>
          `;
    } else {
      this.innerHTML = `
        <button aria-label="like this cafe" class="btn-like" id="like-btn">
           <i class="fa fa-heart-o" aria-hidden="true"></i>
        </button>
          `;
    }
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('like-button') || customElements.define('like-button', LikeButton);
