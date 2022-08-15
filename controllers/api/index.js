const router = require('express').Router();

const userRoutes = require('./userRoutes');
//change reviewRoutes to blogRoutes
const reviewRoutes = require('./reviewRoutes');
//add const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
//change to /blogs and blogRoutes;
router.use('/reviews', reviewRoutes);
//add router.use ('/comments', commentRoutes);

module.exports = router;

