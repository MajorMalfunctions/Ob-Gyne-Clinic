const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
    name: {
      type: String
    }
})

const Roles = mongoose.model("Roles", RoleSchema, "Roles");
module.exports = Roles;

// const mongoose = require("mongoose");

// const Role = mongoose.model(
//   "Role",
//   new mongoose.Schema({
//     name: String
//   })
// );

// module.exports = Role;