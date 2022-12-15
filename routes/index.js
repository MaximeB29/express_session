var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET SESSION PAGE */

router.get("/session-in", function (req, res, next) {
  req.session.song = "be bop a lula";
  res.render("index", { body: "Song saved" });
});
router.get("/session-out", function (req, res, next) {
  res.render("index", {
    body: "Song stored",
  });
});

module.exports = router;
