const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// require user to be logged in to post a review.
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    

    res.status(200).json(newComment);  //change to (newBlog)
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
