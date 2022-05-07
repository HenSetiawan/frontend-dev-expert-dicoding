import '../../components/ListCafe';
import { renderComponent } from '../../utils/component-maker';
import FavoriteCafeIdb from '../../services/favorite-services';

const FavoritePage = {
  render() {
    return `
    <div class="container">
    <h2 class="text-medium mt-2">Favorite Cafe</h2>
    </div>
    <div class="content favorite-page">
    </div>
      `;
  },

  async afterRender() {
    const dataCafe = await FavoriteCafeIdb.getAllCafes();
    if (dataCafe.length < 1) {
      document.querySelector('.favorite-page').innerHTML =
        "<p class='text-medium mt-2 text-center'>You don't have any favorite Cafe</p>";
    } else {
      renderComponent('list-cafe', '.favorite-page', 'cafe', dataCafe);
    }
  },
};

export default FavoritePage;
