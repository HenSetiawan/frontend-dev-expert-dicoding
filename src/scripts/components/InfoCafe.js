import restaurantService from '../services/restaurant-service';

class InfoCafe extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    let categories = '';
    this._restaurant.categories.forEach((category) => {
      categories += `<span class="category">${category.name}</span>`;
    });
    this.innerHTML = `
    <img class="detail-img mt-2" src="${restaurantService.getImageById(
    this._restaurant.pictureId,
  )}" alt="${this._restaurant.name}">
    <ul class="text-secondary restaurant-info">
      <li><i class="fa fa-home"></i> Nama : ${this._restaurant.name}</li>
      <li><i class="fa fa-address-card"></i> Jalan : ${
  this._restaurant.address
} ${this._restaurant.city}</li>
      <li><i class="fa fa-star"></i> Rating : ${this._restaurant.rating}</li>
      <li><i class="fa fa-info"></i> Description: ${
  this._restaurant.description
}</li>
      <li>${categories}</li>
    </ul> 
        `;
  }
}

customElements.define('info-cafe', InfoCafe);
