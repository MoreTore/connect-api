'use strict';

var _account = require('./account');

var account = _interopRequireWildcard(_account);

var _athena = require('./athena');

var athena = _interopRequireWildcard(_athena);

var _auth = require('./auth');

var auth = _interopRequireWildcard(_auth);

var _billing = require('./billing');

var billing = _interopRequireWildcard(_billing);

var _devices = require('./devices');

var devices = _interopRequireWildcard(_devices);

var _derived = require('./derived');

var _derived2 = _interopRequireDefault(_derived);

var _drives = require('./drives');

var drives = _interopRequireWildcard(_drives);

var _leaderboard = require('./leaderboard');

var leaderboard = _interopRequireWildcard(_leaderboard);

var _raw = require('./raw');

var raw = _interopRequireWildcard(_raw);

var _request = require('./request');

var request = _interopRequireWildcard(_request);

var _navigation = require('./navigation');

var navigation = _interopRequireWildcard(_navigation);

var _clips = require('./clips');

var clips = _interopRequireWildcard(_clips);

var _video = require('./video');

var video = _interopRequireWildcard(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = {
  account: account,
  athena: athena,
  auth: auth,
  billing: billing,
  devices: devices,
  derived: _derived2.default,
  drives: drives,
  leaderboard: leaderboard,
  raw: raw,
  request: request,
  video: video,
  navigation: navigation,
  clips: clips
};