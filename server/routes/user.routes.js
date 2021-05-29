const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/bakery/all", controller.allAccess);

  app.get("/api/bakery/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/bakery/moderator",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/bakery/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};