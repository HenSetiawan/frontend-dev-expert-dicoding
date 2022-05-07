import { renderComponent } from '../../utils/component-maker';
import restaurantService from '../../services/restaurant-service';
import '../../components/TitleSection';
import '../../components/Jumbotron';
import '../../components/ListCafe';

const HomePage = {
  render() {
    return `
      <div class="content">
        <div id="home-page" class="home-page">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const dataCafe = await restaurantService.getAllRestaurants();
    renderComponent('jumbotron-element', '.home-page');
    renderComponent('title-section', '.home-page');
    renderComponent('list-cafe', '.home-page', 'cafe', dataCafe.restaurants);
  },
};

export default HomePage;
