const { model } = require("mongoose");

const { PositionsSchemas } = require("../Schemas/PositionsSchema");

const PositionsModel = new model("Position" , PositionsSchemas);

module.exports = {PositionsModel};