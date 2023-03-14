const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateFullnameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.get("/api/auth/me", controller.getMe);

  app.post("/api/auth/signin", controller.signin);

  app.post("/api/auth/logout", controller.logout);

  app.post("/api/auth/refreshToken", controller.refreshToken);

  app.get("/api/auth/users", [authJwt.verifyToken, authJwt.isAdmin], controller.findAll);

  app.post("/api/auth/refreshtoken", controller.refreshToken);

  app.post("/api/auth/forgot-password", controller.forgotPassword);

  app.post("/api/auth/reset-password/:resetToken", controller.resetPassword);

  // app.post("/api/auth/forgotpassword", controller.forgotPassword);
  // app.put("/api/auth/resetpassword/:id/:resetToken", controller.resetPassword);

};




// router.route('/signup').post([ checkEmailOrPhone, registerUser])

// router.route('/register').post([checkEmailOrPhone, createUser])

// router.route('/login').post(loginUser)

// router.route('/logout').post(logoutUser)

// router.route('/forgot-password').post(forgotPassword)

// router.route('/change-password').post(changePassword)

// router.route('/reset-password/:id/:resetToken').put(resetPassword)

// router.route('/verify-account/:token').get(saveVerifiedEmail);

// router.route('/getMe').get(getMe)

















