/* eslint-disable comma-dangle */
import restaurantService from '../services/restaurant-service';

class CafeCard extends HTMLElement {
  set cafe(cafe) {
    this._cafe = cafe;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card">
       <a href="#/detail/${this._cafe.id}">
        <img class="lazyload" data-src="${restaurantService.getImageById(
    this._cafe.pictureId
  )}" alt="${this._cafe.name}" />
        <p class="text-medium cafe-name">${this._cafe.name} - ${this._cafe.city}</</p>
        <p class="text-secondary">
        ${this._cafe.description.slice(0, 100)}...</p>
        </p>
      </a>
      </div>
        `;
  }
}

customElements.define('cafe-card', CafeCard);
