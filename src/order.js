function takeOrder(order, deliveryOrders) {

  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(order);
  }
}

function refundOrder(orderNumber, deliveryOrders) {

  for (var i = 0; i < deliveryOrders.length; i++) {

    if (deliveryOrders[i].orderNumber === orderNumber) {

      deliveryOrders.splice(i, 1);
    }
  }

  return deliveryOrders;
}

function listItems(deliveryOrders) {

  var orderNames = '';

  for (var i = 0; i < deliveryOrders.length; i++) {

    if (i === deliveryOrders.length - 1) {
      orderNames += deliveryOrders[i].item;
    } else {
      orderNames += deliveryOrders[i].item + ', ';
    }
  }

  return orderNames;
}




function searchOrder(deliveryOrders, item) {

  for (var i = 0; i < deliveryOrders.length; i++) {

    if (deliveryOrders[i].item === item) {
      return true;
    }
  }

  return false;
}







module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}