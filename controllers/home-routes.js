const router = require("express").Router();

const { Blog, Comment, User } = require("../models");
// Find all available movies from the movie model, and display them on screen. Each object includes an image and a description.
router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll();
    // for each blog object in the array, 'get' the essential information.
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
// render the movieList.handlebars page. Pass in movies array and the logged in parameter of the req.session object.
res.render("blogList", {
  blogs, 
  loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// The login page will allow users to either sign up or login to the site.
router.get("/login", (req, res) => {
  // user is redirected to the homepage if they are already logged in.
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
// if user is not already logged in, render the login page.
  res.render("login");
});
// User can view the all of the information on the movie that they selected. If they are logged in, they will be able to leave a review.
//We need to look at this closely to get all Blogs associated with a User.
router.get("/blog/:id", async (req, res) => { 
  try {
    // find the movie by it's primary key from the req.params.id
    const blogData = await Blog.findByPk(req.params.id, {
      include: {
        // display any previous reviews
        model: Comment,
        attributes: ["content", "user_id", "date"],
        // use this to see which user made each review.
        include: [{ model: User }],
      },
    });

    const blog = blogData.get({ plain: true });

    // pass movie object to view along with currently logged in user photo, and the boolean loggedIn. 
    res.render("comment", {
      blog: blog,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

