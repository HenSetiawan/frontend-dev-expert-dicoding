import './CafeCard';

class ListCafe extends HTMLElement {
  set cafe(cafe) {
    this._cafe = cafe;
    this.render();
  }

  async render() {
    const dataCafe = this._cafe;
    const cafeListContainer = document.createElement('div');
    cafeListContainer.className = 'list-menu container cafe';
    cafeListContainer.setAttribute('id', 'main-content');
    dataCafe.forEach((cafe) => {
      const cafeCard = document.createElement('cafe-card');
      cafeCard.cafe = cafe;
      cafeListContainer.appendChild(cafeCard);
    });

    this.appendChild(cafeListContainer);
  }
}

customElements.define('list-cafe', ListCafe);
