const { verifySignUp } = require("../middlewares");
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
    "/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/auth/signin", controller.signin);

  app.post("/auth/signout", controller.signout);

  app.post("/auth/refreshToken", controller.refreshToken);

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

















