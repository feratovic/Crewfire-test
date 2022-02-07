const controller = require('../controllers/public.controller');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
  });

  //Route for fetching all data
  app.get('/api/public', controller.fetchAll);

  //Route for fetching data with tag
  app.get('/api/search', controller.searchByTag);
};
