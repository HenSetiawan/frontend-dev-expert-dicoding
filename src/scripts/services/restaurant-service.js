exports.getAllRestaurants = async () => {
  try {
    const response = await fetch('https://restaurant-api.dicoding.dev/list');
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

exports.getRestaurantById = async (id) => {
  try {
    const response = await fetch(
      `https://restaurant-api.dicoding.dev/detail/${id}`,
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

exports.getImageById = (id) => `https://restaurant-api.dicoding.dev/images/medium/${id}`;
