const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogSchema = new Schema({
  title: {
    type: String,
    // required: true,
    // ref: "User"
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ["women", "parenting", "event", "health", "disease", "wealth"],
    default: "women",
    ref: "Category"
  },
  cover: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now()
  },
  published: {
    type: Boolean,
    default: false
  },
  likes: {
    type: Map,
    of: Boolean,
  },
  comments: {
    type: Array,
    default: [],
  },
}, {
  timestamps: true,
  collection: 'blogs'
});


const blogModel = mongoose.model('Blog', BlogSchema, "Blog");

module.exports = blogModel;