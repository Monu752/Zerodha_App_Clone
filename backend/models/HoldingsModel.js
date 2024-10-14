const { model } = require("mongoose");

const { HoldingsSchemas } = require("../Schemas/HoldingsSchemas");

const HoldingsModel = new model("Holding" , HoldingsSchemas);

module.exports = {HoldingsModel};