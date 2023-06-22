"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApi = exports.getNASA = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getNASA = function getNASA(state) {
  var request;
  return regeneratorRuntime.async(function getNASA$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(process.env.REACT_APP_API_KEY);
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("https://api.nasa.gov/planetary/apod?api_key=".concat(process.env.REACT_APP_API_KEY)));

        case 3:
          request = _context.sent;
          state(request.data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getNASA = getNASA;

var getApi = function getApi(state) {
  var request;
  return regeneratorRuntime.async(function getApi$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("https://api.adviceslip.com/advice"));

        case 2:
          request = _context2.sent;
          state(request.data.slip.advice);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getApi = getApi;
//# sourceMappingURL=function.dev.js.map
