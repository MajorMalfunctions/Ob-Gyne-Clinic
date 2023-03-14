// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const TodoSchema = new Schema({
//   name: { type: String, required: true, minlength: 3, maxlength: 200 },
//   author: String,
//   uid: String,
//   isComplete: Boolean,
//   date: { type: Date, default: new Date() },
// });

// const todoModel = mongoose.model("Todo", TodoSchema, "Todo");
// module.exports = todoModel;

const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
  task: { type: String, required: true, minlength: 3, maxlength: 200 },
  isComplete: Boolean,
  uid: String,
  date: { type: Date, default: new Date() },
});

const todoModel = mongoose.model("Todo", TodoSchema, "Todo");
module.exports = todoModel;
