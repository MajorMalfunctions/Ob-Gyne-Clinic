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
  cover: {
    type: String,
  },
  date: {
    type: Date
  },
//   roles: [
//     {
//       type: Schema.Types.ObjectId,
//       enum: ["pending", "approved", "rejected"],
//       default: "pending",
//       ref: "Patient",
//     }
//   ],
  published: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true,
  collection: 'blogs'
});


const blogModel = mongoose.model('Blog', BlogSchema, "Blog");

module.exports = blogModel;