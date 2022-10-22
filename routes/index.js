var express = require("express");
var router = express.Router();
var users = require('../public/users');
console.log(users);
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/home", function (req, res, next) {
  res.render("index", { title: "Home" });
});

/* GET about page. */
router.get("/about", function (req, res, next) {
  res.render("index", { title: "About me" });
});

/*Get products page */
router.get("/products", function (req, res, next) {
  res.render("index", { title: "Products" });
});

/*Get services page */
router.get("/services", function (req, res, next) {
  res.render("index", { title: "Services" });
});

/*get contact us page */
router.get("/contact", function (req, res, next) {
  res.render("index", { title: "Contact me" });
});


let userLogin = false;
/*get login us page */
router.get("/login", function (req, res, next) {
  console.log("login");
  if(!userLogin){
  res.render("index", { title: "Login" });
  }else{
    res.redirect("/contacts");

  }
});


/*get logout us page */
router.get("/logout", function (req, res, next) {
  console.log("logout");
  userLogin = false;
  res.render("index", { title: "Logout" });
});

router.post("/login", function (request, res) {
  console.log(request.body); //you will get your data in this as object.
  if (
    users.some(
      (x) =>
        x.username === request.body.username &&
        x.password === request.body.password
    )
  ) {
    userLogin = true;
    res.redirect("/contacts");
  } else {
    userLogin = false;
    res.render("index", { title: "Login", error: true });
  }
});
/*get contacts us page */
router.get("/contacts", function (req, res, next) {
  if(userLogin){
    res.render("index", { title: "Contacts", users: users });}
    else{
      
    res.redirect("/login");
    }
});

module.exports = router;
