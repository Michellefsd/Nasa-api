"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNews = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getNews = function getNews() {
  var request;
  return regeneratorRuntime.async(function getNews$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=eph4xRHl4ffKIAv4cmqZOmKkTfjxgob8"));

        case 2:
          request = _context.sent;
          console.log(request);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getNews = getNews;
//# sourceMappingURL=function.dev.js.map
