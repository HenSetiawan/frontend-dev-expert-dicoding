class ReviewCard extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card-review">
    <div class="review-header">
    <p>${this._review.name}</p>
    <p>${this._review.date}</p>
    </div>
    <div class="review-body text-center">
      <p>${this._review.review}</p>
    </div>
   </div>
        `;
  }
}

customElements.define('review-card', ReviewCard);
