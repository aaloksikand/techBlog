//change title to blogRoutes.js

const router = require('express').Router();
//change {Review} to {Blog}
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

// require user to be logged in to post a review.
router.post('/', withAuth, async (req, res) => {
  try {
    // create new review with the information passed in the body. pass the current user_id when creating a new Review object. 
    const newBlog = await Blog.create({  //change to const newReview = await Review.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    

    res.status(200).json(newBlog);  //change to (newBlog)
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
