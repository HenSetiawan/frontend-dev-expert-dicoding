import UrlParser from '../../routes/url-parser';
import restaurantService from '../../services/restaurant-service';
import FavoriteCafeIdb from '../../services/favorite-services';
import likeButtonInitiator from '../../utils/like-button-presenter';
import { renderComponent } from '../../utils/component-maker';
import '../../components/Jumbotron';
import '../../components/ListReview';
import '../../components/MenuList';
import '../../components/InfoCafe';

const DetailPage = {
  render() {
    return `
        <div class="container detail-page mt-2">
            <h2 class="text-medium">Detail Restaurant</h2>
            <div class="restaurant">    
            </div>

            <h3 class="text-medium text-center mt-2">Restaurant Menu</h3>
            <div class="menu mt-2">
            </div>

            <h3 class="text-medium text-center mt-2">Reviews</h3>
            <div class="list-review mt-2">
            </div>

            <div id="likeButtonContainer"></div>
         </div>
      `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { id } = url;
    const detailCafe = await restaurantService.getRestaurantById(id);
    const { customerReviews } = detailCafe.restaurant;
    const cafeMenus = detailCafe.restaurant.menus;
    const cafe = detailCafe.restaurant;

    renderComponent('menu-list', '.menu', 'menu', cafeMenus);
    renderComponent(
      'list-review',
      '.list-review',
      'customerReviews',
      customerReviews,
    );
    renderComponent('info-cafe', '.restaurant', 'restaurant', cafe);
    likeButtonInitiator.init('#likeButtonContainer', FavoriteCafeIdb, cafe);
  },
};

export default DetailPage;
