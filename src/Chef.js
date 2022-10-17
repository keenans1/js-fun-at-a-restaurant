class Chef {
  constructor(name, restaurant, customer) {
    this.name = name;
    this.restaurant = restaurant;
    this.greetCustomer = function (customer, morning) {
      if (morning) {
        return `Good morning, ${customer}!`;
      } else {
        return `Hello, ${customer}!`;
      }
    };
    this.checkForFood = function (foodItem) {

      if (this.restaurant.menus[foodItem.type].includes(foodItem)) {
        return `Yes, we're serving ${foodItem.name} today!`;
      } else {
        return `Sorry, we aren't serving ${foodItem.name} today.`;
      }

    };
  }
}


module.exports = Chef;