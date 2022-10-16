function createRestaurant(name) {
  var pizzaRestaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }

  return pizzaRestaurant;
}

function addMenuItem(pizzaRestaurant, menuItem) {

  if (menuItem != null) {
    if (menuItem.type === 'breakfast') {
      if (!pizzaRestaurant.menus.breakfast.includes(menuItem)) {
        pizzaRestaurant.menus.breakfast.push(menuItem);
      }
    } else if (menuItem.type === 'lunch') {
      if (!pizzaRestaurant.menus.lunch.includes(menuItem)) {
        pizzaRestaurant.menus.lunch.push(menuItem);
      }
    } else {
      if (!pizzaRestaurant.menus.dinner.includes(menuItem)) {
        pizzaRestaurant.menus.dinner.push(menuItem);
      }
    }
  }

  return pizzaRestaurant;
}

function removeMenuItem(pizzaRestaurant, name, type) {

  var result = '';

  if (type === 'breakfast') {

    for (var i = 0; i < pizzaRestaurant.menus.breakfast.length; i++) {

      var breakfastItemName = pizzaRestaurant.menus.breakfast[i].name;
      var breakfastItemType = pizzaRestaurant.menus.breakfast[i].type;

      if (breakfastItemName === name && breakfastItemType === type) {

        pizzaRestaurant.menus.breakfast.splice(i, 1);
        result = `No one is eating our ${breakfastItemName} - it has been removed from the ${type} menu!`;
      }
    }
  } else if (type === 'lunch') {
    for (var i = 0; i < pizzaRestaurant.menus.lunch.length; i++) {

      var lunchItemName = pizzaRestaurant.menus.lunch[i].name;
      var lunchItemType = pizzaRestaurant.menus.lunch[i].type;

      if (lunchItemName === name && lunchItemType === type) {

        pizzaRestaurant.menus.lunch.splice(i, 1);
        result = `No one is eating our ${lunchItemName} - it has been removed from the ${type} menu!`;
      }
    }
  } else {
    for (var i = 0; i < pizzaRestaurant.menus.dinner.length; i++) {

      var dinnerItemName = pizzaRestaurant.menus.dinner[i].name;
      var dinnerItemType = pizzaRestaurant.menus.dinner[i].type;

      if (dinnerItemName === name && dinnerItemType === type) {

        pizzaRestaurant.menus.dinner.splice(i, 1);
        result = `No one is eating our ${dinnerItemName} - it has been removed from the ${type} menu!`;
      }
    }
  }

  if (result === '') {
    result = `Sorry, we don't sell ${name}, try adding a new recipe!`;
  }

  return result;
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}