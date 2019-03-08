'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _authentication = require('../controllers/authentication');

var _authentication2 = _interopRequireDefault(_authentication);

var _middlewares = require('./middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = require('express').Router();

router.use('/api', _middlewares2.default.loginRequired, _api2.default);
router.post('/signup', _authentication2.default.signup);
router.post('/signin', _authentication2.default.signin);
router.get('/ping', function (req, res) {
  return res.send('pong');
});
router.get('/', function (req, res) {
  return res.json({ 'source': 'https://github.com/deersurge/deersurge-api"' });
});

exports.default = router;
//# sourceMappingURL=index.js.map