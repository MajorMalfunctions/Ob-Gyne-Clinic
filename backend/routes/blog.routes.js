const controller = require("../controllers/blog.controller");
const { verifySignUp, authJwt, protect } = require("../middlewares");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/blog/create", [authJwt.verifyToken, authJwt.isAdmin], controller.create);

  app.get("/api/blog/findAll", controller.findAll);

  app.get("/api/blog/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.findOne);

  app.put("/api/blog/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.update);

  app.delete("/api/blog/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.delete);

  app.get("/api/blog/published", controller.findAllPublished);

};



