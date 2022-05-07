import './ReviewCard';

class ListReview extends HTMLElement {
  set customerReviews(customerReviews) {
    this._customerReviews = customerReviews;
    this.render();
  }

  async render() {
    const listContainer = document.createElement('div');
    listContainer.className = 'reviews';

    this._customerReviews.forEach((review) => {
      const reviewCard = document.createElement('review-card');
      reviewCard.review = review;
      listContainer.appendChild(reviewCard);
    });

    this.appendChild(listContainer);
  }
}

customElements.define('list-review', ListReview);
