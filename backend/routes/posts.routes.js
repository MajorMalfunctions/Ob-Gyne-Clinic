const controller = require("../controllers/post.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/post/createPost", controller.create);

  app.get("/api/post/findAll", controller.findAll);
  
  app.get("/api/post/:id", controller.findOne);
  
  app.put("/api/post/:id", controller.update);
  
  app.delete("/api/post/delete/:id", controller.delete);
  

};








