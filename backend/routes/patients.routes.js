const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/patients.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/patient/create", controller.create)

  app.get("/api/patient/findAll", controller.findAll)

  app.get("/api/patient/singlePatient/:id", controller.findOne)

  app.put("/api/patient/updatePatient/:id", controller.updateOne)

  app.delete("/api/patient/deletePatient/:id", controller.deleteOne)
};
