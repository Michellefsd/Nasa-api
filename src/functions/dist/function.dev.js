"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNASA = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getNASA = function getNASA(state) {
  var optionalKey, request;
  return regeneratorRuntime.async(function getNASA$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          optionalKey = "I8UhPoqXqnDK2im3ficSk47KNYIW7V7IgAG7NYcV";
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("https://api.nasa.gov/planetary/apod?api_key=".concat(process.env.REACT_APP_API_KEY || optionalKey)));

        case 3:
          request = _context.sent;
          state(request.data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}; // export const getApi = async(state) => {
//     const request = await axios.get("https://api.adviceslip.com/advice")
//     state(request.data.slip.advice)
// }


exports.getNASA = getNASA;
//# sourceMappingURL=function.dev.js.map
