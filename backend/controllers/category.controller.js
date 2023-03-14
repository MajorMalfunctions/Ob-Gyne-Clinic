const asyncHandler = require('express-async-handler')

const db = require("../models");
const Category = db.category;

const addCategory = asyncHandler(async (req, res) => {
    const newCategory = new Category(req.body)
    try {
    const savedCategory = await newCategory.save()
    res.status(200).json(savedCategory)
    } catch (error) {
    res.status(500).json(error)
    }
})

const getCategories = asyncHandler(async (req, res) => {
    try {
        const cat = await Category.find()
        res.status(200).json(cat)
    } catch (error) {
        res.status(500).json(error)
  }
})


module.exports = {
    getCategories,
    addCategory
}