const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/patients.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // GET ALL PATIENT LIST
  app.get("/patients", [authJwt.verifyToken, authJwt.isAdmin],
   controller.allPatients)

  // GET PATIENT
  app.get("/singlePatient/:id", [authJwt.verifyToken, authJwt.isModerator], controller.singlePatient)

  // UPDATE PATIENT
  app.put("/updatePatient/:id", [authJwt.verifyToken, authJwt.isModerator], controller.updatePatient)

  // DELETE PATIENT
  app.delete("/deletePatient/:id", [authJwt.verifyToken, authJwt.isAdmin],  controller.deletePatient)

};
