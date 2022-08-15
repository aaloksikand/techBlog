const withAuth = (req, res, next) => {
    // Set a middleware to allow user with loggedIn status pass, and send the user are not logged in to login page
    if (!req.session.loggedIn) {
      console.log("You cannot pass")
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;