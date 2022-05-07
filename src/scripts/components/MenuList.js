class MenuList extends HTMLElement {
  set menu(menu) {
    this._menu = menu;
    this.render();
  }

  render() {
    let foodItems = '';
    this._menu.foods.forEach((food) => {
      foodItems += `<li>${food.name}</li>`;
    });

    let drinkItems = '';
    this._menu.drinks.forEach((drink) => {
      drinkItems += `<li>${drink.name}</li>`;
    });

    this.innerHTML = `
      <div class="food mt-2">
        <h4 class="text-medium">Food</h4>
        <ul class="text-secondary restaurant-info">
        ${foodItems}
        </ul>
     </div>

     <div class="drink mt-2">
     <h4 class="text-medium">Drink</h4>
     <ul class="text-secondary restaurant-info">
        ${drinkItems}
     </ul>
    </div>
          `;
  }
}

customElements.define('menu-list', MenuList);
