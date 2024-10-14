const { model } = require("mongoose");

const { OrdersSchemas } = require("../Schemas/OrdersSchema");

const OrdersModel = new model("Order" , OrdersSchemas);

module.exports = {OrdersModel};