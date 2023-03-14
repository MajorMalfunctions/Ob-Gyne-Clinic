const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
})

const Category = mongoose.model("Category", CategorySchema, "Category");
module.exports = Category;