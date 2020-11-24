const jwt = require("jsonwebtoken");

async function jwtChecker (req, res, next) {
    let jwtToken = req.header.authorization.replace("Bearer ", "");

    try {
      jwt.verify(jwtToken, "hamsteroverlord007");

      next();
    } catch (err) {
      console.log(err);
      res.send("You have no permission to see this! Please sign up!");
    }
  };

  module.exports = jwtChecker;