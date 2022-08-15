const router = require('express').Router();
// setup routes
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes')
// setup up homeroutes and api routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

